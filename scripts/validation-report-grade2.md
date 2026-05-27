# Grade 2 Curriculum — PDF Validation Report

**Source of truth:** `kita2.pdf` (Israeli Ministry of Education math syllabus for Grade 2, pages 33–52).
Extracted via `scripts/extract-syllabus.js` (957 lines of text).

**Files created:**
- `src/curriculum/grade2/easy.js`
- `src/curriculum/grade2/medium.js`
- `src/curriculum/grade2/advanced.js`
- `src/curriculum/grade2/mastery.js`
- `src/curriculum/grade2.js` — thin orchestrator that combines the four files and exposes `buildSystemPrompt(level)` (analogous to grade1.js).

---

## 1. Topics extracted from the PDF

Grade 2 in the official syllabus is **125 hours** organized into five sections:

| § | Section | Hours |
|---|---|---|
| **א** | המספרים הטבעיים בתחום ה-1,000 | 10 |
| **ב** | פעולות החשבון בתחום ה-100 או יותר | 74 |
| **ג** | הרחבת תחום המספרים (ישר המספרים, חצי, רבע) | 6 |
| **ד** | חקר נתונים | 5 |
| **ה** | מדידות וגאומטרייה (כולל שיקוף/הזזה) | 30 |
| **Σ** | | **125** |

### Section א — Numbers (10 hrs)
- מנייה וספירה ביחידות, בעשרות שלמות ובמאות שלמות
- קריאה וכתיבה של מספרים דו- ותלת-ספרתיים, במילים ובספרות
- ערך המקום ביחידות/עשרות/מאות; **האפס כשומר מקום**
- בניית סדרות מספרים, סדר המספרים, חקר לוחות (לוח המאה ווריאציות שלו)
- מספרים זוגיים ואי-זוגיים — מוגדר כאן כ"כפולה של 2"
- שיטת האלף-בית עד ל (Hebrew letters up to ל = 30; ט"ו/ט"ז)

### Section ב — Arithmetic operations (74 hrs)
- **חיבור וחיסור במאוזן (18 hrs)** — graduated: 2-ten facts → table to 9+9 → 2-digit ± 1-digit (no regroup → regroup) → 2-digit ± 2-digit
- **חיבור וחיסור במאונך (11 hrs)** — vertical column algorithm built from decimal understanding
- **שאלות חיבור וחיסור (12 hrs)** — includes comparison problems (השוואה), multi-operation collection, range-of-answers problems
- **כפל וחילוק (25 hrs)** — meaning via concrete tools; multiplication table built gradually; **all students master to 6×6**, advanced reach 10×10; division without remainder; partitive (לחלקים) vs quotitive (להכלה); inverse relation; zero/one rules
- **סימני התחלקות ב-2, 5, 10** — "in advanced classes"
- **שימוש בסוגריים (3 hrs)** — formal precedence saved for Grade 3; parentheses force order
- **שאלות כפל וחילוק (5 hrs)** — buying / weight / time word problems; investigation activities

### Section ג — Number domain expansion (6 hrs)
- ישר המספרים (4 hrs): units, whole tens, whole hundreds; **negative integers intuitively** via temperature, floors, debt
- הכרת השברים חצי ורבע (2 hrs): half/quarter as parts of a unit and as parts of a quantity (חצי של 10)

### Section ד — Data investigation (5 hrs)
- Collection, organization, direct representation
- Sorting by criteria
- **דיאגרמות עמודות** on positive axes
- Reading & comparing diagrams, finding outliers
- Student-created representations

