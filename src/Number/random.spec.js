const _ = require("lodash");

describe("random", () => {
    it("Will generate a random number, using the native javascript Math.random (So no way to seed) function", () => {
        let t = _.random();
        expect(t).toBeGreaterThanOrEqual(0);
        expect(t).toBeLessThanOrEqual(1);
    });

    it("Will generate a number between specified ranges (inclusively", () => {
        let t = _.random(5, 10);
        expect(t).toBeGreaterThanOrEqual(5);
        expect(t).toBeLessThanOrEqual(10);
    });

    it("If you supply a range, it generates integer random numbers by default", () => {
        let t = _.random(5000, 10000000);

        expect(t).toEqual(_.floor(t));
    });

    xit("But you can tell it to create real numbers as well", () => {
        let t = _.random(5000, 10000, true);
        expect(t).not.toEqual(_.floor(t)); //This test might not pass everytime.  But should pass most times.
    });

    it("Can use a custom random function", () => {
        function myNotSoRandomNumberGenerator(a,b) {
            return 0.5;
        }

        const realMathRandom = Math.random;
        Math.random = myNotSoRandomNumberGenerator;

        const myLodashWithCustomRandom = _.runInContext();
        Math.random = realMathRandom; //the lodash reference above has a reference to the fake function.  We're good to revert the rest of the Javascript eco system here.

        const t = myLodashWithCustomRandom.random();
        expect(t).toEqual(1); //The logic it uses to put the random number in range results in the returned number doubled.


    });
});