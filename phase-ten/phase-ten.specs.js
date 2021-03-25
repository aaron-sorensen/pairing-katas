import { expect } from "chai";
import { checkPhase } from "./phase-ten.js";

describe("phase-ten", () => {
  describe("checkPhase", () => {
    it("should return a correct result", () => {
      expect(checkPhase()).to.not.be.undefined;
    });
  });
});
