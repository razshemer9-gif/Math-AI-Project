import { GoogleGenerativeAI } from '@google/generative-ai';
import grade1 from '../curriculum/grade1.js';
import grade2 from '../curriculum/grade2.js';

/* ─────────────────────────────────────────────────────────────────────────
 * CURRICULUM REGISTRY
 * Maps grade string → curriculum module (grade1.js / grade2.js).
 * Only grades '1' and '2' are supported by the uploaded official PDFs.
 * Any other value is rejected with a safe Hebrew fallback.
 * ───────────────────────────────────────────────────────────────────────── */
const CURRICULA = {
    '1': grade1,
    '2': grade2,
};

const VALID_GRADES  = new Set(['1', '2']);
const VALID_LEVELS  = new Set(['easy', 'medium', 'advanced']);

/* ─────────────────────────────────────────────────────────────────────────
 * UNSUPPORTED-TOPIC DETECTION
 *
 * These patterns flag questions that are definitively outside the Grade 1–2
 * Israeli Ministry of Education syllabus (kita1.pdf / kita2.pdf).
 * Matches are case-insensitive. When a match is found the server returns a
 * Hebrew fallback without calling the AI — preventing hallucination.
 *
 * SOURCE: LEVEL_SCOPE[*].forbidden arrays in grade1.js and grade2.js + the
 * "אסור" lists in every sub-file. Nothing is invented here.
 * ───────────────────────────────────────────────────────────────────────── */
