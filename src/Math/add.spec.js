const _ = require("lodash");

describe("add", () => {
    it("Will add two numbers", () => {
        const t = _.add(2, 3);
        expect(t).toBe(5);
    });

    it("Will only add two numbers", () => {
        const t = _.add(1, 2, 3);
        expect(t).toBe(3);
        expect(t).not.toBe(6);
    });

    it("Will return NaN for symbols", () => {
        const s1 = Symbol(5);
        const s2 = Symbol(6);

        const t = _.add(s1, s2);
        expect(t).toBeNaN();
        expect(t).not.toBe(11);
    });

    it("Will not invoke passed in functions", () => {
        function f1() {
            return 3;
        }

        function f2() {
            return 4;
        }

        const t = _.add(f1, f2);
        expect(t).toBeNaN();
        expect(t).not.toBe(7);
    });

    it("Will not work with an array and a numeric argument",()=>{
       const data = [1,2];
       const t = _.add(4,data);
       expect(t).toBeNaN();
       expect(t).not.toBe(5);
       expect(t).not.toBe([5,6]);
    });

    it("Will do string concatenation",()=>{
        const t=_.add("Hello","There");
        expect(t).toEqual("HelloThere");
    });

    it("Will join an array and then do string contenation if one argument is a string",()=>{
        const data = ["Apple","Pie"];
        const t = _.add("Baked ",data);
        expect(t).toEqual("Baked Apple,Pie");
    });
});