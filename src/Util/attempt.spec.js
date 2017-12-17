const _ = require("lodash");

describe("attempt", () => {
    function willReturnAValue() {
        return "AValue";
    }

    function willThrowAnError() {
        throw new Error("Bad things happened");
    }

    function willWrapAsErrorObject() {
        throw "Bad things happened, but I didn't throw an error object";
    }

    function willConditionallyThrowAnError(shouldThrow) {
        if (shouldThrow) {
            throw new Error("Decided something was wrong");
        }

        return "Things are good.";
    }

    it("Should return the value from a function", () => {
        const t = _.attempt(willReturnAValue);
        expect(t).toEqual("AValue");
    });

    it("Should invoke the function with arguments we provided", () => {
        const t1 = _.attempt(willConditionallyThrowAnError, true);
        expect(t1).toEqual(Error("Decided something was wrong"));

        const t2 = _.attempt(willConditionallyThrowAnError, false);
        expect(t2).toEqual("Things are good.");
    });

    it("Should return the error from a function", () => {
        const t = _.attempt(willThrowAnError);
        expect(t).toEqual(Error("Bad things happened"));
    });

    it("Should return the error from a function", () => {
        const t = _.attempt(willWrapAsErrorObject);
        expect(t).toEqual(Error("Bad things happened, but I didn't throw an error object"));
    });
});