const _ = require("lodash");

describe("capitalize",()=>{
   it("Should capitalize the first character of the string",()=>{
       const t = _.capitalize("george");
       expect(t).toEqual("George");
   });

   it("Only capitalizes the first character of a string with multiple sentences",()=>{
       const t = _.capitalize("houston, tranquillity base here. the eagle has landed.");
       expect(t).toEqual("Houston, tranquillity base here. the eagle has landed.");
   });

   it("Only capitalizes the first element of an array",()=>{
       const t = _.capitalize(["george","sara"]);
       expect(t).toEqual("George,sara");
   });

   it("Doesn't trim before capitalizing",()=>{
       const t = _.capitalize("     george");
       expect(t).toEqual("     george");
   });
});