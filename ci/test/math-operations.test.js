const { describe, it } = require("node:test");
const assert = require("node:assert");
const { operations } = require("../src/math-operations");

describe("Operations", () => {
  it("should sum", () => {
    const result = operations["+"](1, 1);
    assert.strictEqual(result, 2);
  });

  it("should subtract", () => {
    const result = operations["-"](1, 1);
    assert.strictEqual(result, 0);
  });

  it("should multiply", () => {
    const result = operations["*"](2, 2);
    assert.strictEqual(result, 4);
  });

  it("should divide", () => {
    const result = operations["/"](4, 2);
    assert.strictEqual(result, 2);
  });
});
