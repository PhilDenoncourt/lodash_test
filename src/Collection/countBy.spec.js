const _ = require("lodash");
const people = require("../../data/people");

describe("countBy",()=>{


    it("Should count the number of occurrences for each eye color",()=>{
       const t= _.countBy(people,"eyeColor");
       expect(t).toEqual({"blue": 54, "brown": 65, "green": 47});
    });

    it("Groups numbers and similar strings together",()=>{
        const data = [
            {field1:"24"},
            {field1:24},
        ]
        const t=_.countBy(data,"field1");
        expect(t).toEqual({"24":2});
    });
    it("Groups numbers and similar strings together, but not dates",()=>{
        const data = [
            {field1:"24"},
            {field1:24},
            {field1:new Date(24)}
        ]
        const t=_.countBy(data,"field1");
        expect(t["24"]).toEqual(2);
    });

    it("Groups symbol using symbol instance as key",()=>{
        const s = Symbol(24);
        const data = [
            {field1:s},
        ]
        const t=_.countBy(data,"field1");
        expect(t[s]).toEqual(1);
    });

    it("Groups objects as key",()=>{
        const nestedData = {
            nestedField1:"A Valeue"
        };

       const data = [
           {field1:nestedData}
       ];
       const t = _.countBy(data,"field1");
       expect(t[nestedData]).toEqual(1);
    });
});