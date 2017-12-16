const _ = require("lodash");

describe("camelCase",()=>{
   it("Should camelCase a sentence.",()=>{
        const t = _.camelCase("A person who never made a mistake never tried anything new.");
        expect(t).toEqual("aPersonWhoNeverMadeAMistakeNeverTriedAnythingNew");
    });

   it("Should camelCase with some non-alpha characters",()=>{
       const t = _.camelCase("A.person-who*never%made^a_mistake\\never#tried~anything!new.");
       expect(t).toEqual("aPersonWhoNeverMadeAMistakeNeverTriedAnythingNew");
   });

   it("Does seem to remove diacritical marks",()=>{
       const t= _.camelCase("When the car broke down again, it was déjà vu");
       expect(t).toEqual("whenTheCarBrokeDownAgainItWasDejaVu");
   });

   it("Works with non-latin characters",()=>{
        const t=_.camelCase("Азбука -- к мудрости ступенька.");
        expect(t).toEqual("азбукаКМудростиСтупенька");
   });
});