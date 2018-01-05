const _ = require("lodash");

describe("before", () => {
    it("Will only let a wrapped function be called less than n (being 3 in this test) times", () => {
        let x = 0;

        function incX() {
            x++;
        }

        let t = _.before(3, incX);

        t(); //1
        t(); //2
        t(); //3
        expect(x).toBe(2);
    });

    it("Will round down if you supply a non-integer argument",() => {
        let x = 0;

        function incX() {
            x++;
        }

        let t = _.before(3.99, incX);

        t(); //1
        t(); //2
        t(); //3
        expect(x).toBe(2);
    });

    it("Will run zero times if you supply a non-numerical value",() => {
        let x = 0;

        function incX() {
            x++;
        }

        let t = _.before("bubble gum", incX);

        t(); //1
        t(); //2
        t(); //3
        expect(x).toBe(0);
    });

    it("Will return the last value returned when limit is exceeded",()=>{
        function timesTwo(v) {
            return v << 1;
        }

        let f = _.before(3, timesTwo);
        let t = f(2);
        t=f(4);
        t=f(12);

        expect(t).toBe(8);
    });
});