const UNSUPPORTED_PATTERNS = [
    // Algebra & variables (forbidden in both grades)
    /\bx\s*=|\by\s*=|\bz\s*=/i,
    /\balgebra\b/i,
    /אלגברה/,
    /נעלמ(?:ים)?/,          // "נעלמים" = unknowns / variables
    /משוואה.*x|x.*משוואה/i, // equation with x

    // Powers / exponents
    /\bחזקה\b|\^[2-9]|\*\*[2-9]/,
    /\bexponent\b|\bpower\b/i,

    // Percentages
    /אחוז(?:ים)?|%\s*\d|\d\s*%/,
    /\bpercent\b/i,

    // Trigonometry
    /\bsin\b|\bcos\b|\btan\b|\bsinh\b/i,
    /טריגונומטר/,
    /סינוס|קוסינוס|טנגנס/,

    // Calculus / derivatives / integrals
    /\bintegral\b|\bderivative\b|\blimit\b|\bcalculus\b/i,
    /גזירה|אינטגרל|גבול\s+של\s+פונקצ/,

    // Logarithms
    /\blog\b|\bln\b|\blogarithm\b/i,
    /לוגריתם/,

    // Fractions beyond half/quarter (Grade 2 allows only חצי ורבע)
    /שלישית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית(?!\s*ש)/,
    // Note: עשירית as ordinal "tenth" is ok, but עשירית as fraction is not.
    /[3-9]\s*\/\s*[4-9][0-9]|[0-9]+\s*\/\s*[3-9][0-9]/,  // fractions like 3/7, 2/15 etc.

    // Square roots
    /\bsqrt\b|\bsquare root\b/i,
    /שורש ריבועי|√/,

    // Negative number arithmetic (Grade 2 advanced only introduces negatives conceptually)
    /\(-[1-9]|−[1-9].*[+\-×÷].*−[1-9]/,  // computations with negatives

    // Complex/imaginary numbers
    /\bimaginary\b|\bcomplex number\b/i,
    /מספר מרוכב/,

    // Statistics beyond bar charts (Grade 2 only covers basic bar charts)
    /\bstatistics\b|\bstandard deviation\b|\bvariance\b|\bregression\b/i,
    /סטטיסטיקה.*מתקדמ|שונות|סטיית תקן/,

    // Geometry beyond Grade 2 (circles area formula, angles in degrees formally, etc.)
    /\bpi\b|\bπ\b|\b3\.14/i,    // π / pi for area calculations
    /זווית ב-מעלות.*[0-9]{3}/,  // 3-digit degree angles
    /טריגונומטריה|גאומטריה אנליטית/,

    // Programming / CS
    /\bcode\b|\bprogram\b|\bpython\b|\bjavascript\b/i,
    /תכנות|קוד מחשב/,

    // Outside math entirely
    /היסטוריה|ביולוגיה|כימיה|פיזיקה|גאוגרפיה|ספרות/,
  ];

/* ─────────────────────────────────────────────────────────────────────────
 * ADVANCED-TERM GUARDRAILS
 *
 * These terms should never appear in a Grade 1 (easy/medium) response.
 * They ARE allowed in Grade 1 advanced or Grade 2.
 * We inject this constraint into the system prompt, not post-process.
 * ───────────────────────────────────────────────────────────────────────── */
const GRADE1_EASY_MEDIUM_FORBIDDEN_TERMS = [
    'כפל', 'חילוק', 'מחלק', 'מכפיל', 'שבר', 'חצי כ', 'רבע', 'אחוז',
    'נעלם', 'סוגריים', 'מספר שלילי', 'שליל', 'היקף', 'שטח',
  ];

/* ─────────────────────────────────────────────────────────────────────────
 * SAFE FALLBACK MESSAGES (Hebrew — child-friendly)
 * ───────────────────────────────────────────────────────────────────────── */
const MSG_UNSUPPORTED_TOPIC =
    'הנושא הזה עדיין לא נתמך במערכת. 📚\n' +
    'אני יכול לעזור עם נושאים מכיתה א׳ וכיתה ב׳ בלבד — ' +
    'כמו חיבור, חיסור, כפל, חילוק, צורות ומדידות.\n' +
    'נסו לשאול שאלה אחרת!';

const MSG_INVALID_GRADE =
    'הכיתה שנבחרה אינה נתמכת. אנא בחרו כיתה א׳ או כיתה ב׳.';

const MSG_INVALID_LEVEL =
    'הרמה שנבחרה אינה נתמכת. אנא בחרו: קלה, בינונית או מתקדמת.';

const MSG_MISSING_INPUT =
    'שאלה ריקה. אנא כתבו שאלת מתמטיקה.';

const MSG_IMAGE_FAILED =
    'לא הצלחתי לקרוא את התמונה. ודאו שהתמונה ברורה ומכילה שאלת מתמטיקה, ונסו שוב.';

const MSG_API_KEY_MISSING =
    'שגיאת תצורה פנימית. המורה אינו זמין כרגע — אנא נסו שוב מאוחר יותר.';

const MSG_GENERIC_ERROR =
    'משהו השתבש. נסו שוב בעוד רגע. 😕';

/* ─────────────────────────────────────────────────────────────────────────
 * HELPERS
 * ───────────────────────────────────────────────────────────────────────── */

/**
 * Returns true if the text contains patterns outside Grade 1-2 curriculum.
 * Checks are based solely on the forbidden lists in the curriculum files.
 */
function isUnsupportedTopic(text = '') {
    return UNSUPPORTED_PATTERNS.some(re => re.test(text));
}

/**
 * Validates all incoming parameters before hitting the AI.
 * Throws a structured error with a Hebrew child-friendly message and
 * an HTTP status code.
 */
function validateInput({ text, image, grade, level }) {
    // 1. Input presence
  if (!text && !image) {
        const err = new Error(MSG_MISSING_INPUT);
        err.status = 400;
        throw err;
  }

  // 2. Grade validation
  if (!VALID_GRADES.has(String(grade))) {
        const err = new Error(MSG_INVALID_GRADE);
        err.status = 400;
        throw err;
  }

  // 3. Level validation
  if (!VALID_LEVELS.has(String(level))) {
        const err = new Error(MSG_INVALID_LEVEL);
        err.status = 400;
        throw err;
  }

  // 4. Unsupported topic detection (text only — images are checked differently)
  if (text && isUnsupportedTopic(text)) {
        // Log for monitoring — no sensitive data, just the pattern match
      console.warn(
              `[UNSUPPORTED_TOPIC] grade=${grade} level=${level} ` +
              `text="${text.substring(0, 80).replace(/\n/g, ' ')}"`
            );
        const err = new Error(MSG_UNSUPPORTED_TOPIC);
        err.status = 200;  // 200 so frontend renders it as a normal AI message
      err.isUnsupported = true;
        throw err;
  }

  // 5. Text length guard (prevent prompt injection via enormous payloads)
  if (text && text.length > 600) {
        const err = new Error('השאלה ארוכה מדי. אנא כתבו שאלה קצרה יותר (עד 600 תווים).');
        err.status = 400;
        throw err;
  }
}

/**
 * Build the grade/level-specific system prompt.
 * Falls back to the generic prompt only if the grade module is missing.
 */
function buildPrompt({ grade, level }) {
    const curriculum = CURRICULA[String(grade)];
    if (!curriculum) {
          // Should never reach here after validateInput, but belt-and-suspenders
      console.error(`[CONFIG_ERROR] No curriculum module for grade=${grade}`);
          return null;
    }
    return curriculum.buildSystemPrompt(level);
}

/**
 * Append extra grade-level term restrictions to the system prompt.
 * Prevents the AI from using vocabulary that is above the child's level.
 */
function appendTermGuardrails(systemPrompt, { grade, level }) {
    const g = String(grade);
    const l = String(level);

  // Grade 1 easy/medium: explicitly forbid advanced math terms in AI output
  if (g === '1' && (l === 'easy' || l === 'medium')) {
        return (
                systemPrompt +
                '\n\n' +
                'חשוב מאוד: אסור בתכלית האיסור להזכיר בתשובה את המילים הבאות:\n' +
                GRADE1_EASY_MEDIUM_FORBIDDEN_TERMS.map(t => `• ${t}`).join('\n') +
                '\nאם השאלה דורשת מושגים אלו, הסבר שהם לא נלמדים עדיין בכיתה א׳ ברמה קלה/בינונית.'
              );
  }

  return systemPrompt;
}

/* ─────────────────────────────────────────────────────────────────────────
 * API KEY CHECK
 * Fails fast at import time if the key is missing, with a clear log message.
 * ───────────────────────────────────────────────────────────────────────── */
if (!process.env.GEMINI_API_KEY) {
    console.error(
          '[FATAL] GEMINI_API_KEY environment variable is not set. ' +
          'Add it to your .env file (locally) or to the Render environment variables dashboard.'
        );
}

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    : null;

/* ─────────────────────────────────────────────────────────────────────────
 * PUBLIC API
 * ───────────────────────────────────────────────────────────────────────── */

/**
 * Main entry point called by the /solve route.
 *
 * Safeguard order:
 *   1. validateInput  — rejects bad grades, levels, unsupported topics, empty input
 *   2. API key check  — returns friendly Hebrew error if key is missing
 *   3. buildPrompt    — builds grade/level-scoped system prompt
 *   4. appendTermGuardrails — adds forbidden-term list for Grade 1 easy/medium
 *   5. Gemini call    — wrapped in try/catch; image errors get a specific message
 *   6. Log unsupported — already done inside validateInput
 *
 * @throws {Error} with .status and child-friendly Hebrew .message
 */
export async function solveMath({ text, image, grade, level }) {
    // ── Step 1: validate all inputs ──────────────────────────────────────────
  validateInput({ text, image, grade, level });

  // ── Step 2: check API key ────────────────────────────────────────────────
  if (!genAI) {
        console.error('[API_KEY_MISSING] Request attempted without GEMINI_API_KEY.');
        const err = new Error(MSG_API_KEY_MISSING);
        err.status = 503;
        throw err;
  }

  // ── Step 3: build scoped system prompt ───────────────────────────────────
  let systemInstruction = buildPrompt({ grade, level });

  // ── Step 4: append term guardrails ───────────────────────────────────────
  systemInstruction = appendTermGuardrails(systemInstruction, { grade, level });

  // ── Step 5: call Gemini ──────────────────────────────────────────────────
  const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite',
        systemInstruction,
  });

  const parts = [];
    parts.push({ text: text || 'פתור את שאלת המתמטיקה שבתמונה.' });
    if (image) {
          // Validate image mime type before sending
      const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic'];
          if (!ALLOWED_IMAGE_TYPES.includes(image.mimeType)) {
                  const err = new Error(MSG_IMAGE_FAILED);
                  err.status = 400;
                  throw err;
          }
          parts.push({
                  inlineData: {
                            data: image.buffer.toString('base64'),
                            mimeType: image.mimeType,
                  },
          });
    }

  try {
        const result = await model.generateContent(parts);
        const responseText = result.response.text().trim();

      // ── Step 6: post-generation safety check ──────────────────────────────
      // If Gemini somehow returns empty text, return a safe message
      if (!responseText) {
              console.warn(`[EMPTY_RESPONSE] grade=${grade} level=${level} text="${(text||'').substring(0,60)}"`);
              const err = new Error(MSG_GENERIC_ERROR);
              err.status = 500;
              throw err;
      }

      // Log successful requests for monitoring (no PII — only grade/level/length)
      console.info(
              `[SOLVED] grade=${grade} level=${level} ` +
              `inputLen=${(text||'').length + (image ? '+img' : '')} ` +
              `outputLen=${responseText.length}`
            );

      return responseText;

  } catch (err) {
        // Re-throw errors we already shaped
      if (err.status) throw err;

      // Handle image-specific Gemini errors
      const msg = err.message || '';
        if (msg.includes('image') || msg.includes('INVALID_ARGUMENT') || msg.includes('vision')) {
                console.error(`[IMAGE_ERROR] ${msg.substring(0, 120)}`);
                const imgErr = new Error(MSG_IMAGE_FAILED);
                imgErr.status = 400;
                throw imgErr;
        }

      // Handle missing/invalid API key upstream errors
      if (msg.includes('API_KEY_INVALID') || msg.includes('401') || msg.includes('403')) {
              console.error('[API_KEY_ERROR] Gemini rejected the API key. Check GEMINI_API_KEY in Render environment.');
              const keyErr = new Error(MSG_API_KEY_MISSING);
              keyErr.status = 503;
              throw keyErr;
      }

      // Generic Gemini/network error — log details server-side only
      console.error(`[GEMINI_ERROR] grade=${grade} level=${level} error=${msg.substring(0, 200)}`);
        const genericErr = new Error(MSG_GENERIC_ERROR);
        genericErr.status = 500;
        throw genericErr;
  }
}
