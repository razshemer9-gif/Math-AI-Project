import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `אתה מורה פרטי למתמטיקה לילדים.
ענה תמיד בעברית פשוטה וברורה.
הסבר את הפתרון צעד אחר צעד, בשפה ידידותית ומעודדת.
אם השאלה מתוך תמונה, קרא אותה בעיון לפני שאתה עונה.
בסוף, כתוב את התשובה הסופית בשורה נפרדת בצורה: "התשובה: ..."`;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash-lite',
  systemInstruction: SYSTEM_PROMPT,
});

export async function solveMath({ text, image }) {
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
