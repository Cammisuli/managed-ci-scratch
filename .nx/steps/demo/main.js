const fs = require('fs');
console.log(`inputs: greeting=${process.env.NX_CLOUD_INPUT_greeting} target=${process.env.NX_CLOUD_INPUT_target}`);
console.log(`GitHub-style inputs: INPUT_GREETING=${process.env.INPUT_GREETING} INPUT_TARGET=${process.env.INPUT_TARGET}`);
fs.appendFileSync(process.env.NX_CLOUD_STATE, `started_at=${new Date().toISOString()}\n`);
console.log('saved state started_at for the post step');
