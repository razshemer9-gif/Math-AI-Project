/**
 * Grade 2 — ADVANCED level scope.
 *
 * Enrichment + advanced students. Includes the upper half of the
 * multiplication table (toward 10×10), divisibility by 2/5/10, parentheses,
 * intuitive negative numbers on the number line, area vs. perimeter
 * distinctions, transformations (reflection / translation / line symmetry),
 * multi-step word problems and data interpretation.
 */

export const TOPICS = [
  {
    id: 'three-digit-reasoning',
    title: 'חישוב והשוואה במספרים תלת-ספרתיים',
    pdfRef: 'ב.1.ג (אומדן/תובנה) + א.6',
    subtopics: [
      { id: 'compare-3d-no-compute', title: 'מה גדול יותר ללא חישוב: 107−13 או 107−15?' },
      { id: 'sort-by-result',         title: 'סידור תרגילים לפי גודל התוצאה (305+42, 305+124, 24+305)' },
      { id: 'mental-3d-add',          title: 'חיבור בעל-פה של מספרים תלת-ספרתיים (240+35, 240+300)' },
      { id: 'change-digit',           title: 'במספר 375 שינו את ספרת העשרות ל-8 — בכמה גדל המספר?' },
    ],
  },
  {
    id: 'add-sub-beyond-100',
    title: 'חיבור וחיסור מעבר ל-100 (לפי יכולת)',
    pdfRef: 'ב.1.ג (סוף הסעיף)',
    subtopics: [
      { id: 'extension-as-challenge', title: 'תרגילים מעבר ל-100 כאתגר חשיבתי (לא לימוד שיטתי)' },
    ],
  },
  {
    id: 'multi-step-word-problems',
    title: 'שאלות מילוליות רב-שלביות',
    pdfRef: 'ב.3 (sub-בעיות איסוף שיש בהן יותר מפעולה אחת)',
    subtopics: [
      { id: 'two-step-money',  title: 'לעודד היו 15 ₪, אביו נתן 20, קנה ב-8. כמה נשארו?' },
      { id: 'range-answers',   title: 'שאלות בעלות טווח של תשובות אפשריות' },
      { id: 'compare-with-mul', title: 'שילוב של פעולות שונות בשאלה אחת' },
    ],
  },
  {
    id: 'multiplication-toward-10x10',
    title: 'לוח הכפל עד 10×10',
    pdfRef: 'ב.4',
    subtopics: [
      { id: 'table-7-8-9-10',  title: 'הרחבת לוח הכפל ל-7, 8, 9, 10' },
      { id: 'distributive',     title: 'שימוש בחוק הפילוג להכפלה (5×6 = 5×3 + 5×3)' },
      { id: 'associative',      title: 'חוק הקיבוץ (6×5 = 3×2×5 = 3×10)' },
      { id: 'mul-mental',       title: 'חישוב בעל-פה של מכפלות גדולות יותר' },
    ],
  },
  {
    id: 'divisibility-2-5-10',
    title: 'סימני התחלקות ב-2, 5, 10',
    pdfRef: 'ב.5',
    subtopics: [
      { id: 'div-by-2-rule',  title: 'מספר זוגי = מתחלק ב-2 ללא שארית' },
      { id: 'div-by-5-rule',  title: 'מתחלק ב-5 (סוף הספרה 0 או 5)' },
      { id: 'div-by-10-rule', title: 'מתחלק ב-10 (סוף הספרה 0)' },
      { id: 'how-many-times-in', title: 'כמה פעמים 5 ב-20? כמה פעמים 10 ב-70?' },
    ],
  },
  {
    id: 'parentheses',
    title: 'שימוש בסוגריים',
    pdfRef: 'ב.6',
    subtopics: [
      { id: 'parens-force-order', title: 'סוגריים קובעים מה לבצע קודם: (2+3)×5' },
      { id: 'no-precedence-yet',  title: 'הערה: סדר פעולות פורמלי יילמד רק בכיתה ג׳' },
    ],
  },
  {
    id: 'number-line-negative',
    title: 'ישר המספרים — מספרים שליליים אינטואיטיביים',
    pdfRef: 'ג.1',
    subtopics: [
      { id: 'negatives-real-world', title: 'דוגמאות מחיי היום-יום: טמפרטורות, גבהים, קומות, יתרה וחוב' },
      { id: 'reflection-on-line',   title: 'שיקוף נקודה ביחס ל-0 על ישר המספרים (3 → −3)' },
    ],
  },
  {
    id: 'area-vs-perimeter',
    title: 'שטח לעומת היקף',
    pdfRef: 'ה.1.ב',
    subtopics: [
      { id: 'equal-area-diff-perim', title: 'צורות שוות שטח אינן בהכרח שוות היקף' },
      { id: 'rect-area-formula',     title: 'שטח מלבן = מספר ריבועים לאורך × מספר ריבועים לאורך הצלע השנייה' },
      { id: 'real-world-arrangement', title: 'יישום: סידור שולחנות כדי שיישבו סביבם הכי הרבה אנשים' },
    ],
  },
  {
    id: 'reflection',
    title: 'שיקוף',
    pdfRef: 'ה.3',
    subtopics: [
      { id: 'reflection-def',        title: 'שיקוף ביחס לישר במישור' },
      { id: 'reflection-properties', title: 'תכונות: שמירת מרחק, חפיפה, היפוך מגמה, נקודות שבת על ציר השיקוף' },
      { id: 'line-symmetry',         title: 'סימטרייה ביחס לישר (פרפר, בית, אותיות)' },
      { id: 'mirror-ciphers',        title: 'כתב ראי / כתב אתב"ש (העשרה)' },
    ],
  },
  {
    id: 'translation',
    title: 'הזזה (לתלמידים שלמדו שיקוף בכיתה א׳)',
    pdfRef: 'ה.3',
    subtopics: [
      { id: 'translation-def',        title: 'הזזה: כל נקודה זזה לאותו כיוון ולאותו מרחק' },
      { id: 'translation-properties', title: 'תכונות: שמירת מרחק, חפיפה, שמירת מגמה, אין נקודת שבת' },
      { id: 'cipher-shift',           title: 'כתב סתרים על גלגלי אותיות (העשרה)' },
    ],
  },
  {
    id: 'data-interpretation',
    title: 'פירוש נתונים והשוואה',
    pdfRef: 'ד',
    subtopics: [
      { id: 'read-diagrams',  title: 'קריאה והשוואה בין דיאגרמות שיצרו תלמידים שונים' },
      { id: 'find-outliers',  title: 'מה יוצא דופן בדיאגרמה/בטבלה נתונה?' },
      { id: 'no-numeric-order', title: 'דיאגרמה שאין משמעות מספרית לסדר הציר האופקי' },
    ],
  },
  {
    id: 'investigation',
    title: 'משימות חקר במספרים',
    pdfRef: 'ב.7 (פעילויות נוספות)',
    subtopics: [
      { id: 'jumps-to-target',  title: 'כתבו סדרת מספרים בקפיצות של 2/5/10 מ-0 ל-40 ועד 100' },
      { id: 'write-without-digit', title: 'רשמו את 24 בלי להשתמש בספרה 4' },
      { id: 'place-digits-extreme', title: 'הציבו 7, 4, 2 בתבנית __×__+__ כדי לקבל מספר מרבי/מזערי' },
      { id: 'aim-range', title: 'קלעו למטרה: סכום בין 12 ל-15 בעזרת 5, +, ומספר נוסף' },
      { id: 'even-odd-investigation', title: 'האם סכום שני זוגיים זוגי? של שני אי-זוגיים?' },
    ],
  },
];

