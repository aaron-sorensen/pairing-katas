import { expect } from "chai";
import { arabicToRoman } from "./roman-numerals.js";

describe("roman-numerals", () => {
  describe("arabicToRoman", () => {
    it("should return single digits", () => {
      expect(arabicToRoman(1)).to.equal("I");
      expect(arabicToRoman(2)).to.equal("II");
      expect(arabicToRoman(3)).to.equal("III");
    });
  });
});
