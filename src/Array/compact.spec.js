const _ = require("lodash");

describe("compact", () => {
    it("Will remove falsy values from an array", () => {
        const data = [0, false, "", null, undefined, NaN];
        const t = _.compact(data)
        expect(t).toHaveLength(0);
    });

    it("Doesn't call functions in the array", () => {
        function returnsFalse() {
            return false;
        }

        const data = [returnsFalse];
        const t = _.compact(data);
        expect(t).toHaveLength(1);
    });

    it("Will transform a string into an array, but not remove any elements because the characters are not falsy", () => {
        const data = "George had 0 pies";
        const t = _.compact(data);

        expect(t).toHaveLength(data.length);
    });

    it("returns an empty array with an object", () => {
        const data = {
            x: false,
            y: true,
            "": true,
        }

        const t = _.compact(data);
        expect(t).toHaveLength(0);
    });
});