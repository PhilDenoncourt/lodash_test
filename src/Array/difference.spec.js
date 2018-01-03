const _ = require("lodash");
const people = require("../../data/people");

describe("difference",()=>{
    it("Will return an array of values not in the subsequent argument",()=>{
        const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
        const a2 = ["Apple","Apricot",/*"Avocado"*/,"Banana","Bilberry"];

        const t = _.difference(a1,a2);
        expect(t).toHaveLength(1);
        expect(t[0]).toEqual("Avocado");
    });

    it("Will work not with multiple arguments",()=>{
        const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];

        const t = _.difference(a1,"Apple","Apricot","Banana","Bilberry");
        expect(t).toHaveLength(5);
    });

    it("Will not check nested arrays",()=>{
        const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
        const a2 = ["Apple","Apricot","Avocado",
            ["Banana","Bilberry"]
        ];
        const t = _.difference(a1,a2);
        expect(t).toHaveLength(2);
    });

    it("Compares by object",()=>{
        const a1 = people.slice(0,5);
        const a2 = people.slice(0,5);
        a2[0].active = !a2[0].active;
        
        const t= _.difference(a1,a2);
        expect(t).toHaveLength(0);
    });

    it("Will not compare to cloned values, as the comparison is by reference (SameValueZero)",()=>{
       const a1 = people.slice(0,5);
       const a2 = _.cloneDeep(a1);

       const t= _.difference(a1,a2);
       expect(t).toHaveLength(5);
    });
});