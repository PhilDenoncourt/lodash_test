const _ = require("lodash");

describe("inRange", () => {
    it("Will return true if the first argument is between the second and third arguments", () => {
        const t1 = _.inRange(10, 5, 15);
        expect(t1).toBeTruthy();

        const t2 = _.inRange(0,5,15);
        expect(t2).toBeFalsy();
    });

    it("Will return true if the first argument is between zero and the second argument if the third argument is omitted",()=>{
        const t1 = _.inRange(10,15);
        expect(t1).toBeTruthy();

        const t2 = _.inRange(-5,15);
        expect(t2).toBeFalsy();

        const t3 = _.inRange(20,15);
        expect(t3).toBeFalsy();
    });

    it("The start value is inclusive",()=>{
        const t1 = _.inRange(5,5,10);
        expect(t1).toBeTruthy();
    });

    it("The end value is not inclusive",()=>{
        const t2 = _.inRange(10,5,10);
        expect(t2).toBeFalsy();
    });

    it("Will take string arguments",()=>{
       const t = _.inRange("10","5","15");
       expect(t).toBeTruthy();
    });

    it("Will not complain if you supply arguments in the wrong order",()=>{
        const t = _.inRange(5,15,10);
        expect(t).toBeFalsy();
    });

    it("Changes NaN arguments to 0",()=>{
        const t1 = _.inRange(0,NaN, 1);
        expect(t1).toBeTruthy();

        const t2 = _.inRange(-1,-2,NaN);
        expect(t2).toBeTruthy();
    });

    it("Works with un-safe integers",()=>{
        const t = _.inRange(Math.pow(2,53),Math.pow(2,53)+2);
        expect(t).toBeTruthy();
    });
});