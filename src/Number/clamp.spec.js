const _ = require("lodash");

describe("clamp", () => {
    it("Will make sure the number falls within a range, and adjust if it not", () => {
        const t1 = _.clamp(3, 5, 10);
        expect(t1).toBe(5);
        expect(t1).not.toBe(3);

        const t2 = _.clamp(13, 5, 10);
        expect(t2).toBe(10);
        expect(t2).not.toBe(13);

        const t3 = _.clamp(7, 5, 10);
        expect(t3).toBe(7);
        expect(t3).not.toBe(5);
        expect(t3).not.toBe(10);
    });

    it("If only two args are supplied, the 2nd is the upper bound", () => {
        const t = _.clamp(13, 10);
        expect(t).toBe(10);
        expect(t).not.toBe(13);
    });

    it("If argument is greater than lower bound, highest will likely be used", () => {
        const t = _.clamp(3,10,5);
        expect(t).toBe(10);
        expect(t).not.toBe(3);
        expect(t).not.toBe(5);
    }) ;

    it("Will convert strings that look like a binary number",()=>{
       const t = _.clamp(3,"0b101",10);
       expect(t).toBe(5);
    });

    it("Will convert strings that look like an octal number",()=>{
        const t = _.clamp(13,5,"0xa");
        expect(t).toBe(10);
    });
});