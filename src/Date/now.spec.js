const _ = require("lodash");

describe("now",()=>{
   it("Returns number of milliseconds since the Unix Epoch",()=>{
      const t = _.now();
      expect(t).toBeGreaterThan(1513534477);
   });

   it("We can substitute using a mocked version",()=>{
       function mockedNow() {
           return  -14159025;
       }
       
       const _mocked = _.runInContext({
           Date:{
               now:mockedNow
           }
       });

       const t = _mocked.now();
       expect(t).toEqual(-14159025);
   });
});