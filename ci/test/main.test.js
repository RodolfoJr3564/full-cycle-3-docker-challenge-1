const { createRlInterface } = require("../src/io-scan");
const { prompt } = require("../src/prompt");

jest.mock("../src/io-scan");
jest.mock("../src/prompt");

describe("main execution", () => {
  it("should call prompt and close readline", () => {
    const mockClose = jest.fn();

    createRlInterface.mockReturnValue({
      close: mockClose,
    });

    prompt.mockImplementation(jest.fn());

    require("../src/main.js").exec();

    expect(prompt).toHaveBeenCalled();
    expect(mockClose).toHaveBeenCalled();
  });
});
