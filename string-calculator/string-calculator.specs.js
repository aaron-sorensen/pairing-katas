// import { expect } from "chai";
// import { add, getCalledCount } from "./string-calculator.js";

// describe("string calculator", () => {
//   let addCount = 0;
//   describe("add", () => {
//     beforeEach(() => {
//       addCount += 1;
//     });
//     it("should handle empty string", () => {
//       expect(add("")).to.equal(0);
//     });
//     it("should handle single number", () => {
//       expect(add("1")).to.equal(1);
//     });
//     it("should handle two numbers", () => {
//       expect(add("1,2")).to.equal(3);
//     });
//     it("should handle an unknown amount of numbers", () => {
//       addCount += 2;
//       expect(add("2,2,2,2,2,2,2,2")).to.equal(16);
//       expect(add("1,2,3,4,5")).to.equal(15);
//       expect(add("1,1,1,1,1,1,1,1,1,1,1,1,1,1")).to.equal(14);
//     });
//     it("should allow newlines as delimiters", () => {
//       expect(add("1\n2,3")).to.equal(6);
//     });
//     it("should support custom delimiters", () => {
//       expect(add("//;\n1;2")).to.equal(3);
//     });
//     it("should reject negatives", () => {
//       expect(() => {
//         add("1,-2,-5");
//       }).to.throw();
//     });
//     it("should ignore numbers larger than 1000", () => {
//       expect(add("2,1001,5")).to.equal(7);
//     });
//     it("delimeters can be any length", () => {
//       expect(add("//;;;\n1;;;2")).to.equal(3);
//     });
//   });
//   describe("getCalledCount", () => {
//     it("should print how many times add has been called", () => {
//       expect(getCalledCount()).to.equal(addCount);
//     });
//   });
// });