### Section ה — Measurement & geometry (30 hrs)
- **מדידות אורך** in cm and meter (2 hrs)
- **מדידות שטח** (7 hrs): cover/decomposition, tangram, סמ"ר; **equal area ≠ equal perimeter**; rectangle area = sides product
- **מדידות משקל** (3 hrs): pan balance, arbitrary units
- **מדידות זמן** (~3 hrs): whole / half / quarter hours; duration to half-hour accuracy, crossing 12; optional minutes
- **מצולעים וגופים (10 hrs)**: review rectangle/square/circle; cube, box, cylinder, pyramid, cone, sphere; פאות/מקצועות/קדקודים
- **שיקוף או הזזה (6 hrs)** — taught as alternation with Grade 1 (whichever wasn't covered then); 5 reflection properties; line symmetry; advanced enrichment: mirror writing, cipher shift on letter wheels

---

## 2. Topics added to the curriculum (≡ in the new files)

Every topic above is represented in `easy.js` / `medium.js` / `advanced.js` with a `pdfRef` field pointing back to the PDF section. The level split follows the project owner's spec:

| File | Coverage |
|---|---|
| `easy.js` | Counting (units/tens/hundreds), numbers ≤100, place-value basics, addition/subtraction ≤20, simple horizontal exercises, simple word problems (איסוף/הוספה/הפחתה/עודף), multiplication as repeated addition, simple shapes & bodies |
| `medium.js` | Numbers ≤1,000 with 3-digit place value, even/odd as "multiple of 2", Hebrew letters to ל, horizontal & vertical add/sub to 100 with regrouping, comparison word problems, multiplication table to 6×6, division without remainder, simple equations by trial, half & quarter, length in cm/m, area basics, weight, time to half-quarter hour, polygons & 3-D bodies, bar charts |
| `advanced.js` | 3-digit reasoning & estimation, add/sub beyond 100 as challenge, multi-step word problems, multiplication table toward 10×10, divisibility by 2/5/10, parentheses, number line with negative integers intuitively, area vs perimeter, reflection / translation / line symmetry, data interpretation, investigation tasks |
| `mastery.js` | The 26-item year-end mastery checklist verbatim from page 52 |

---

## 3. Topics removed / not added (and why)

**Nothing in the project owner's prompt was removed** — every bullet on the spec has a home in one of the files. A few items from the PDF were **not** elevated to top-level subtopics because they only appear as parenthetical hints:

| PDF mention | Why not its own subtopic |
|---|---|
| גימטרייה של מילים פשוטות | One-line aside in section א.10 ("אפשר לעסוק…"). Embedded inside `hebrew-letters-30`. |
| חוק הפילוג formally | The PDF explicitly says students use it without naming. Lives inside `multiplication-toward-10x10 → distributive`. |
| חלוקת השעה לדקות | PDF flags as "בהתאם ליכולת התלמידים" — left as a hint inside the time topic; not a required subtopic. |

The PDF also mentions sub-activities that are **pedagogical methods** rather than learning targets (e.g. "count on fingers" or "fold paper twice"). These are baked into the example question types rather than promoted to subtopics.

---

## 4. Mastery goals (page 52, verbatim)

26 items, copied verbatim to `grade2/mastery.js`:

**Numbers (4 items):** counting in units / tens; ordering 2-digit numbers; reading/writing numbers ≤ 100; terminology (יחידות, עשרות, מאות, ספרה, מספר, חד/דו/תלת-ספרתי, זוגי/אי-זוגי, קודם, עוקב).

**Operations (4 items):** add/sub ≤ 100 horizontal AND vertical; oral mastery of facts ≤ 20; one-step word problems + two-step *collection* problems with multiple add/sub operations; investigation tasks involving ≤ 100.

**Multiplication / division (6 items):** illustrate a multiplication or division exercise; multiples of 1, 2, 3, 4, 5, 10; explore the multiplication table; division by 2; terminology (גורמים, מכפלה); one-step multiplication word problems.

**Geometry — bodies (6 items):** build / take-apart simple bodies; informal sorting; analyze face/edge/vertex; learn body vocabulary (קובייה, תיבה, גליל, פירמידה, חרוט); match bodies to drawings/photos; describe similarities / differences.

**Area & perimeter (6 items):** compare areas; measure by cover/decomposition; use arbitrary units; find perimeter by counting length units; **intuitive distinction between area and perimeter**; vocabulary (שטח, היקף, יחידת שטח).

---

## 5. Unclear or notable PDF parts

| Topic | Note |
|---|---|
| **שיקוף or הזזה (section ה.3)** | The PDF explicitly says the school chooses ONE: schools that taught translation in Grade 1 do reflection in Grade 2, and vice versa. Both are included as advanced-level subtopics so the AI handles either. |
| **Multiplication table 10×10** | PDF says "all students master up to 6×6, advanced students up to 10×10". Reflected by putting `multiplication-to-6x6` in `medium.js` and `multiplication-toward-10x10` in `advanced.js`. |
| **Divisibility by 2/5/10** | PDF prefixes with "בכיתות מתקדמות" — placed in `advanced.js`. |
| **Negative integers** | PDF only at intuitive level (no formal arithmetic); covered as `advanced.number-line-negative`. |
| **Order of operations** | PDF defers formal precedence to Grade 3; only **parentheses** are introduced here. The `parentheses` subtopic in `advanced.js` carries a `no-precedence-yet` note. |
| **Hour to minutes** | "בהתאם ליכולת התלמידים" — present as commentary, not a required subtopic. |
| **שאלות איסוף terminology** | The PDF tells teachers NOT to use the word "איסוף" with students. The curriculum file uses it as an internal `id` label only; the AI prompt never asks the AI to use these tags with the child. |

---

## 6. Implementation notes

- `src/services/tutor.js` now imports both `grade1` and `grade2` and routes by the `grade` parameter sent from the UI (`'1'` or `'2'`).
- `public/index.html` shows two rows of pills: a grade row (כיתה א׳ / כיתה ב׳) and a level row (קלה / בינונית / מתקדמת).
- Both rows are wired to `selectedGrade` and `selectedLevel` and sent on every `/solve` request.
- Grade 1 behaviour is unchanged.
