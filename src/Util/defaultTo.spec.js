const _ = require("lodash");

describe("defaultTo",()=>{
    it("Just returns a value if the first argument is null",()=>{
        const t = _.defaultTo(null, "A Default");

        expect(t).toEqual("A Default");
    });

    it("Also, if undefined is passed in",()=>{
       const t= _.defaultTo(undefined,"A Default");
        expect(t).toEqual("A Default");
    });

    it("But if something else is passed in, the first argument is returned",()=>{
       const t1 = _.defaultTo(false,"A Default");
       expect(t1).toEqual(false);

       const t2 = _.defaultTo("","A Default");
       expect(t2).toEqual("");

       const t3 = _.defaultTo(0,"A Default");
       expect(t3).toEqual(0);

       function noop(){}
       const t4 = _.defaultTo(noop,"A Default");
       expect(t4).toBe(noop);
    });
});