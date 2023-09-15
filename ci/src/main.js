const readline = require("./io-scan").createRlInterface(
  process.stdin,
  process.stdout
);

require("./prompt").prompt();

readline.close();
