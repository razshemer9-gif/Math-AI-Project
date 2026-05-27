import { Router } from 'express';
import multer from 'multer';
import rateLimit from 'express-rate-limit';
import { solveMath } from '../services/tutor.js';

// User-facing error message — always in Hebrew, no technical detail.
const GENERIC_ERROR = 'אופס! משהו השתבש. נסה שוב בעוד רגע.';

const MAX_TEXT_LEN  = 500;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_IMAGE_BYTES },
});

// Rate-limit /solve to 20 requests per minute per IP. Generous enough for a
// child working through a worksheet, tight enough to prevent abuse.
const solveLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: GENERIC_ERROR },
});

const router = Router();

// Multer is wrapped so we can convert its errors (e.g. file-too-large) into
// the same generic Hebrew message instead of leaking error codes.
function handleUpload(req, res, next) {
  upload.single('image')(req, res, err => {
    if (err) {
      console.error('[solve] upload rejected:', err.code || err.message);
      return res.status(400).json({ error: GENERIC_ERROR });
    }
    next();
  });
}

router.post('/', solveLimiter, handleUpload, async (req, res) => {
  try {
    const rawText = typeof req.body?.text === 'string' ? req.body.text : '';
    const text  = rawText.trim();
    const grade = req.body?.grade ? String(req.body.grade) : '1';
    const level = req.body?.level || 'easy';
    const image = req.file
      ? { buffer: req.file.buffer, mimeType: req.file.mimetype }
      : null;

    if (!text && !image) {
      return res.status(400).json({ error: GENERIC_ERROR });
    }
    if (text.length > MAX_TEXT_LEN) {
      console.warn('[solve] rejected: text length', text.length);
      return res.status(400).json({ error: GENERIC_ERROR });
    }

    const explanation = await solveMath({ text, image, grade, level });
    res.json({ explanation });
  } catch (err) {
    // Full detail goes to the server logs only — never to the client.
    console.error('[solve] upstream error:', {
      status: err?.status,
      code: err?.code,
      message: err?.message,
    });
    res.status(502).json({ error: GENERIC_ERROR });
  }
});

export default router;
