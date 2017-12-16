const _ = require("lodash");
const people = require("../../data/people");

describe("chunk", () => {
    it("Should package an array into chunks of 1 by default", () => {
        const data = people[0].tags;
        const t = _.chunk(data);

        expect(t).toHaveLength(7);
        t.forEach(t1 => {
            expect(t1).toHaveLength(1);
        });
    });

    it("Should package an array into chunks of specified size", () => {
        const data = [1, 2, 3, 4, 5, 6];
        const t = _.chunk(data, 3);

        expect(t).toHaveLength(2);
        expect(t[0]).toHaveLength(3);
        expect(t[1]).toHaveLength(3);
    });

    it("Will package strings", () => {
        const t = _.chunk("100101102103", 3);
        expect(t).toHaveLength(4);
        expect(t[0]).toEqual(["1", "0", "0"]);
        expect(t[1]).toEqual(["1", "0", "1"]);
        expect(t[2]).toEqual(["1", "0", "2"]);
        expect(t[3]).toEqual(["1", "0", "3"]);
    });
});