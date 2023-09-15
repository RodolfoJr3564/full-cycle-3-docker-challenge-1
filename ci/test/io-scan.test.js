const { Readable } = require("stream");
const { createRlInterface, questionAsync } = require("../src/io-scan");

describe("questionAsync tests", () => {
  it("should return the correct answer", async () => {
    const mockInput = new Readable({
      read() {
        this.push("test answer\n");
        this.push(null);
      },
    });

    const rl = createRlInterface(mockInput, process.stdout);
    const answer = await questionAsync(rl, "Enter some data: ");

    expect(answer).toBe("test answer");

    rl.close();
  });
});
