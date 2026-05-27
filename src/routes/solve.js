import { Router } from 'express';
import multer from 'multer';
import { solveMath } from '../services/tutor.js';

const ALLOWED_IMAGE_MIMES = new Set([
    'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif',
  ]);

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
          if (ALLOWED_IMAGE_MIMES.has(file.mimetype)) {
                  cb(null, true);
          } else {
                  const err = new Error('סוג הקובץ אינו נתמך. אנא העלו תמונה בפורמט JPG, PNG, WebP או GIF.');
                  err.status = 400;
                  cb(err, false);
          }
    },
});

const router = Router();

router.post('/', upload.single('image'), async (req, res) => {
    try {
          const text  = req.body?.text?.trim() || '';
          const grade = req.body?.grade ? String(req.body.grade).trim() : '1';
          const level = req.body?.level ? String(req.body.level).trim() : 'easy';
          const image = req.file ? { buffer: req.file.buffer, mimeType: req.file.mimetype } : null;

      const explanation = await solveMath({ text, image, grade, level });
          res.json({ explanation });

    } catch (err) {
          const status  = err.status || 500;
          const message = (err.message && err.message.length < 400)
            ? err.message
                  : 'משהו השתבש. נסו שוב בעוד רגע.';

      if (!err.status || err.status >= 500) {
              console.error('[ROUTE_ERROR] status=' + status + ' msg=' + (err.message || '').substring(0, 200));
      }

      const httpStatus  = err.isUnsupported ? 200 : status;
          const responseKey = err.isUnsupported ? 'explanation' : 'error';
          res.status(httpStatus).json({ [responseKey]: message });
    }
});

export default router;
