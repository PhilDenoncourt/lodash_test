const _ = require("lodash");

describe("after", () => {
    it("Will fire supplied function after certain number of repeated calls",()=>{
        let data = 0;

        const t = _.after(3, () => {
            data++;
            return data;
        });

        expect(t()).toEqual(undefined);
        expect(t()).toEqual(undefined);
        expect(t()).toEqual(1);
    });

    it("Will fire supplied function after number (converted to integer/dropping fractional pieces) is called",()=>{
        let data = 0;

        const t = _.after(3.9999999, () => {
            data++;
            return data;
        });

        expect(t()).toEqual(undefined);
        expect(t()).toEqual(undefined);
        expect(t()).toEqual(1);
    });
});