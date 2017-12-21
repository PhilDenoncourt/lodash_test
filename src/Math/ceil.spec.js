const _ = require("lodash");

describe("ceil",()=>{
    it("Will return smallest integer greater than or equal to supplied value when no arguments are supplied",()=>{
        const t1 = _.ceil(5.4);
        expect(t1).toBe(6);

        const t2 = _.ceil(5.2);
        expect(t2).toBe(6);

        const t3 = _.ceil(5.5);
        expect(t3).toBe(6);

        const t4 = _.ceil(5);
        expect(t4).toBe(5);
    });

    it("Will remove digits of significance",()=>{
        const t1 = _.ceil(1111,-2);
        expect(t1).toBe(1200);

        const t2 = _.ceil(8.3144598, 4);
        expect(t2).toBe(8.3145);
    });
})