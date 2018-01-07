const _ = require("lodash");
const people = require("../../data/people");

describe("cond", () => {
    function isEven(n) {
        return !(n % 2);
    }

    function isPowerOf2(n) {
        return n && (n & (n - 1)) === 0;
    }

    function isPrime(n) {
        for (let i = 2; i < n; i++)
            if (n % i === 0) return false;
        return n !== 1;
    }

    const condMap = [
        [isPrime, _.constant("Is prime")],
        [isPowerOf2, _.constant("Is power of 2")],
        [isEven, _.constant("Is even")]
    ];

    it("it will go through an array containing a pairs of functions.  First function is the condition pair, second function is invoked to return the result", () => {
        const f1 = _.cond(condMap);
        const t1 = f1(13);
        expect(t1).toEqual("Is prime");

        const t3 = f1(12);
        expect(t3).toEqual("Is even");
    });

    it("Returns the result from the first function that satisfies a condition",()=>{
        const f1 = _.cond(condMap);

        const t2 = f1(4096);
        expect(t2).toEqual("Is power of 2");
        expect(t2).not.toEqual("Is even");
    })

    it("Returns undefined if no functions return true.",()=>{
        const f1 = _.cond(condMap);
        const t4 = f1(9);
        expect(t4).toEqual(undefined);
    });
});