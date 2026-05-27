/**
 * Grade 1 (כיתה א׳) curriculum knowledge base.
 *
 * SOURCE OF TRUTH: kita1.pdf (Israeli Ministry of Education math syllabus for
 * Grade 1, pages 17–32). Extracted via scripts/extract-syllabus.js. Every
 * subtopic below traces back to a line in that document.
 *
 * The PDF organizes Grade 1 into three main areas with explicit hour budgets:
 *   א. המספרים הטבעיים בתחום ה-100   — 25 hrs
 *   ב. פעולות החשבון                  — 70 hrs (includes word problems)
 *   ג. מדידות וגאומטריה              — 30 hrs (includes translation/reflection)
 *
 * Difficulty bucketing (easy / medium / advanced) is not in the PDF itself —
 * it follows the project owner's rules, with anything marked
 * "פעילויות העשרה" or "לתלמידים מתקדמים" in the PDF mapped to advanced.
 */

export const GRADE = 1;
export const GRADE_LABEL = 'כיתה א׳';

export const LEVELS = ['easy', 'medium', 'advanced'];
export const LEVEL_LABELS = {
  easy:     'רמה קלה',
  medium:   'רמה בינונית',
  advanced: 'רמה מתקדמת',
};

export const TOPICS = [
  /* ─────────── א. המספרים הטבעיים בתחום ה-100 (25 שעות) ─────────── */
  {
    id: 'natural-numbers',
    title: 'המספרים הטבעיים בתחום ה-100',
    hours: 25,
    levels: ['easy', 'medium'],
    subtopics: [
      { id: 'numbers-1-20',         title: 'הכרת המספרים 1–20',                                 hours: 6, level: 'easy'   },
      { id: 'letter-values-1-10',   title: 'הכרת ערכי האותיות א עד י',                          hours: 2, level: 'easy'   },
      { id: 'zero',                 title: 'הכרת המספר אפס (היבט כמותי והיבט של סדר)',           hours: 2, level: 'easy'   },
      { id: 'enumeration-to-50',    title: 'מנייה עד 50',                                       hours: 2, level: 'easy'   },
      { id: 'counting-to-100',      title: 'ספירה קדימה עד 100 או יותר',                        hours: 2, level: 'medium' },
      { id: 'skip-counting',        title: 'ספירה ומנייה בזוגות, בחמישיות ובעשרות',              hours: 0, level: 'medium' },
      { id: 'backward-counting',    title: 'ספירה אחורנית',                                     hours: 0, level: 'medium' },
      { id: 'equality-signs',       title: 'סימני השוויון והאי-שוויון (=, <, >)',                hours: 2, level: 'easy'   },
      { id: 'number-line',          title: 'ישר המספרים',                                       hours: 2, level: 'medium' },
      { id: 'numbers-to-100',       title: 'הכרת המספרים בתחום ה-100 (קריאה וכתיבה)',           hours: 5, level: 'medium' },
      { id: 'tens',                 title: 'ספירה בעשרות, כתיבת העשרות עד 100',                 hours: 0, level: 'medium' },
      { id: 'patterns-100-chart',   title: 'השלמת מספרים בלוח המאה, זיהוי חוקיות בסדרות',        hours: 0, level: 'medium' },
      { id: 'even-odd',             title: 'זוגיות ואי-זוגיות',                                  hours: 2, level: 'medium' },
    ],
    learningGoals: [
      'לזהות, לקרוא ולכתוב מספרים בין 0 ל-100',
      'להכיר את ערכי האותיות א–י כסימון לכיתות, ימים, אוטובוסים ולוח שחמט',
      'להבין את האפס בשתי המשמעויות שלו (כמותית וכסדר)',
      'למנות עצמים עד 50 ולספור עד 100 וגם אחורנית',
      'לספור בזוגות, בחמישיות ובעשרות',
      'להשתמש נכון בסימני =, <, > בין מספרים',
      'להבין את מבנה ישר המספרים',
      'להבחין בין מספר זוגי לאי-זוגי בעזרת חלוקה לזוגות וגם בעזרת חיבור (סכום של שני שווים)',
      'להכיר את המונחים: יחידות, עשרות',
    ],
    exampleQuestionTypes: [
      'איזה מספר גדול יותר: 12 או 18?',
      'מה המספר שבא אחרי 49?',
      'אני נמצא בין 9 ל-11. מי אני?',
      'השלימו את הסדרה: 1, 3, 5, 7, ?',
      'האם 8 הוא זוגי?',
      'ספרו אחורה מ-20 עד 10.',
    ],
  },

  /* ─────────── ב. פעולות החשבון (70 שעות) ─────────── */
  {
    id: 'addition-subtraction',
    title: 'חיבור וחיסור',
    hours: 46,
    levels: ['easy', 'medium', 'advanced'],
    subtopics: [
      { id: 'add-sub-to-10',         title: 'חיבור וחיסור עד 10 (כולל 0 כמחובר/מחסר)',                hours: 20, level: 'easy'     },
      { id: 'create-exercises-result', title: 'יצירת תרגילי חיבור וחיסור לתוצאה נתונה',               hours: 0,  level: 'easy'     },
      { id: 'add-sub-second-ten',    title: 'חיבור וחיסור בעשרת השנייה (11–20)',                      hours: 6,  level: 'medium'   },
      { id: 'add-sub-whole-tens',    title: 'חיבור וחיסור בעשרות שלמות (30+40=70)',                   hours: 4,  level: 'medium'   },
      { id: 'add-sub-to-20-plus',    title: 'חיבור וחיסור עד 20 או יותר (העשרה: 23+4, 103+4)',         hours: 16, level: 'advanced' },
      { id: 'simple-equations',      title: 'משוואות פשוטות בניסוי ובדיקה (10−__=6)',                   hours: 0,  level: 'medium'   },
      { id: 'number-sense',          title: 'תובנה מספרית (השוואת תרגילים ללא פתרון)',                hours: 0,  level: 'medium'   },
    ],
    learningGoals: [
      'לדעת את עובדות החיבור והחיסור עד 10 בעל-פה',
      'לכלול את האפס כמחובר, כמחסר וכהפרש',
      'להגיע לידיעה אוטומטית של תרגילים כמו 8+4=12',
      'לחבר ולחסר בעשרת השנייה (11–20) על בסיס הקבלה לתחום העשר',
      'לחבר ולחסר בעשרות שלמות (3 עשרות + 4 עשרות = 7 עשרות)',
      'לפתור משוואות פשוטות בעזרת ניסוי ובדיקה (לא בדרך אלגוריתמית)',
      'לפתח תובנה מספרית: להעריך ולהשוות ללא חישוב מלא',
      'להכיר את המונחים: חיבור, חיסור וסימני הפעולות',
    ],
    exampleQuestionTypes: [
      'כמה זה 5+3?',
      'כמה זה 14−6?',
      'השלימו: 7 + ? = 12',
      'מה גדול יותר ללא חישוב: 6+5 או 9+8?',
      'מצאו זוגות מספרים שסכומם 10.',
    ],
  },

  {
    id: 'word-problems',
    title: 'שאלות חיבור וחיסור',
    hours: 16,
    levels: ['easy', 'medium', 'advanced'],
    subtopics: [
      { id: 'wp-collection',  title: 'שאלות איסוף (לדני 4 גולות ולדינה 5, כמה ביחד?)',         hours: 0, level: 'easy'     },
      { id: 'wp-addition',    title: 'שאלות הוספה (היו 4 ועוד קיבל 3)',                          hours: 0, level: 'easy'     },
      { id: 'wp-reduction',   title: 'שאלות הפחתה (היו 5, נאכלו 2)',                              hours: 0, level: 'easy'     },
      { id: 'wp-change',      title: 'שאלות עודף (שילמתי במטבע של 10 על מיץ שמחירו 7)',          hours: 0, level: 'medium'   },
      { id: 'wp-money',       title: 'שאלות עם כסף (מטבעות ושטרות)',                            hours: 0, level: 'medium'   },
      { id: 'wp-time-days',   title: 'שאלות עם זמן (ימים בשבוע)',                                hours: 0, level: 'medium'   },
      { id: 'wp-extra-data',  title: 'שאלות עם נתונים מיותרים (בסל 2 תפוחים, 3 ספרים ואגס)',     hours: 0, level: 'advanced' },
      { id: 'wp-systematic',  title: 'חיפוש שיטתי של אוסף האפשרויות (13 גולות כחולות ואדומות)',  hours: 0, level: 'advanced' },
    ],
    learningGoals: [
      'לקרוא ולהבין סיפור קצר ולתרגם אותו לתרגיל',
      'לזהות את הפעולה המתאימה (חיבור או חיסור)',
      'להתמודד עם ארבעת סוגי השאלות: איסוף, הוספה, הפחתה, עודף',
      'לפתור שאלות עם כסף (מטבעות ושטרות) ועם ימי השבוע',
      'להתמודד עם נתונים מיותרים',
      'למצוא כמה תשובות אפשריות (חיפוש שיטתי)',
      'להסביר את דרך הפתירה, לא רק את התשובה',
    ],
    exampleQuestionTypes: [
      'לדני יש 4 גולות ולדינה יש 5. כמה גולות יש להם ביחד?',
      'תמורת בקבוק מיץ שמחירו 7 ₪ נתתי מטבע של 10 ₪. כמה עודף קיבלתי?',
      'בסל 2 תפוחים, 3 ספרים ואגס. כמה פירות יש בסל?',
      'לשגיא 13 גולות כחולות ואדומות. רשמו אפשרויות שונות.',
    ],
  },

  {
    id: 'basic-mul-div',
    title: 'כפל וחילוק עד 20',
    hours: 8,
    levels: ['advanced'],
    subtopics: [
      { id: 'repeated-addition', title: 'חיבור חוזר כהכנה אינטואיטיבית לכפל',                       hours: 0, level: 'advanced' },
      { id: 'multiplication',    title: 'כפל עד 20 (כחיבור חוזר של מחוברים שווים)',                 hours: 0, level: 'advanced' },
      { id: 'division-partitive',title: 'חילוק לחלקים (12 עפרונות ל-3 קופסאות שוות)',                hours: 0, level: 'advanced' },
      { id: 'division-quotitive',title: 'חילוק להכלה (12 עפרונות, 3 בכל קופסה — כמה קופסאות?)',     hours: 0, level: 'advanced' },
      { id: 'half',              title: 'הכרת החצי (חצי + חצי = שלם)',                              hours: 0, level: 'advanced' },
      { id: 'magic-square',      title: 'ריבוע הקסם (פעילות העשרה)',                                hours: 0, level: 'advanced' },
      { id: 'arrangements',      title: 'כל אפשרויות הסידור של 3 פריטים',                          hours: 0, level: 'advanced' },
    ],
    learningGoals: [
      'להבין כפל כחיבור חוזר של מחוברים שווים',
      'לחשב מכפלות פשוטות בתחום עד 20',
      'להבחין בין שתי המשמעויות של חילוק: חלוקה לחלקים, וחלוקה להכלה',
      'להבין שחילוק הוא פעולה הפוכה לכפל',
      'להבין שחצי + חצי = שלם',
    ],
    exampleQuestionTypes: [
      'בכיתה 3 קבוצות. בכל קבוצה 5 ילדים. כמה ילדים בכיתה?',
      'מחלקים 12 עפרונות ל-3 קופסאות שוות. כמה בכל קופסה?',
      'מחלקים 12 עפרונות, 3 בכל קופסה. כמה קופסאות צריך?',
      'כמה זה חצי מ-10?',
    ],
  },

  /* ─────────── ג. מדידות וגאומטריה (30 שעות) ─────────── */
  {
    id: 'length',
    title: 'מדידות אורך',
    hours: 10,
    levels: ['easy', 'medium'],
    subtopics: [
      { id: 'direct-compare',         title: 'השוואה ישירה של אורכים',                       hours: 0, level: 'easy'   },
      { id: 'compare-via-string',     title: 'השוואה בעזרת מתווך (חוט)',                      hours: 0, level: 'medium' },
      { id: 'arbitrary-units',        title: 'מדידה ביחידות שרירותיות (צעדים, מרווחי יד, סיכות)', hours: 0, level: 'medium' },
      { id: 'cm-measurement',         title: 'מדידה בסנטימטרים',                              hours: 0, level: 'medium' },
      { id: 'matching-unit-to-size',  title: 'התאמת יחידת מידה לגודל הנמדד',                  hours: 0, level: 'medium' },
      { id: 'perimeter',              title: 'מדידת היקפים של מצולעים',                       hours: 0, level: 'medium' },
      { id: 'length-estimation',      title: 'אמדן אורך (לשער ולבדוק)',                       hours: 0, level: 'medium' },
    ],
    learningGoals: [
      'להשוות אורכים בצורה ישירה ועם מתווך',
      'למדוד ביחידות שרירותיות ולהבין שיחידה גדולה → מספר קטן יותר של יחידות',
      'למדוד באמצעות ס"מ',
      'למדוד היקף של מצולע',
      'להעריך אורך לפני שמודדים',
      'להכיר את המונחים: אורך, יחידת מידה, היקף',
    ],
    exampleQuestionTypes: [
      'מה ארוך יותר: העיפרון או הסרגל?',
      'מה אורך הקלמר בסיכות מהדק? שערו ובדקו.',
      'כמה ס"מ אורך העיפרון בתמונה?',
    ],
  },

  {
    id: 'time',
    title: 'מדידות זמן',
    hours: 2,
    levels: ['medium', 'advanced'],
    subtopics: [
      { id: 'clock-whole-hours',   title: 'קריאת שעון מחוגים בשעות שלמות',          hours: 0, level: 'medium'   },
      { id: 'clock-half-hours',    title: 'קריאת שעון בחצאי שעות (למתקדמים)',       hours: 0, level: 'advanced' },
      { id: 'duration-whole-hours',title: 'חישוב משך זמן בשעות שלמות (ללא חציית 12)', hours: 0, level: 'medium'   },
    ],
    learningGoals: [
      'לקרוא שעות עגולות על שעון מחוגים',
      'לחשב משך זמן בשעות שלמות בלי לעבור 12',
    ],
    exampleQuestionTypes: [
      'מה השעה כאשר השעון מראה 3:00?',
      'יצאתי בשעה 9 וחזרתי בשעה 11. כמה שעות הייתי בחוץ?',
    ],
  },

  {
    id: 'polygons',
    title: 'הכרת מצולעים',
    hours: 7,
    levels: ['easy', 'medium'],
    subtopics: [
      { id: 'straight-vs-curved',  title: 'הבחנה בין ישר לקו עקום',                                hours: 0, level: 'easy'   },
      { id: 'sort-by-sides',       title: 'מיון מצולעים לפי מספר צלעות (משולש, מרובע, מחומש...)', hours: 0, level: 'medium' },
      { id: 'irregular-polygons',  title: 'הכרת מגוון מצולעים, לאו דווקא משוכללים',                hours: 0, level: 'medium' },
      { id: 'polygons-in-complex', title: 'זיהוי מצולעים בסרטוט מורכב, על גופים ובחפצים',          hours: 0, level: 'medium' },
      { id: 'build-polygons',      title: 'בניית מצולעים שונים מנתונים (גפרורים, טנגרם)',          hours: 0, level: 'medium' },
      { id: 'cut-fold-polygons',   title: 'חקר מצולעים בעזרת קיפול נייר וגזירות',                  hours: 0, level: 'medium' },
    ],
    learningGoals: [
      'להבחין בין קו ישר לקו עקום',
      'למיין מצולעים לפי מספר צלעות',
      'לזהות מצולעים גם במצבים שונים ובסרטוטים מורכבים',
      'להכיר את המונחים: מצולע, משולש, מרובע, מחומש, צלע, קדקוד',
    ],
    exampleQuestionTypes: [
      'איזו צורה יש לה 3 צלעות?',
      'כמה קדקודים יש למרובע?',
      'איזה מצולע מסתתר במגן דוד?',
    ],
  },

  {
    id: 'quadrilaterals',
    title: 'בדיקת מרובעים, מלבן וריבוע',
    hours: 5,
    levels: ['medium'],
    subtopics: [
      { id: 'various-quads',         title: 'זיהוי ובניית מרובעים שונים (כולל לא קמורים, חסרי שם)', hours: 0, level: 'medium' },
      { id: 'same-sides-diff-quads', title: 'מרובעים מאותן צלעות אך בסדר שונה (מקבילית, דלתון)',   hours: 0, level: 'medium' },
      { id: 'right-angle',           title: 'תפיסה אינטואיטיבית של זווית ישרה (קיפול נייר פעמיים)', hours: 0, level: 'medium' },
      { id: 'rectangle-square',      title: 'זיהוי מלבן וריבוע לפי אורכי צלעות וזוויות ישרות',     hours: 0, level: 'medium' },
      { id: 'box-cube-faces',        title: 'פאות התיבה כמלבנים ופאות הקובייה כריבועים',           hours: 0, level: 'medium' },
    ],
    learningGoals: [
      'לזהות מרובע בכל הצורות (קמור / לא קמור)',
      'להבחין במלבן ובריבוע על פי צלעות וזוויות',
      'להבין שריבוע הוא מלבן מיוחד (לא ללמד הגדרות פורמליות)',
      'לזהות פאות של תיבה וקובייה',
    ],
    exampleQuestionTypes: [
      'כמה צלעות יש לריבוע?',
      'איך נדע אם מרובע הוא מלבן?',
      'אילו צורות יש על פאת קובייה?',
    ],
  },

  {
    id: 'movement-symmetry',
    title: 'הזזה, שיקוף וסימטרייה',
    hours: 6,
    levels: ['advanced'],
    subtopics: [
      { id: 'translation',        title: 'הזזה (כל נקודה מוזזת לאותו כיוון ולאותו מרחק)',  hours: 0, level: 'advanced' },
      { id: 'translation-props',  title: 'תכונות ההזזה (שמירת מרחק, חפיפה, כיוון)',         hours: 0, level: 'advanced' },
      { id: 'reflection',         title: 'שיקוף ביחס לישר',                                  hours: 0, level: 'advanced' },
      { id: 'reflection-props',   title: 'תכונות השיקוף (שמירת מרחק, היפוך מגמה, נקודות שבת)', hours: 0, level: 'advanced' },
      { id: 'line-symmetry',      title: 'סימטרייה ביחס לישר (בעצמים, בטבע, בארכיטקטורה)',  hours: 0, level: 'advanced' },
      { id: 'cipher-shift',       title: 'כתב סתרים והזזה על גלגלי אותיות (העשרה)',           hours: 0, level: 'advanced' },
    ],
    learningGoals: [
      'להבין שהזזה שומרת מרחק ומגמה ואין לה נקודת שבת',
      'להבין שהשיקוף שומר מרחק אך הופך מגמה ויש לו נקודות שבת',
      'לזהות סימטרייה בצורות, בטבע ובארכיטקטורה',
    ],
    exampleQuestionTypes: [
      'האם לפרפר יש ציר סימטריה?',
      'איך תיראה הצורה אחרי שיקוף?',
      'אם נזיז את הצורה ימינה, איך היא תיראה?',
    ],
  },
];

