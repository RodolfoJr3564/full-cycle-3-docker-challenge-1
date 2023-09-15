// input-output.js
const readline = require("readline");

const createRlInterface = (input, output) => {
  return readline.createInterface({
    input,
    output,
  });
};

const questionAsync = (rl, prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

module.exports = {
  createRlInterface,
  questionAsync,
};
