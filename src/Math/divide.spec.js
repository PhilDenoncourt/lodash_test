const _ = require("lodash");

describe("divide",()=>{
   it("Will divide two numbers",()=>{
       const t = _.divide(32,4);
       expect(t).toBe(8);
   });

   describe("Its not obvious why you'd use a function for division.  It does some things different than the native operand.",()=>{
       it("Returns 1 if both arguments are undefined",()=>{
          const t1 = _.divide(undefined, undefined);
          expect(t1).toEqual(1);
       });

       it("Returns the non-undefined argument if the other is undefined",()=>{
           const t1 = _.divide(100,undefined);
           expect(t1).toEqual(100);

           const t2 = _.divide(undefined,100);
           expect(t2).toEqual(100);
       });

       it("Returns NaN for arrays, objects, functions",()=>{
           const t1 = _.divide([1,2],"1");
           expect(t1).toBeNaN();

           const t2 = _.divide({a:1,b:2},"1");
           expect(t2).toBeNaN();

           const t3 = _.divide(()=>100,1);
           expect(t3).toBeNaN();
       })
   })
});