/**
 * Difficulty buckets — flat list derived from the topics above.
 */
export const DIFFICULTY_BUCKETS = (() => {
  const buckets = { easy: [], medium: [], advanced: [] };
  for (const t of TOPICS) {
    for (const s of t.subtopics) {
      buckets[s.level].push({ topicId: t.id, ...s });
    }
  }
  return buckets;
})();

/**
 * Mastery goals — copied verbatim from the PDF's "שליטה ויכולת ביצוע" section
 * (page 32). These describe what the child should be able to DO by year-end.
 */
export const MASTERY_GOALS = [
  'ספירה עד 100',
  'ספירה בעשרות שלמות',
  'ספירת המשך וספירה אחורנית',
  'מנייה עד 30',
  'קריאה וכתיבה של מספרים עד 100',
  'שווה, גדול, קטן (בין מספרים נתונים)',
  'השלמת מספרים חסרים בסדרת מספרים',
  'הכרת המונחים: יחידות, עשרות',
  'ידיעת עובדות החיבור והחיסור בעל-פה עד 10',
  'הכרת המונחים: חיבור, חיסור וסימני הפעולות',
  'פתרון שאלות מילוליות פשוטות',
  'כתיבת תרגילי חיבור וחיסור עד 20 ופתרונם בעזרת אמצעי המחשה',
  'בניית מצולעים באמצעי המחשה שונים',
  'מיון מצולעים לפי מספר הצלעות ושיומם',
  'הכרה וזיהוי של מצולעים במישור במצבים שונים',
  'זיהוי מצולעים, דמיון ושוני בין מצולעים',
  'הכרת המונחים: מצולע, משולש, מרובע, מחומש, ... צלע, קדקוד',
  'השוואת אורכי קטעים, צלעות או קווים לא ישרים',
  'שימוש ביחידות מידה שרירותיות למדידת אורך',
  'ביטוי אורך מסוים ביחידות שונות',
  'הכרת המונחים: אורך, יחידת מידה, היקף',
  'שימוש בס"מ למדידת אורך',
];

