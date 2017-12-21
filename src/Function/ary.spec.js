const _ = require("lodash");

describe("ary", () => {
    let x, y ,z, additional;
    function simple(a,b,c) {
        x=a;y=b;z=c;
        const args = Array.from(arguments);
        additional = args.slice(3);
    }

    beforeEach(()=>{
        x=undefined;
        y=undefined;
        z=undefined;
        additional=undefined
    });

    it("will create a function restricting number of arguments sent", () => {
        const a1 = _.ary(simple,1);
        a1(1,2,3);
        expect(x).toBe(1);
        expect(y).toBeUndefined();
        expect(z).toBeUndefined()

        const a2 = _.ary(simple,2);
        a2(1,2,3);
        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(z).toBeUndefined()

        const a3 = _.ary(simple,3);
        a3(1,2,3);
        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(z).toBe(3);
    });

    it("Will not restrict arguments if no function length is supplied",()=>{
        const a3 = _.ary(simple);
        a3(1,2,3);
        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(z).toBe(3);
    });

    it("Will pass in more arguments than are formally defined if we specify the additional number",()=>{
        const a3 = _.ary(simple,4);
        a3(1,2,3,4);
        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(z).toBe(3);
        expect(additional).toEqual([4]);
    });

});