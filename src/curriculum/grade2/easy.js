/**
 * Grade 2 — EASY level scope.
 *
 * Subset of the Grade 2 syllabus (kita2.pdf) that the child should be able to
 * handle as the baseline. Per the project owner's spec: counting, basic place
 * value, addition/subtraction up to 20, simple word problems, multiplication
 * as repeated addition, and first encounters with 3-D bodies.
 */

export const TOPICS = [
  {
    id: 'counting',
    title: 'מנייה וספירה',
    pdfRef: 'א.1',
    subtopics: [
      { id: 'count-units',  title: 'ספירה ביחידות (קדימה ואחורה, מנקודה כלשהי, למשל מ-17 עד 25)' },
      { id: 'count-tens',   title: 'ספירה בעשרות שלמות' },
      { id: 'count-hundreds', title: 'ספירה במאות שלמות' },
    ],
  },
  {
    id: 'numbers-to-100',
    title: 'מספרים עד 100',
    pdfRef: 'א.2',
    subtopics: [
      { id: 'read-write-2d',  title: 'קריאה וכתיבה של מספרים דו-ספרתיים במילים ובספרות' },
      { id: 'order',          title: 'סדר המספרים (קודם, עוקב, גדול ב-1)' },
    ],
  },
  {
    id: 'place-value-basics',
    title: 'ערך מקום בסיסי',
    pdfRef: 'א.3',
    subtopics: [
      { id: 'units-tens',     title: 'יחידות ועשרות בתוך מספר דו-ספרתי' },
      { id: 'zero-holder',    title: 'אפס כשומר מקום (במספר 30 יש 3 עשרות, אך אין יחידות בודדות)' },
    ],
  },
  {
    id: 'add-sub-to-20',
    title: 'חיבור וחיסור עד 20',
    pdfRef: 'ב.1.א',
    subtopics: [
      { id: 'facts-to-9-9',   title: 'עובדות חיבור וחיסור עד 9+9 (לוח החיבור)' },
      { id: 'second-ten',     title: 'חזרה על חיבור וחיסור בעשרת השנייה (13+5, 19−7)' },
      { id: 'zero-behavior',  title: 'התנהגות האפס: 5+0=5, 5−0=5, 37−37=0' },
    ],
  },
  {
    id: 'simple-horizontal',
    title: 'חיבור וחיסור פשוטים במאוזן',
    pdfRef: 'ב.1.ג',
    subtopics: [
      { id: 'two-plus-one-no-regroup', title: 'חיבור דו-ספרתי + חד-ספרתי בלי המרה (23+4, 65+4)' },
      { id: 'two-minus-one-no-regroup', title: 'חיסור דו-ספרתי − חד-ספרתי בלי המרה (37−5)' },
      { id: 'whole-tens-add',   title: 'חיבור עשרות שלמות עד 100 (30+40=70)' },
    ],
  },
  {
    id: 'simple-word-problems',
    title: 'שאלות מילוליות פשוטות',
    pdfRef: 'ב.3',
    subtopics: [
      { id: 'wp-collection',  title: 'איסוף (לדני 4 גולות, לדינה 5; כמה ביחד?)' },
      { id: 'wp-addition',    title: 'הוספה (היו 4, קיבל עוד 3)' },
      { id: 'wp-reduction',   title: 'הפחתה (היו 5, אכלה 2)' },
      { id: 'wp-change-simple', title: 'עודף פשוט בקנייה' },
    ],
  },
  {
    id: 'mul-as-repeated-add',
    title: 'כפל כחיבור חוזר (היכרות ראשונית)',
    pdfRef: 'ב.4',
    subtopics: [
      { id: 'fingers-hands',  title: 'ספירה באצבעות לפי קבוצות (4 ידיים = 20)' },
      { id: 'doubles',        title: 'הכפלות בסיסיות: 2×, 5×, 10× כקפיצות' },
    ],
  },
  {
    id: 'simple-shapes-bodies',
    title: 'צורות וגופים פשוטים',
    pdfRef: 'ה.2',
    subtopics: [
      { id: 'right-angle-review', title: 'חזרה על זווית ישרה אינטואיטיבית' },
      { id: 'rectangle-square',   title: 'זיהוי מלבן וריבוע' },
      { id: 'circle',             title: 'זיהוי עיגול' },
      { id: 'body-first-look',    title: 'היכרות ראשונית עם קובייה, תיבה, כדור' },
    ],
  },
];

export const LEARNING_GOALS = [
  'לספור ביחידות, בעשרות שלמות ובמאות שלמות, גם החל ממספר שאינו 1',
  'לקרוא ולכתוב מספרים דו-ספרתיים במילים ובספרות',
  'להבין שיחידות ועשרות מרכיבות מספר דו-ספרתי, ושהאפס שומר על המקום',
  'לדעת בעל-פה את עובדות החיבור והחיסור עד 9+9',
  'לחבר ולחסר דו-ספרתי וחד-ספרתי בלי המרה',
  'לפתור שאלות מילוליות פשוטות של איסוף, הוספה, הפחתה ועודף',
  'להבין כפל כחיבור חוזר של מחוברים שווים',
  'לזהות מלבן, ריבוע ועיגול, ולהכיר קובייה, תיבה וכדור כגופים',
];

export const EXAMPLE_QUESTION_TYPES = [
  'ספור מ-17 עד 25.',
  'איזה מספר עוקב ל-49?',
  'כמה זה 13+5?',
  'כמה זה 30+40?',
  'לדני 4 גולות, לדינה 5. כמה גולות ביחד?',
  'אם בכל יד 5 אצבעות, כמה אצבעות יש ב-4 ידיים?',
  'איזה גוף הוא ה"קופסה" שבכיתה?',
];

export const ALLOWED = [
  'ספירה ביחידות, בעשרות שלמות ובמאות שלמות',
  'מספרים עד 100, סדר ועוקב/קודם',
  'יחידות, עשרות והאפס כשומר מקום',
  'חיבור וחיסור עד 20 (לוח החיבור עד 9+9)',
  'חיבור וחיסור פשוטים במאוזן בלי המרה',
  'חיבור עשרות שלמות (30+40)',
  'שאלות פשוטות של איסוף, הוספה, הפחתה, עודף',
  'כפל כחיבור חוזר (קפיצות של 2, 5, 10)',
  'זיהוי מלבן, ריבוע, עיגול',
  'היכרות ראשונה עם קובייה, תיבה, כדור',
];

export const FORBIDDEN = [
  'מספרים מעל 100',
  'חיבור וחיסור במאונך',
  'כפל מעבר ל-2×, 5×, 10×',
  'חילוק פורמלי',
  'שברים',
  'שיקוף, הזזה, סימטרייה',
  'אלגברה ומשוואות פורמליות',
];