export const AI_INSTRUCTIONS = {
  voice: [
    'הסבר תמיד בעברית פשוטה וברורה, כאילו אתה מדבר עם ילד בכיתה א׳.',
    'השתמש במשפטים קצרים ובמילים יומיומיות.',
    'אל תשתמש באלגברה פורמלית, באותיות x/y, או במונחים מתמטיים מסובכים.',
    'העדף דוגמאות מוחשיות: תפוחים, עפרונות, מטבעות, סוכריות, גולות.',
    'חלק כל הסבר לצעדים קצרים וברורים.',
    'עודד את הילד עם משפט חיובי קצר בסוף (למשל: "כל הכבוד!" או "יפה מאוד").',
  ],
  format: [
    'התחל בברכה קצרה וידידותית.',
    'תן הסבר צעד-צעד ממוספר.',
    'בסוף, כתוב שורה אחת בפורמט: "התשובה: ..." (בדיוק כך).',
  ],
  outOfScope: 'אם השאלה מעבר לרמה של כיתה א׳, התחל את התשובה במשפט: "השאלה הזאת קצת מתקדמת לכיתה א׳, אבל אפשר להסביר אותה בצורה פשוטה." ואז המשך להסביר בצורה הפשוטה ביותר שאפשר.',
};

export const LEVEL_SCOPE = {
  easy: {
    title: 'רמה קלה (כיתה א׳)',
    allowed: [
      'מספרים 1–20 ואפס',
      'ערכי האותיות א–י',
      'מנייה עד 50',
      'השוואה עם הסימנים =, <, >',
      'חיבור וחיסור עד 10 (כולל אפס)',
      'יצירת תרגילי חיבור וחיסור לתוצאה נתונה',
      'שאלות מילוליות פשוטות: איסוף, הוספה, הפחתה',
      'הבחנה בין קו ישר לקו עקום',
      'השוואה ישירה של אורכים',
    ],
    forbidden: [
      'מספרים מעל 20',
      'כפל וחילוק',
      'חצי',
      'הזזה, שיקוף, סימטרייה',
      'אלגברה ומשוואות פורמליות',
    ],
  },
  medium: {
    title: 'רמה בינונית (כיתה א׳)',
    allowed: [
      'מספרים עד 100, קריאה וכתיבה',
      'ספירה קדימה עד 100, אחורנית, בזוגות, בחמישיות ובעשרות',
      'ישר המספרים ולוח המאה',
      'זוגי ואי-זוגי',
      'חיבור וחיסור בעשרת השנייה (11–20)',
      'חיבור וחיסור בעשרות שלמות',
      'משוואות פשוטות בניסוי ובדיקה',
      'שאלות עודף, כסף (מטבעות ושטרות) וזמן (ימי השבוע)',
      'מדידת אורך ביחידות שרירותיות וב-ס"מ',
      'מדידת היקפים',
      'קריאת שעון בשעות שלמות וחישוב משך זמן בשעות שלמות',
      'מיון מצולעים, זיהוי משולש/מרובע/מחומש',
      'זיהוי מלבן וריבוע, זווית ישרה אינטואיטיבית',
      'פאות תיבה ופאות קובייה',
    ],
    forbidden: [
      'כפל וחילוק',
      'חצי',
      'הזזה, שיקוף, סימטרייה',
      'אלגברה ומשוואות פורמליות',
    ],
  },
  advanced: {
    title: 'רמה מתקדמת (כיתה א׳ – העשרה)',
    allowed: [
      'חיבור וחיסור עד 20 או יותר (כאתגר, לא לימוד שיטתי)',
      'חיבור חוזר כהכנה לכפל',
      'כפל עד 20',
      'חילוק עד 20 בשתי משמעויות: לחלקים ולהכלה',
      'הכרת החצי (חצי + חצי = שלם)',
      'חיפוש שיטתי של אוסף האפשרויות',
      'שאלות עם נתונים מיותרים',
      'הזזה ותכונותיה',
      'שיקוף ביחס לישר ותכונותיו',
      'סימטרייה ביחס לישר',
      'קריאת שעון בחצאי שעות',
      'ריבוע הקסם, סידורים שונים, כתב סתרים (העשרה)',
    ],
    forbidden: [
      'אלגברה פורמלית, משוואות עם נעלמים בשם x/y',
      'שברים פורמליים (חוץ מ"חצי" כרעיון אינטואיטיבי)',
      'חזקות, אחוזים',
      'תכנים מעבר לכיתה א׳ (לוח הכפל המלא, כפל גדול)',
    ],
  },
};

export function buildSystemPrompt(level = 'easy') {
  const scope = LEVEL_SCOPE[level] || LEVEL_SCOPE.easy;
  const lines = [
    `אתה מורה פרטי למתמטיקה לכיתה א׳.`,
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
  DIFFICULTY_BUCKETS,
  MASTERY_GOALS,
  AI_INSTRUCTIONS,
  LEVEL_SCOPE,
  buildSystemPrompt,
};
