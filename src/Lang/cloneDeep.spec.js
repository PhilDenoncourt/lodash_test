const _ = require("lodash");
const people = require("../../data/people");
describe("cloneDeep",()=>{
    it("Creates a deep (recursive) clone of an object",()=>{
        const jennie = people[68];
        const t = _.cloneDeep(jennie);

        expect(t).not.toBe(jennie);
        expect(t).toEqual(jennie);
        expect(t.friends[0]).not.toBe(jennie.friends[0]);
        expect(t.friends).not.toBe(jennie.friends);
    });

    it("Cannot clone (deeply) error objects",()=>{
        const e = new Error("This is an error");
        const t = _.cloneDeep(e);

        expect(t).toEqual({});
        expect(t).not.toEqual(e);
    });

    it("Cannot clone (deeply) a function",()=>{
        const f = function() {};
        const t = _.cloneDeep(f);
        expect(t).toEqual({});
    });

    it("Can clone symbols, but it copies by reference - at least in this version of node",()=>{
        const s = Symbol("A Symbol");
        const t = _.cloneDeep(s);

        expect(t).toEqual(s);
        expect(t).toBe(s);
    });

    it("Will clone arrays",()=>{
        const a = [1,2,3,[4,5,6]];
        const t = _.cloneDeep(a);

        expect(t).not.toBe(a);
        expect(t).toHaveLength(a.length);
        expect(t).toEqual(a);
        expect(t[3]).not.toBe(a[3]);
        expect(t[3]).toEqual(a[3]);
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