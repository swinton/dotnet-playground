#!/usr/bin/env node
const os = require('os');

const windows = os.platform().startsWith('win');

(async () => {
  console.log(`Windows? ${windows}.`);
})();
