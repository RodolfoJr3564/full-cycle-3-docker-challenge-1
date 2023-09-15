const { questionAsync } = require("../src/io-scan");
const { prompt } = require("../src/prompt");

jest.mock("../src/io-scan", () => ({
  questionAsync: jest.fn(),
}));

describe("prompt function", () => {
  it("should perform an addition operation", async () => {
    questionAsync
      .mockResolvedValueOnce("5")
      .mockResolvedValueOnce("+")
      .mockResolvedValueOnce("3");

    const consoleLog = jest.spyOn(console, "log").mockImplementation();
    const consoleError = jest.spyOn(console, "error").mockImplementation();

    const mockReadline = {};
    await prompt(mockReadline);

    expect(consoleLog).toHaveBeenCalledWith(8);
    expect(consoleError).not.toHaveBeenCalled();

    consoleLog.mockRestore();
    consoleError.mockRestore();
  });
});
