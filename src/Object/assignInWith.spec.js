const _ = require("lodash");

describe("assignInWith", () => {
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
        const t = _.assignInWith({}, object1);
        expect(t).toEqual({
            a: 2,
            b: "A value"
        });
    });

    it("But if the last argument is a function, it will use that to do the assignment",()=>{
        function upperCaseCustomizer(objValue, srcValue, key, object, source) {
            return (srcValue + "").toUpperCase();
        }

        const t = _.assignInWith({}, object1,upperCaseCustomizer);
        expect(t).toEqual({
            a: "2",
            b: "A VALUE"
        });
    });

    it("If the function returns undefined, it will use the typical assign behavior",()=>{
       function upperCaseStringCutomizer(objValue, srcValue, key, object, source) {
           if (_.isString(srcValue)) {
               return srcValue.toUpperCase();
           }

           return undefined;
       }
        const t = _.assignInWith({}, object1,upperCaseStringCutomizer);
        expect(t).toEqual({
            a: 2,
            b: "A VALUE"
        });
    });

    it("Does mutate the object",()=>{
        const s = {};
        const t = _.assignInWith(s, object1, object2, object3);
        expect(t).toBe(s);
        expect(s.c).toEqual("Another value");
    });

    it("*Will* copy prototype members", () => {
        function data() {
            this.a = 3;
            this.b = "Text";
        }

        data.prototype.c = true;
        const d = new data();
        const t = _.assignInWith({}, d);

        expect(t).toEqual({
            a: 3,
            b: "Text",
            c:true,
        });
        expect(d.c).toBeTruthy();
    })
});