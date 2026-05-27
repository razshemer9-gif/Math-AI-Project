# Grade 1 Curriculum — PDF Validation Report

**Source of truth:** `kita1.pdf` (Israeli Ministry of Education math syllabus for Grade 1, pages 17–32).
Extracted via `scripts/extract-syllabus.js` using `pdf-parse` (706 lines of text).

**File updated:** `src/curriculum/grade1.js`

---

## PDF structure (verbatim)

The PDF divides Grade 1 into three sections with explicit hour budgets:

| § | Section | Hours |
|---|---|---|
| א | המספרים הטבעיים בתחום ה-100 | 25 |
| ב | פעולות החשבון (כולל שאלות מילוליות וכפל/חילוק) | 70 |
| ג | מדידות וגאומטריה (כולל הזזה / שיקוף) | 30 |
| **Σ** | | **125** |

Plus an end-of-year mastery checklist on page 32 ("שליטה ויכולת ביצוע").

---

## What already matched the PDF

These items existed in the previous `grade1.js` and are confirmed by the PDF:

- ✅ Natural numbers up to 100 (topic)
- ✅ Recognition of numbers 1–20
- ✅ Zero
- ✅ Counting / enumeration
- ✅ Comparison (bigger / smaller / equal)
- ✅ Number line
- ✅ Even / odd
- ✅ Numbers up to 100
- ✅ Addition / subtraction up to 10 (easy)
- ✅ Addition / subtraction up to 20 (medium)
- ✅ Addition / subtraction beyond 20 as enrichment (advanced)
- ✅ Word problems
- ✅ Multiplication / division up to 20 (advanced)
- ✅ Repeated addition as preparation for multiplication
- ✅ Half (חצי) — confirmed as enrichment under כפל/חילוק
- ✅ Length measurement
- ✅ Polygon recognition
- ✅ Square and rectangle
- ✅ Translation, reflection, symmetry

---

## What was MISSING from the previous version and is now added

| Added subtopic | Section | Level | Source line |
|---|---|---|---|
| הכרת ערכי האותיות א עד י | א.2 | easy | "הכרת ערכי האותיות א עד י; 2 ש'" |
| סימני השוויון והאי-שוויון (=, <, >) | א.5 | easy | "סימני השוויון והאי-שוויון; 2 ש'" |
| מנייה עד 50 (separate from counting to 100) | א.4 | easy | "מנייה עד 50, ספירה עד 100" |
| ספירה ומנייה בזוגות, בחמישיות ובעשרות | א.4 | medium | "ספירה ומנייה בזוגות, בחמישיות ובעשרות" |
| ספירה אחורנית | mastery | medium | mastery list: "ספירת המשך וספירה אחורנית" |
| השלמת מספרים בלוח המאה / זיהוי חוקיות בסדרות | א.7 | medium | "השלמת מספרים בלוח המאה" |
| חיבור וחיסור בעשרת השנייה (11–20) | ב.2 | medium | "חיבור וחיסור בעשרת השנייה; 6 ש'" |
| **חיבור וחיסור בעשרות שלמות (30+40=70)** | ב.3 | medium | "חיבור וחיסור בעשרות שלמות; 4 ש'" — was completely missing |
| יצירת תרגילים לתוצאה נתונה | ב.1 | easy | "יצירת תרגילי חיבור וחיסור לתוצאה נתונה" |
| משוואות פשוטות בניסוי ובדיקה | ב.4 | medium | "פתירת משוואות פשוטות על ידי ניסוי ובדיקה" |
| תובנה מספרית (השוואה ללא חישוב) | ב.4 | medium | "תובנה מספרית — השוואת תרגילים ללא פתרון" |
| Word problem TYPES: איסוף / הוספה / הפחתה / עודף | ב.5 | easy/medium | "סוגי שאלות: איסוף, הוספה, הפחתה, עודף" |
| שאלות עם נתונים מיותרים | ב.5 | advanced | "אפשר להציג שאלות שיש בהן נתונים מיותרים" |
| חיפוש שיטתי של אוסף האפשרויות | ב.5 | advanced | "חיפוש שיטתי של אוסף האפשרויות" — section heading |
| **Division has TWO meanings: לחלקים + להכלה** | ב.6 | advanced | "לחילוק שתי משמעויות: חילוק לחלקים, חילוק להכלה" — was collapsed before |
| ריבוע הקסם, סידור 3 פריטים (enrichment) | ב.6 | advanced | "פעילויות העשרה: ריבוע הקסם, אפשרויות הסידור של 3 פריטים" |
| השוואה ישירה של אורכים | ג.1.א | easy | "השוואה ישירה של אורכים" |
| השוואה בעזרת מתווך (חוט) | ג.1.א | medium | "השוואה בעזרת מתווך" |
| מדידת היקפים | ג.1.א | medium | "מדידת היקפים של מצולעים" |
| אמדן אורך | ג.1.א | medium | "אמדן אורך — שערו ובדקו" |
| התאמת יחידת מידה לגודל הנמדד | ג.1.א | medium | "התאמת יחידת המידה לגודל הנמדד" |
| קריאת שעון בחצאי שעות (advanced) | ג.1.ב | advanced | "למתקדמים: גם בחצאי שעות" |
| הבחנה בין קו ישר לקו עקום | ג.2.א | easy | "הכרת הישר כנבדל מקו עקום" |
| מצולעים בסרטוט מורכב / על גופים | ג.2.א | medium | "זיהוי מצולעים בסרטוט מורכב, על גופים ובחפצים" |
| בניית מצולעים שונים (גפרורים, טנגרם) | ג.2.א | medium | "שימוש באבזרים מוחשיים כמו חלקי הטנגרם" |
| קיפול וחקר נייר | ג.2.א | medium | "חקר מצולעים בעזרת קיפולי נייר וגזירות" |
| מרובעים מאותן צלעות בסדר שונה (מקבילית/דלתון) | ג.2.ב | medium | "הבחנה בין מרובעים שבנויים מאותן צלעות אך לא באותו סדר" |
| זווית ישרה אינטואיטיבית (קיפול נייר פעמיים) | ג.2.ב | medium | "את הזווית הישרה ניתן להכיר על ידי קיפול נייר פעמיים" |
| פאות תיבה כמלבנים, פאות קובייה כריבועים | ג.2.ב | medium | "אפשר להציג את פאות התיבה כמלבנים... פאות הקובייה כריבועים" |
| תכונות ההזזה (4 properties) | ג.3 | advanced | "ההזזה שומרת מרחק / חפיפה / מגמה / אין נקודת שבת" |
| תכונות השיקוף (5 properties) | ג.3 | advanced | "השיקוף שומר מרחק... מהפך מגמה... נקודות שבת" |
| כתב סתרים והזזה על גלגלי אותיות | ג.3 | advanced | "לתלמידים מתקדמים: הזזה על גלגלי אותיות" |
| **MASTERY_GOALS** — full end-of-year checklist (22 items) | page 32 | — | section "שליטה ויכולת ביצוע" — was completely absent |
| Math vocabulary list: יחידות, עשרות, צלע, קדקוד, מצולע, משולש, מרובע, מחומש, אורך, יחידת מידה, היקף | embedded | — | now woven into learningGoals |

