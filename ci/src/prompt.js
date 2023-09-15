const { operations } = require("./math-operations");
const { questionAsync, createRlInterface } = require("./io-scan");

async function prompt(readline) {
  try {
    const num1 = await questionAsync(readline, "Digite o primeiro número: ");

    const operation = await questionAsync(
      readline,
      `Digite a operação (${Object.keys(operations).join(", ")}): `
    );

    const num2 = await questionAsync(readline, "Digite o segundo número: ");

    console.log(operations[operation](+num1, +num2));
  } catch (err) {
    console.error("Erro ao calcular:", err);
  }
}

module.exports = { prompt };
