/**
 * Grade 2 (כיתה ב׳) — curriculum entry point.
 *
 * SOURCE OF TRUTH: kita2.pdf (Israeli Ministry of Education math syllabus for
 * Grade 2). Extracted via scripts/extract-syllabus.js. The PDF organizes
 * Grade 2 into five main areas with explicit hour budgets:
 *
 *   א. המספרים הטבעיים בתחום ה-1,000    — 10 hrs
 *   ב. פעולות החשבון בתחום ה-100 או יותר — 74 hrs
 *   ג. הרחבת תחום המספרים                — 6 hrs
 *   ד. חקר נתונים                        — 5 hrs
 *   ה. מדידות וגאומטרייה                — 30 hrs
 *
 * Per the project owner's spec, content is split into easy / medium /
 * advanced files for prompt-time scoping; this file orchestrates them.
 */

import * as EASY     from './grade2/easy.js';
import * as MEDIUM   from './grade2/medium.js';
import * as ADVANCED from './grade2/advanced.js';
import { MASTERY_GOALS } from './grade2/mastery.js';

export const GRADE = 2;
export const GRADE_LABEL = 'כיתה ב׳';

export const LEVELS = ['easy', 'medium', 'advanced'];
export const LEVEL_LABELS = {
  easy:     'רמה קלה',
  medium:   'רמה בינונית',
  advanced: 'רמה מתקדמת',
};

const SCOPE = { easy: EASY, medium: MEDIUM, advanced: ADVANCED };

/** Flat list of topics with their level — useful for diagnostics. */
export const TOPICS = LEVELS.flatMap(level => SCOPE[level].TOPICS.map(t => ({ ...t, level })));

export const LEVEL_SCOPE = {
  easy: {
    title: 'רמה קלה (כיתה ב׳)',
    allowed:   EASY.ALLOWED,
    forbidden: EASY.FORBIDDEN,
  },
  medium: {
    title: 'רמה בינונית (כיתה ב׳)',
    allowed:   MEDIUM.ALLOWED,
    forbidden: MEDIUM.FORBIDDEN,
  },
  advanced: {
    title: 'רמה מתקדמת (כיתה ב׳)',
    allowed:   ADVANCED.ALLOWED,
    forbidden: ADVANCED.FORBIDDEN,
  },
};

export const AI_INSTRUCTIONS = {
  voice: [
    'הסבר תמיד בעברית פשוטה וברורה, כאילו אתה מדבר עם ילד בכיתה ב׳.',
    'השתמש במשפטים קצרים ובמילים יומיומיות, אך אפשר להשתמש במונחים מתמטיים שכבר נלמדו בכיתה ב׳ (יחידות, עשרות, מאות, גורמים, מכפלה, פאה, היקף, שטח, מצולע).',
    'אל תשתמש באלגברה פורמלית, באותיות x/y, או במונחים שלא נלמדים בכיתה ב׳.',
    'העדף דוגמאות מוחשיות: סוכריות, ספרים, כדורים, שולחנות, ילדים.',
    'חלק כל הסבר לצעדים קצרים וברורים.',
    'עודד את הילד במשפט חיובי קצר בסוף (למשל: "כל הכבוד!" או "כיף ללמוד איתך").',
  ],
  format: [
    'התחל בברכה קצרה וידידותית.',
    'תן הסבר צעד-צעד ממוספר.',
    'בסוף, כתוב שורה אחת בפורמט: "התשובה: ..." (בדיוק כך).',
  ],
  outOfScope: 'אם השאלה מעבר לרמה של כיתה ב׳, התחל את התשובה במשפט: "השאלה הזאת קצת מתקדמת לכיתה ב׳, אבל אפשר להסביר אותה בצורה פשוטה." ואז המשך להסביר בצורה הפשוטה ביותר שאפשר.',
};

export { MASTERY_GOALS };

export function buildSystemPrompt(level = 'easy') {
  const scope = LEVEL_SCOPE[level] || LEVEL_SCOPE.easy;
  const lines = [
    `אתה מורה פרטי למתמטיקה לכיתה ב׳.`,
    `הרמה הנבחרת: ${scope.title}.`,
    '',
    'מותר להסביר את הנושאים הבאים בלבד:',
    ...scope.allowed.map(t => '• ' + t),
    '',
    'אסור להשתמש בנושאים הבאים:',
    ...scope.forbidden.map(t => '• ' + t),
    '',
    'איך להסביר:',
    ...AI_INSTRUCTIONS.voice.map(t => '• ' + t),
    '',
    'מבנה התשובה:',
    ...AI_INSTRUCTIONS.format.map(t => '• ' + t),
    '',
    AI_INSTRUCTIONS.outOfScope,
  ];
  return lines.join('\n');
}

export default {
  GRADE,
  GRADE_LABEL,
  LEVELS,
  LEVEL_LABELS,
  TOPICS,
  MASTERY_GOALS,
  AI_INSTRUCTIONS,
  LEVEL_SCOPE,
  buildSystemPrompt,
};
