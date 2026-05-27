import { GoogleGenerativeAI } from '@google/generative-ai';
import grade1 from '../curriculum/grade1.js';
import grade2 from '../curriculum/grade2.js';

const FALLBACK_PROMPT = `אתה מורה פרטי למתמטיקה לילדים.
ענה תמיד בעברית פשוטה וברורה.
הסבר את הפתרון צעד אחר צעד, בשפה ידידותית ומעודדת.
אם השאלה מתוך תמונה, קרא אותה בעיון לפני שאתה עונה.
בסוף, כתוב את התשובה הסופית בשורה נפרדת בצורה: "התשובה: ..."`;

const CURRICULA = {
  '1': grade1,
  '2': grade2,
};

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function buildPrompt({ grade, level }) {
  const curriculum = CURRICULA[String(grade)];
  if (!curriculum) return FALLBACK_PROMPT;
  return curriculum.buildSystemPrompt(level);
}

export async function solveMath({ text, image, grade, level }) {
  const systemInstruction = buildPrompt({ grade, level });
  const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite',
    systemInstruction,
  });

  const parts = [];
  parts.push({ text: text || 'פתור את שאלת המתמטיקה שבתמונה.' });
  if (image) {
    parts.push({
      inlineData: {
        data: image.buffer.toString('base64'),
        mimeType: image.mimeType,
      },
    });
  }

  const result = await model.generateContent(parts);
  return result.response.text().trim();
}
