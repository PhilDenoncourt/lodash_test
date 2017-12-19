const _ = require("lodash");

describe("concat",()=>{
   it("Creates an array combining all that were supplied",()=>{
       const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
       const a2 = ["Blackberry","Blackcurrant","Blueberry","Boysenberry"];

       const t = _.concat(a1,a2);

       expect(t).toHaveLength(9);
       expect(a1).toHaveLength(5);
       expect(a2).toHaveLength(4);
   });

   it("Will also add values specified as arguments",()=>{
       const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
       const t = _.concat(a1,"Blackberry","Blackcurrant","Blueberry","Boysenberry");

       expect(t).toHaveLength(9);
   });

   it("Returns an empty array if no arguments are supplied",()=>{
       const t = _.concat();
       expect(t).toHaveLength(0);
       expect(t).toEqual([]);
   });

   it("Will not flatten nested arrays",()=>{
       const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
       const a2 = ["Blackberry","Blackcurrant","Blueberry","Boysenberry",["Crab apples","Currant","Cherry","Cherimoya"]];

       const t = _.concat(a1,a2);

       expect(t).not.toHaveLength(13);
       expect(t).toHaveLength(10);
   });

   it("Will not expand objects",()=>{
       const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
       const o1 = {"Blackberry":0,"Blackcurrant":1,"Blueberry":2,"Boysenberry":3};

       const t = _.concat(a1,o1);
       expect(t).toHaveLength(6);
       expect(t).not.toHaveLength(9);
       expect(t).not.toHaveLength(13);
   });

   it("Will not compact sparse arrays",()=>{
       const a1 = ["Apple","Apricot","Avocado","Banana","Bilberry"];
       const a2 = [,,,"Blackberry","Blackcurrant","Blueberry","Boysenberry"];

       const t = _.concat(a1,a2);

       expect(t).toHaveLength(12);

   });
});