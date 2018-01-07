const _ = require("lodash");
const people = require("../../data/people");

const evans = people[117];
const ester = people[123];

describe("conforms",()=>{
    it("returns true or false, depending on all the property values returning true from the functions",()=>{
        const brownEyeMale = {
            gender:(g)=>{return g==="male"},
            eyeColor:(e)=>{return e==="brown"},
        };

        const f1 = _.conforms(brownEyeMale);
        expect(f1(evans)).toBeTruthy();
        expect(f1(ester)).toBeFalsy();
    });

    it("If property isn't in object, function isn't called and object doesn't 'conform'",()=>{
        let favoriteMovieFunctionInvoked=false;

        const brownEyeMaleThatLikesGoodStuff = {
            gender:(g)=>{return g==="male"},
            eyeColor:(e)=>{return e==="brown"},
            favoriteMovie:(m)=>{
                favoriteMovieFunctionInvoked = true;
                return m==="The Empire Strikes Back";
            },
        };

        const f1 = _.conforms(brownEyeMaleThatLikesGoodStuff);
        expect(f1(evans)).toBeFalsy();
        expect(favoriteMovieFunctionInvoked).toBeFalsy();
    });

    it("The conforming object must be all functions",()=>{
        const brownEyeMale = {
            gender:(g)=>{return g==="male"},
            eyeColor:(e)=>{return e==="brown"},
            age:33,
        };

        const f1 = _.conforms(brownEyeMale);
        expect(()=>f1(evans)).toThrow(TypeError);
    });
})