---

## What was REMOVED (not supported by the PDF)

| Removed item | Reason |
|---|---|
| `measurement.money` as a stand-alone measurement subtopic | The PDF places money (מטבעות ושטרות) **only** inside word problems under arithmetic operations, not under measurement. Now lives as `word-problems.wp-money`. |
| `geometry.basic-shapes` (circle, triangle, square, rectangle) as an easy-level standalone topic | The PDF teaches shapes via polygon sorting, not as four named primitives. "Triangle / quadrilateral / pentagon" are introduced under `polygons.sort-by-sides`; "circle" is never explicitly listed for Grade 1. |
| Generic `word-problems` topic detached from arithmetic | The PDF places word problems under section ב (פעולות החשבון) as subsection ב.5. Renamed to `word-problems` but its hours (16) are part of the 70-hour operations budget. |
| Single `multiplication-to-20` and `division-to-20` items | Replaced with the PDF's explicit distinction: `division-partitive` (חילוק לחלקים) and `division-quotitive` (חילוק להכלה). |

---

## What was RECLASSIFIED

| Item | Before | After | Why |
|---|---|---|---|
| Symmetry / reflection / translation | three separate items | one topic `movement-symmetry` with subtopics matching PDF (הזזה, שיקוף, סימטרייה ביחס לישר) | PDF section ג.3 is titled "הזזה או שיקוף" with symmetry as a related concept; they aren't independent topics. Still all `advanced` per project rules. |
| "Tens" (עשרות) | own subtopic | now grouped under `numbers-to-100` as the PDF does | PDF's index lists tens inside section א.7 "הכרת המספרים בתחום ה-100" |
| Length measurement | single subtopic | 7 subtopics covering direct/intermediate compare, arbitrary/cm units, perimeter, estimation, unit-to-size matching | PDF has 10 hrs dedicated to it with explicit sub-activities |
| Money / time word problems | under `measurement` | under `word-problems` | matches PDF's section ב.5 explicit examples (עודף בקנייה, ימים בשבוע) |

---

## Notes on level mapping (easy / medium / advanced)

The PDF itself does **not** label topics with these three difficulty levels. The
project owner provided the mapping in chat. I applied two rules to translate
PDF content to those levels:

1. Anything the PDF labels **"פעילויות העשרה"** (enrichment) or
   **"לתלמידים מתקדמים"** (for advanced students) is mapped to **advanced**.
   This applies to: addition beyond 20, half, magic square, 3-item arrangements,
   data-redundant word problems, systematic possibilities, cipher writing,
   clock-reading in half hours.
2. Everything else follows the owner's spec: easy = sub-20 facts / very simple,
   medium = sub-100 / number line / polygons / measurement, advanced = mul-div
   and transformations.

One small flag for the owner: the PDF treats **הזזה or שיקוף** (section ג.3,
6 hrs) as **core curriculum**, not enrichment. The project owner explicitly
asked to bucket these as **advanced**. I followed the owner's spec but want you
to know there is a mismatch with the official PDF on this single point.

---

## Files

| File | Status |
|---|---|
| `src/curriculum/grade1.js` | rewritten from PDF |
| `src/curriculum/grade1.js → MASTERY_GOALS` | new export, copied from PDF page 32 |
| `scripts/extract-syllabus.js` | tooling for re-extracting if needed |
| `scripts/kita1.raw.txt` | raw PDF text (706 lines) |
| `scripts/validation-report.md` | this document |