export const LEARNING_GOALS = [
  'להעריך ולהשוות תוצאות של תרגילים בלי לפתור (תובנה מספרית)',
  'לחבר ולחסר מספרים תלת-ספרתיים בעל-פה במקרים פשוטים',
  'לפתור שאלות מילוליות עם יותר מפעולה אחת',
  'להגיע לשליטה בלוח הכפל עד 10×10 (לתלמידים מתקדמים)',
  'להשתמש בחוק החילוף, הקיבוץ והפילוג בלי ניסוח פורמלי',
  'לזהות סימני התחלקות ב-2, 5, 10',
  'להבין שסוגריים קובעים את סדר החישוב',
  'להבין מספרים שליליים אינטואיטיבית מתוך הקשרי טמפרטורה, קומות, חוב',
  'להבחין שצורות שוות שטח לאו דווקא שוות היקף; לחשב שטח מלבן כמכפלת הצלעות',
  'להכיר שיקוף ביחס לישר ואת תכונותיו, וכן סימטרייה',
  'להכיר הזזה ואת תכונותיה (אם השיקוף נלמד בכיתה א׳)',
  'לפרש ולהשוות דיאגרמות שיצרו אחרים',
  'לבצע משימות חקר במספרים: קפיצות, ספרות מקסימליות, חקירת זוגיות',
];

export const EXAMPLE_QUESTION_TYPES = [
  'מה גדול יותר ללא חישוב: 107−13 או 107−15?',
  'במספר 375 שינו את ספרת העשרות ל-8. בכמה גדל המספר?',
  'כמה זה 7×8?',
  'האם 234 מתחלק ב-5?',
  'כמה זה (3+2)×4?',
  'הטמפרטורה הייתה −2 מעלות ועלתה ב-5. כמה היא עכשיו?',
  'לשני מלבנים אותו שטח, אך היקפים שונים. ציירו דוגמה.',
  'האם פרפר הוא סימטרי?',
];

export const ALLOWED = [
  'חישובים תלת-ספרתיים פשוטים בעל-פה ובאומדן',
  'חיבור וחיסור מעבר ל-100 כאתגר',
  'שאלות מילוליות רב-שלביות',
  'לוח הכפל עד 10×10',
  'סימני התחלקות ב-2, 5, 10',
  'שימוש בסוגריים לקביעת סדר',
  'מספרים שליליים אינטואיטיבית (קומות, חוב, מעלות)',
  'שטח לעומת היקף; שטח מלבן',
  'שיקוף, סימטרייה ביחס לישר',
  'הזזה ותכונותיה',
  'פירוש דיאגרמות וזיהוי יוצאי דופן',
  'משימות חקר במספרים',
];

export const FORBIDDEN = [
  'סדר פעולות פורמלי (פעולות חוץ מסוגריים — יילמד בכיתה ג׳)',
  'חישובים אריתמטיים על מספרים שליליים (רק היכרות אינטואיטיבית)',
  'שברים מעבר לחצי ורבע',
  'אלגברה פורמלית עם x ו-y',
  'תכנים מעבר לכיתה ב׳ (כפל גדול, חילוק ארוך)',
];
