/**
 * Grade 2 — MEDIUM level scope.
 *
 * The bulk of the Grade 2 syllabus: numbers up to 1,000, 2-digit addition and
 * subtraction (horizontal + vertical with regrouping), comparison word
 * problems, the multiplication table through 6×6, division without remainder,
 * half and quarter as fractions, length / time / area measurement, and bar
 * charts. All items below trace to specific PDF sections.
 */

export const TOPICS = [
  {
    id: 'numbers-to-1000',
    title: 'מספרים עד 1,000',
    pdfRef: 'א.2 / א.6',
    subtopics: [
      { id: 'read-write-3d',   title: 'קריאה וכתיבה של מספרים תלת-ספרתיים במילים ובספרות' },
      { id: 'place-value-3d',  title: 'ערך מקום: יחידות, עשרות, מאות' },
      { id: 'add-whole-units', title: 'הוספת עשרות/מאות שלמות למספר תלת-ספרתי (375 + 50 וכו׳)' },
      { id: 'sequences',       title: 'בניית סדרות (קפיצות של 10, 100)' },
    ],
  },
  {
    id: 'even-odd-multiple-of-2',
    title: 'זוגי ואי-זוגי (כפולה של 2)',
    pdfRef: 'א.9',
    subtopics: [
      { id: 'even-as-multiple', title: 'מספר זוגי כ"כפולה של 2"' },
      { id: 'build-even',       title: 'בניית מספרים זוגיים מספרות נתונות' },
    ],
  },
  {
    id: 'hebrew-letters-30',
    title: 'ערכי האותיות עד ל (30)',
    pdfRef: 'א.10',
    subtopics: [
      { id: 'letters-to-30',   title: 'שיטת האלף-בית עד ל' },
      { id: 'hebrew-dates',    title: 'כתיבת ימי החודש העברי (ט"ו = 15, ט"ז = 16)' },
    ],
  },
  {
    id: 'horizontal-add-sub-100',
    title: 'חיבור וחיסור במאוזן עד 100 (עם המרה)',
    pdfRef: 'ב.1.ג–ה',
    subtopics: [
      { id: 'two-plus-one-regroup',  title: 'דו-ספרתי + חד-ספרתי עם המרה (45+9, 72−6)' },
      { id: 'two-plus-two',           title: 'דו-ספרתי + דו-ספרתי (12+17, 34+26, 27−15, 85−19)' },
      { id: 'create-to-result',       title: 'יצירת תרגילי חיבור וחיסור לתוצאה נתונה' },
      { id: 'consecutive-numbers',    title: 'חיבור שני מספרים עוקבים (13 = __+__)' },
      { id: 'inverse-ops',            title: 'חיבור וחיסור כפעולות הפוכות (15+8−8=15)' },
    ],
  },
  {
    id: 'vertical-add-sub',
    title: 'חיבור וחיסור במאונך',
    pdfRef: 'ב.2',
    subtopics: [
      { id: 'vertical-no-regroup',  title: 'חיבור וחיסור במאונך בלי המרה' },
      { id: 'vertical-regroup',     title: 'חיבור וחיסור במאונך עם המרה (מבוסס על מבנה עשרוני)' },
      { id: 'vertical-fluency',     title: 'מיומנות חישובית — לא רק טכנית אלא מתוך הבנה' },
    ],
  },
  {
    id: 'word-problems-comparison',
    title: 'שאלות חיבור וחיסור מתקדמות',
    pdfRef: 'ב.3',
    subtopics: [
      { id: 'wp-comparison',     title: 'שאלות השוואה (ליוסי 3 ₪ יותר/פחות מדני)' },
      { id: 'wp-collection-multi', title: 'איסוף עם יותר מפעולה אחת (תפוחים + אגסים + בננות)' },
      { id: 'wp-number-puzzles', title: 'בעיות מספרים (סכום שני מספרים 40, אחד 22)' },
    ],
  },
  {
    id: 'multiplication-to-6x6',
    title: 'לוח הכפל עד 6×6',
    pdfRef: 'ב.4',
    subtopics: [
      { id: 'meaning-of-mul',  title: 'משמעות הכפל (חיבור חוזר של שווים)' },
      { id: 'table-2-3-4-5-10', title: 'כפולות של 1, 2, 3, 4, 5, 10' },
      { id: 'commutative-mul', title: 'חוק החילוף בכפל (7×3 = 3×7)' },
      { id: 'mul-facts-mastery', title: 'שליטה אוטומטית בעובדות הכפל עד 6×6' },
    ],
  },
  {
    id: 'division-no-remainder',
    title: 'חילוק ללא שארית (בגבולות הכפל הנלמד)',
    pdfRef: 'ב.4',
    subtopics: [
      { id: 'division-partitive',  title: 'חילוק לחלקים (12 ילדים ל-3 קבוצות שוות)' },
      { id: 'division-quotitive',  title: 'חילוק להכלה (12 ילדים בשלשות)' },
      { id: 'mul-div-inverse',     title: 'הכפל והחילוק כפעולות הפוכות (5×7=35 → 35:5=7)' },
      { id: 'div-by-2',            title: 'חילוק ב-2 (תרגול ייעודי)' },
      { id: 'zero-one-mul-div',    title: 'תכונות האפס וה-1 בכפל ובחילוק' },
    ],
  },
  {
    id: 'simple-equations',
    title: 'משוואות פשוטות (ניסוי ובדיקה)',
    pdfRef: 'ב.1.ו',
    subtopics: [
      { id: 'add-sub-equations', title: '3 + __ = 25, 35 − __ = 30' },
      { id: 'mul-div-equations', title: '__ × 3 = 21, 15 : __ = 3' },
    ],
  },
  {
    id: 'fractions-half-quarter',
    title: 'חצי ורבע',
    pdfRef: 'ג.2',
    subtopics: [
      { id: 'half-of-unit',    title: 'חצי כחלק של יחידה' },
      { id: 'quarter-of-unit', title: 'רבע כחלק של יחידה' },
      { id: 'fraction-relations', title: 'יחסים: שני חצאים = שלם, ארבעה רבעים = שלם, שני רבעים = חצי' },
      { id: 'half-of-quantity', title: 'חצי מתוך כמות (חצי של 10 = 5)' },
    ],
  },
  {
    id: 'length-cm-m',
    title: 'מדידת אורך בס"מ ובמטר',
    pdfRef: 'ה.1.א',
    subtopics: [
      { id: 'cm-m-measure',  title: 'מדידה בס"מ ובמטר של חפצים בכיתה' },
      { id: 'length-compare', title: 'השוואת אורכים' },
    ],
  },
  {
    id: 'area-basics',
    title: 'מדידת שטח בסיסית',
    pdfRef: 'ה.1.ב',
    subtopics: [
      { id: 'area-compare',     title: 'השוואת שטחים על ידי כיסוי/פירוק' },
      { id: 'tangram-area',     title: 'השוואת שטחים בעזרת אמצעי מתווך (טנגרם)' },
      { id: 'square-cm-unit',   title: 'יחידת שטח: ריבוע שצלעו 1 ס"מ (סמ"ר)' },
      { id: 'arbitrary-area-units', title: 'מדידה ביחידות שרירותיות לפני הסטנדרטיות' },
    ],
  },
  {
    id: 'weight',
    title: 'מדידות משקל',
    pdfRef: 'ה.1.ג',
    subtopics: [
      { id: 'pan-balance',      title: 'השוואת עצמים במאזני כפות' },
      { id: 'arbitrary-weight', title: 'שקילה ביחידות שרירותיות (פלסטלינה, גביעים עם חול)' },
    ],
  },
  {
    id: 'time',
    title: 'מדידות זמן',
    pdfRef: 'ה.1.ד',
    subtopics: [
      { id: 'clock-half-quarter', title: 'קריאת שעון בשעות שלמות, חצאי ורבעי שעות' },
      { id: 'duration-half-hour', title: 'חישוב משך זמן עד דיוק של חצי שעה (4:30 + 1.5 שעות = 6:00)' },
      { id: 'duration-cross-12',  title: 'משך זמן גם מעבר ל-12:00 (11:30 → 14:00)' },
    ],
  },
  {
    id: 'polygons-bodies',
    title: 'מצולעים וגופים',
    pdfRef: 'ה.2',
    subtopics: [
      { id: 'body-faces-edges', title: 'ספירת פאות, מקצועות וקדקודים' },
      { id: 'body-names',        title: 'שיום: קובייה, תיבה, גליל, פירמידה, חרוט, כדור' },
      { id: 'flat-on-body',      title: 'זיהוי צורות מישוריות על פני גופים' },
      { id: 'build-bodies',      title: 'בנייה: מקוביות, מפאות, מקשיות' },
      { id: 'body-to-photo',     title: 'התאמת גוף לתמונה/צילום שלו' },
    ],
  },
  {
    id: 'data-bar-charts',
    title: 'דיאגרמות עמודות וייצוג נתונים',
    pdfRef: 'ד',
    subtopics: [
      { id: 'collect-organize',  title: 'איסוף וארגון נתונים' },
      { id: 'sort-by-criterion', title: 'מיון נתונים לפי קריטריון (חודשי לידה)' },
      { id: 'bar-chart-positive', title: 'בניית דיאגרמת עמודות על החלק החיובי של הצירים' },
      { id: 'student-rep',        title: 'יצירת ייצוגים על ידי התלמידים (עדשי שוקולד)' },
    ],
  },
];

