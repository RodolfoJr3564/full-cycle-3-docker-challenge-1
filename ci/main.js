const { operations } = require("./src/math-operations");
const { questionAsync, createRlInterface } = require("./src/io-scan");

(async () => {
  const readline = createRlInterface(process.stdin, process.stdout);

  try {
    const num1 = await questionAsync(readline, "Digite o primeiro número: ");

    const operation = await questionAsync(
      readline,
      `Digite a operação (${Object.keys(operations).join(", ")}): `
    );

    const num2 = await questionAsync(readline, "Digite o segundo número: ");

    const result = operations[operation](num1, num2);

    console.log(`O resultado é ${result}`);
  } catch (err) {
    console.error("Erro ao calcular:", err);
  } finally {
    readline.close();
  }
})();
