const { operations } = require("../src/math-operations");

describe("Operations", () => {
  it("should sum", () => {
    const result = operations["+"](1, 1);
    expect(result).toBe(2);
  });

  it("should subtract", () => {
    const result = operations["-"](1, 1);
    expect(result).toBe(0);
  });

  it("should multiply", () => {
    const result = operations["*"](2, 2);
    expect(result).toBe(4);
  });

  it("should divide", () => {
    const result = operations["/"](4, 2);
    expect(result).toBe(2);
  });
});
