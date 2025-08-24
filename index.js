```js
const fs = require('fs');

// Soma JSON API ya bot
const botData = JSON.parse(fs.readFileSync('silatrix-bot-api.json', 'utf8'));

// Function ya kuchukua response kwa trigger fulani
function getBotResponse(trigger) {
  const cmd = botData.commands.find(cmd => cmd.trigger === trigger.toLowerCase());
  return cmd ? cmd.response : botData.error_response;
}

// Mfano wa kutumia:
const input = 'msaada'; // badilisha hapa kwa input ya mtumiaji
const response = getBotResponse(input);

console.log(response);
```
