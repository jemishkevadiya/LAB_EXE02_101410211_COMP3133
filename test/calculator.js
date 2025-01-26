const calculator = require("../app/calculator.js"); 
const { expect } = require("chai");

describe("Calculator Tests", () => {
    it("add(1, 1) expected result 2 PASS", () => {
        const result = calculator.add(1, 1);
        expect(result).to.equal(2);
    });

    it("add(1, 1) expected result 3 FAIL", () => {
        const result = calculator.add(1, 1);
        expect(result).to.equal(3);
    });

    it("sub(1, 1) expected result 0 PASS", () => {
        const result = calculator.sub(1, 1);
        expect(result).to.equal(0);
    });

    it("sub(1, 1) expected result 5 FAIL", () => {
        const result = calculator.sub(1, 1);
        expect(result).to.equal(5);
    });

    it("mul(1, 1) expected result 1 PASS", () => {
        const result = calculator.mul(1, 1);
        expect(result).to.equal(1);
    });

    it("mul(1, 1) expected result 2 FAIL", () => {
        const result = calculator.mul(1, 1);
        expect(result).to.equal(2);
    });

    it("div(1, 1) expected result 1 PASS", () => {
        const result = calculator.div(1, 1);
        expect(result).to.equal(1);
    });

    it("div(1, 1) expected result 2 FAIL", () => {
        const result = calculator.div(1, 1);
        expect(result).to.equal(2);
    });
});
