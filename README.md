```
SILATRIX Bot

SILATRIX ni WhatsApp bot ya kisasa inayojibu kwa kutumia JSON API responses.

📦 Files

- `silatrix-bot.json` — Maelezo ya commands zote
- `index.js` — Script ya Node.js ya kusoma na kutoa majibu
- `README.md` — Maelezo ya mradi

⚙️ Matumizi

1. Weka Node.js kwenye mazingira yako (PC au Termux)
2. Run script kwa kutumia:
   ```bash
   node index.js
   ```
3. Bot itachukua trigger kama `msaada`, `salamu`, n.k., na kurudisha majibu kutoka kwa JSON.

💡 Mfano wa Command
```json
{
  "trigger": "salamu",
  "response": {
    "type": "text",
    "content": "Habari! Karibu kwenye bot ya SILATRIX."
  }
}
```

🧑‍💻 Developer
Developed by *Silatri2
