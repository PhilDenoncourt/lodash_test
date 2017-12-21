const _ = require("lodash");

describe("assignIn", () => {
    const object1 = {
        a: 2,
        b: "A value"
    };

    const object2 = {
        b: 4,
        c: new Date(25)
    }

    const object3 = {
        c: "Another value",
        d: object1,
    }

    it("Will assign properties to an existing object from source objects", () => {
        const t = _.assignIn({}, object1);
        expect(t).toEqual({
            a: 2,
            b: "A value"
        });
    });

    it("Will overwrite fields in order that they are specified", () => {
        const t = _.assignIn({}, object1, object2, object3);
        expect(t.b).toBe(4);
        expect(t.c).toEqual("Another value");
    });

    it("Does not clone nested fields", () => {
        const t = _.assignIn({}, object3);
        expect(t.d).toBe(object1);
    });

    it("Uses index of array as key", () => {
        const t = _.assignIn({}, [4, 5, 6]);
        expect(t).toEqual({"0": 4, "1": 5, "2": 6});
    });

    it("*Will* copy prototype members", () => {
        function data() {
            this.a = 3;
            this.b = "Text";
        }

        data.prototype.c = true;
        const d = new data();
        const t = _.assignIn({}, d);

        expect(t).toEqual({
            a: 3,
            b: "Text",
            c:true,
        });
        expect(d.c).toBeTruthy();
    })
});