export const LEARNING_GOALS = [
  'לקרוא ולכתוב מספרים תלת-ספרתיים במילים ובספרות, ולהבין יחידות/עשרות/מאות',
  'להבין מספר זוגי כ"כפולה של 2"',
  'לכתוב תאריכים עבריים עד ל-30 (ט"ו, ט"ז)',
  'לחבר ולחסר בתחום ה-100 — במאוזן וגם במאונך — עם המרה ובלעדיה',
  'לפתור שאלות השוואה ושאלות איסוף עם יותר מפעולה אחת',
  'לשלוט אוטומטית בעובדות הכפל עד 6×6 ובחילוק ללא שארית באותו תחום',
  'להבחין באופן בלתי-פורמלי בין חילוק לחלקים לחילוק להכלה',
  'לפתור משוואות פשוטות בניסוי ובדיקה — בחיבור, חיסור, כפל וחילוק',
  'להבין חצי ורבע כחלקי שלם ולחשב חצי של כמות (חצי של 10)',
  'למדוד אורך בס"מ ובמטר, ולמדוד שטח על ידי כיסוי / יחידות שרירותיות / סמ"ר',
  'לשקול במאזני כפות וביחידות שרירותיות',
  'לקרוא שעון בשעות שלמות, חצאי ורבעי שעה, ולחשב משך זמן עד חצי שעה גם מעבר ל-12',
  'לזהות גופים: קובייה, תיבה, גליל, פירמידה, חרוט, כדור, ולספור פאות/מקצועות/קדקודים',
  'לבנות דיאגרמת עמודות ולקרוא ייצוגי נתונים פשוטים',
];

