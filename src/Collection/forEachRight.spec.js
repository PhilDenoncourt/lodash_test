const _ = require("lodash");
const people = require("../../data/people");

describe("forEachRight",()=>{
    let shawn;

    beforeEach(() => {
        shawn = _.clone(people[97]);
    });

    it("will iterate over an array, from end to beginning", () => {
        const t = [];
        _.forEachRight(shawn.tags, (tag) => {
            t.push(tag);
        });

        expect(t).toHaveLength(shawn.tags.length);
        expect(t).toEqual(
            _.reverse(shawn.tags)
        );
    });

    it("will iterate through an object in reverse order", () => {
        const t = {};
        let lastKey;
        _.forEachRight(shawn, (value, key) => {
            t[key] = value;
            lastKey=key;
        });

        expect(Object.keys(t)).toHaveLength(Object.keys(shawn).length);
        expect(lastKey).toEqual("_id");
    });

    it("Will kind of (The numeric fields need to be string named) pretend an object is an array if there is a length field", () => {
        shawn.length = 3;
        shawn["0"] = "Hey";
        const t = [];
        _.forEachRight(shawn, (x) => {
            t.push(x);
        });

        expect(t).toHaveLength(shawn.length);
        expect(t).toEqual([undefined, undefined, "Hey"]);
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
        _.forEachRight(myIterable, (i) => {
            t.push(i);
        });
        expect(t).toHaveLength(0);
        expect(t).not.toHaveLength(25);
    });
});