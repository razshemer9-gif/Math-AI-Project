WhatsApp integration goes here later.
Webhook handler will:
1. Receive incoming message (text or media)
2. Download media if present
3. Call services/tutor.js -> solveMath({ text, image })
4. Send the returned explanation back via WhatsApp API