export const EXAMPLE_QUESTION_TYPES = [
  'כמה זה 37+25?',
  'כמה זה 72−18?',
  'כמה זה 6 כפול 5?',
  'אם 20 סוכריות מתחלקות בין 4 ילדים שווה בשווה, כמה יקבל כל ילד?',
  'מה זה חצי של 10?',
  'משחק התחיל ב-4:30 ונמשך שעה וחצי. מתי הוא הסתיים?',
  'מה גדול יותר ללא חישוב: 18+19 או 20+20?',
  'כתבו את 15 בתאריך עברי.',
  'מהן פאות של קובייה?',
];

export const ALLOWED = [
  'מספרים עד 1,000 ויחידות/עשרות/מאות',
  'חיבור וחיסור עד 100 — במאוזן ובמאונך — כולל המרה',
  'יצירת תרגילים לתוצאה נתונה, מספרים עוקבים',
  'שאלות השוואה ושאלות איסוף עם יותר מפעולה אחת',
  'לוח הכפל עד 6×6 וחילוק ללא שארית באותו תחום',
  'חוק החילוף בכפל, חילוק לחלקים וחילוק להכלה',
  'משוואות פשוטות בניסוי ובדיקה',
  'חצי ורבע כחלקי יחידה וחלקי כמות',
  'מדידת אורך בס"מ ובמטר',
  'מדידת שטח על ידי כיסוי, יחידות שרירותיות וסמ"ר',
  'מדידת משקל במאזני כפות וביחידות שרירותיות',
  'שעון: שעות שלמות, חצאים ורבעים; משך זמן עד חצי שעה',
  'מצולעים וגופים: קובייה, תיבה, גליל, פירמידה, חרוט, כדור; פאות, מקצועות, קדקודים',
  'דיאגרמות עמודות (ציר חיובי), איסוף וארגון נתונים',
  'תאריכים עבריים עד ל',
];

export const FORBIDDEN = [
  'חישובים מעבר ל-100 (חוץ ממקרים פשוטים בהכוונה)',
  'לוח הכפל מעבר ל-6×6 כדרישת שליטה (תלמידים מתקדמים בלבד)',
  'סוגריים וסדר פעולות',
  'סימני התחלקות',
  'מספרים שליליים',
  'שיקוף, הזזה, סימטרייה ברמה פורמלית',
  'אלגברה פורמלית',
];
