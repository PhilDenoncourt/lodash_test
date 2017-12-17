const _ = require("lodash");

describe("endsWith", () => {
    it("Checks to see that a string ends with another string", () => {
        const t = _.endsWith("Odonatology", "ology");
        expect(t).toBeTruthy();
    });

    it("Checks up a certain point in the string", () => {
        const t1 = _.endsWith("Myrmecology is the study of ants", "ology", 11);
        expect(t1).toBeTruthy();

        const t2 = _.endsWith("Myrmecology is the study of ants", "ology", 6);
        expect(t2).toBeFalsy();
    });

    it("Doesn't trim the string to search", () => {
        const t = _.endsWith("Orthopterology      ", "ology");
        expect(t).toBeFalsy();
    });

    it("Works with symbols, but it just calls toString on the symbol", () => {
        if (Symbol) {
            const t = _.endsWith(Symbol("Cynology"), "ology)");  //Compares Symbol(Cynology)
            expect(t).toBeTruthy();
        }
    });

    it("Works with numbers", () => {
        const t1 = _.endsWith("The outstanding balance is $100.52", 52);
        expect(t1).toBeTruthy();

        const t2 = _.endsWith(299792458, "458");
        expect(t2).toBeTruthy();

        const t3 = _.endsWith(6.022140857e23, "e+23");
        expect(t3).toBeTruthy();
    });

});