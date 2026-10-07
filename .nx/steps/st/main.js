const fs = require('fs');
fs.appendFileSync(process.env.GITHUB_STATE, 'saved=hello-state\n');
for (const [k, v] of Object.entries(process.env)) {
  if (k.startsWith('INPUT_')) console.log(`${k}=${v}`);
}
