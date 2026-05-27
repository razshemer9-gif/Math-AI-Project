import { Router } from 'express';
import multer from 'multer';
import { solveMath } from '../services/tutor.js';

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });
const router = Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const text = req.body?.text?.trim();
    const image = req.file
      ? { buffer: req.file.buffer, mimeType: req.file.mimetype }
      : null;

    if (!text && !image) {
      return res.status(400).json({ error: 'Send "text" field or "image" file.' });
    }

    const explanation = await solveMath({ text, image });
    res.json({ explanation });
  } catch (err) {
    console.error(err);
    const status = err.status || 500;
    const message = err.message || 'Failed to solve question.';
    res.status(status).json({ error: message });
  }
});

export default router;
