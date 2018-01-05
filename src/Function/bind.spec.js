const _ = require("lodash");

describe("bind", () => {
    it("returns a wrapper function that uses a different 'this' context", () => {

        const ctx = {
            whereAmI: "ctx"
        }

        function whereAmIBoundTo() {
            this.whereAmI = this.whereAmI || "InATest"; //Take the existing value if present, otherwise return a default.
            return this.whereAmI;
        }

        let t1 = whereAmIBoundTo();
        expect(t1).toEqual("InATest");

        let f2 = _.bind(whereAmIBoundTo, ctx);
        let t2 = f2();
        expect(t2).toEqual("ctx");

        t2 = whereAmIBoundTo(); //Making sure original function isn't altered
        expect(t2).toEqual("InATest");
    });

    it("Doesnt update the length property (how many arguments are defined to the function), unlike the native bind function", () => {
        let ctx = {};

        function calcArea(x, y, z) {
            return x * y * z;
        }

        let f1 = calcArea.bind(ctx);
        expect(f1.length).toEqual(3);

        let f2 = _.bind(calcArea, ctx);
        expect(f2.length).toEqual(0);
    });

    it("Can supply argument placeholders.  Resulting function doesn't require arguments that have placeholders defined", () => {
        let ctx = {};

        function formatCurrency(amount, currencySymbol, placeInFront) {
            if (placeInFront) {
                return `${currencySymbol}${amount}`;
            } else {
                return `${amount}${currencySymbol}`;
            }
        }

        let formatDollar = _.bind(formatCurrency, ctx, _, "$", true);
        let t1 = formatDollar("5.50");
        expect(t1).toEqual("$5.50");

        let format10OfSomeCurrency = _.bind(formatCurrency, ctx, "10.00", _, _);
        let t2 = format10OfSomeCurrency("₯", false);
        expect(t2).toEqual("10.00₯");
    });
});