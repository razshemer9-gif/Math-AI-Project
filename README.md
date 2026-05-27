# math-ai-tutor-mvp

A minimal MVP of a Hebrew-speaking AI math tutor for kids.

Send a math question — as text or as an image of a worksheet — and the AI returns a friendly, step-by-step explanation in simple Hebrew.

Built as a small Node.js / Express backend, ready to be plugged into WhatsApp (or any other channel) later. Includes a tiny test webpage so you can try it locally in the browser.

## Tech

- Node.js + Express
- Google Gemini API (`gemini-2.5-flash-lite`, free tier) for both text and vision
- `multer` for image uploads
- Vanilla HTML/JS test page served at `http://localhost:3000`

## Project structure

```
.
├── public/
│   └── index.html          # Test page (Hebrew RTL UI)
├── src/
│   ├── index.js            # Express server
│   ├── routes/solve.js     # POST /solve (text or image)
│   ├── services/tutor.js   # Gemini call + Hebrew system prompt
│   └── whatsapp/           # placeholder for future WhatsApp integration
├── .env.example
└── package.json
```

## Setup

1. Clone and install:
   ```bash
   git clone https://github.com/<you>/math-ai-tutor-mvp.git
   cd math-ai-tutor-mvp
   npm install
   ```

2. Get a free Gemini API key at https://aistudio.google.com/app/apikey

3. Create your `.env`:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and replace the placeholder with your real key:
   ```
   GEMINI_API_KEY=your-real-key
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open the test page at http://localhost:3000

## API

`POST /solve` accepts either:

- JSON body: `{ "text": "כמה זה 12 חלקי 4 ועוד 3?" }`
- multipart form: field `image` (an image file), optionally with a `text` field

Response: `{ "explanation": "..." }` — a Hebrew, step-by-step explanation.

Example:
```bash
curl -X POST http://localhost:3000/solve \
  -H "Content-Type: application/json" \
  -d '{"text":"3+5*2"}'
```

## Notes

- `.env` is gitignored — never commit your real API key.
- The `src/whatsapp/` folder is a placeholder; future webhook code will live there and call `solveMath()` from `services/tutor.js`.
