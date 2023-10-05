const ioScan = require("./io-scan");
const { prompt } = require("./prompt");

function exec() {
  const readline = ioScan.createRlInterface(process.stdin, process.stdout);

  prompt(readline);

  readline.close();
}

exec();

module.exports = { exec };
