require('fs').appendFileSync(process.env.NX_CLOUD_STATE, 'nsaved=nx-state\n');
console.log('nx-input=' + process.env.NX_CLOUD_INPUT_label);
