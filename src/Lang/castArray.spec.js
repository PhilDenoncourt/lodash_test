const _ = require("lodash");

describe("castArray", () => {
    it("Will wrap a non-array argument in a single element array", () => {
        const t1 = _.castArray(5);
        expect(t1).toHaveLength(1);
        expect(t1[0]).toEqual(5);

        const data2 = {field: "value"};
        const t2 = _.castArray(data2);
        expect(t2).toHaveLength(1);
        expect(t2[0]).toBe(data2); //Element is not cloned.

        function noop() {
        }

        const t3 = _.castArray(noop);
        expect(t3).toHaveLength(1);
        expect(t3[0]).toBe(noop);
    });

    it("If the argument is an array, it will just return that existing array",()=>{
        const data = [1,2];
        const t = _.castArray(data);
        expect(t).toHaveLength(2);
        expect(t).toBe(data);
    });

    it("Additional arguments are discarded",()=>{
        const t = _.castArray(1,2);
        expect(t).toHaveLength(1);
        expect(t[0]).toBe(1);
    })
});