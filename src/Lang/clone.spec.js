const _ = require("lodash");
const people = require("../../data/people");

describe("clone",()=>{
    it("Creates a shallow clone of an object",()=>{
       const valeria = people[46];
       const t = _.clone(valeria);

       expect(t).not.toBe(valeria);
       expect(t).toEqual(valeria);
       expect(t.friends[0]).toBe(valeria.friends[0]);
       expect(t.friends).toBe(valeria.friends);
    });

    it("Cannot clone error objects",()=>{
        const e = new Error("This is an error");
        const t = _.clone(e);

        expect(t).toEqual({});
        expect(t).not.toEqual(e);
    });

    it("Cannot clone a function",()=>{
       const f = function() {};
       const t = _.clone(f);
       expect(t).toEqual({});
    });

    it("Can clone symbols, but it copies by reference - at least in this version of node",()=>{
        const s = Symbol("A Symbol");
        const t = _.clone(s);

        expect(t).toEqual(s);
        expect(t).toBe(s);
    });

    it("Will clone arrays",()=>{
        const a = [1,2,3];
        const t = _.clone(a);

        expect(t).not.toBe(a);
        expect(t).toHaveLength(a.length);
        expect(t).toEqual(a);
    });

    it("Will clone typed arrays",()=>{
        const a = Uint16Array.from([1582, 17245, 42417, 58826, 65236]);
        const t = _.clone(a);

        expect(t).not.toBe(a);
        expect(t).toHaveLength(a.length);
        expect(t).toEqual(a);
        expect(t instanceof Uint16Array).toBeTruthy();
    })
});