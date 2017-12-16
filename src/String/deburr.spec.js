const _ = require("lodash");

describe("deburr",()=>{
   it("Will remove diacritical marks",()=>{
       const t = _.deburr("épée");
       expect(t).toEqual("epee");
   });

   it("Does not remove non-anglo marks",()=>{
       const t= _.deburr("йогурт");
       expect(t).toEqual("йогурт");
   });

    it("Joins then deburrs when array is argument",()=>{
        const t = _.deburr(["épée","humuhumunukunukuāpuaʻa"]);
        expect(t).toEqual("epee,humuhumunukunukuapuaʻa");
    });
});