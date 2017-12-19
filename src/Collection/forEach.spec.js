const _ = require("lodash");
const people = require("../../data/people");

describe("forEach", () => {
    let eula;

    beforeEach(() => {
        eula = _.clone(people[8]);
    });

    it("will iterate over an array", () => {
        const t = [];
        _.forEach(eula.tags, (tag) => {
            t.push(tag);
        });

        expect(t).toHaveLength(eula.tags.length);
    });

    it("will iterate through an object", () => {
        const t = {};
        _.forEach(eula, (value, key) => {
            t[key] = value;
        });

        expect(Object.keys(t)).toHaveLength(Object.keys(eula).length);
    });

    it("Will kind of (The numeric fields need to be string named) pretend an object is an array if there is a length field", () => {
        eula.length = 3;
        eula["0"] = "Hey";
        const t = [];
        _.forEach(eula, (x) => {
            t.push(x);
        });

        expect(t).toHaveLength(3);
        expect(t).toEqual(["Hey", undefined, undefined]);
    });

    it("Doesn't make use of generators", () => {
        const myIterable = {};
        myIterable[Symbol.iterator] = function* () {
            var idx = 0;
            while (idx < 50) {
                yield idx++ * 2;
            }
        };
        const t = [];
        _.forEach(myIterable, (i) => {
            t.push(i);
        });
        expect(t).toHaveLength(0);
        expect(t).not.toHaveLength(25);
    });
});