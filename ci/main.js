const readline = require("readline");

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionAsync = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  try {
    const num1 = await questionAsync("Digite o primeiro número: ");

    const operation = await questionAsync(
      `Digite a operação (${Object.keys(operations).join([", "])}): `
    );

    const num2 = await questionAsync("Digite o segundo número: ");

    const result = operations[operation](num1, num2);

    console.log(`O resultado é ${result}`);
  } catch (err) {
    console.error("Erro ao calcular:", err);
  } finally {
    rl.close();
  }
})();
