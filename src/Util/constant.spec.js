const _ = require("lodash");

describe("constant",()=>{
    it("returns a function that returns your constant",()=>{
       const d = "my constant";
       const t = _.constant(d);

       expect(t()).toEqual(d);
    });

    it("It's not really a constant, you can still make changes after creating the function (i.e. it doesn't clone your argument)",()=>{
        const d = {
            name:"Patricia"
        }

        const t = _.constant(d);

        d.name = "Margaret";
        expect(t()).toEqual({
            name:"Margaret"
        });
    });
});