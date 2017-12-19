const _ = require("lodash");
const people = require("../../data/people");

describe("bindAll",()=>{
    let lindsey;
    let fakeContext;
    beforeEach(()=>{

        jest.useFakeTimers();

        lindsey = _.clone(people[1]);
        lindsey.celebrateBirthday = function() {
            this.age = (this.age || 0) + 1;
        }
        lindsey.chargeFee = function(amount) {
            this.balance = (this.balance || 0) - amount;
        }

        fakeContext={};
    });

    it("Binding to an alternative context causes undesired behavior",()=>{
        lindsey.celebrateBirthday = lindsey.celebrateBirthday.bind(fakeContext);
        lindsey.chargeFee = lindsey.chargeFee.bind(fakeContext);

        lindsey.celebrateBirthday();
        lindsey.chargeFee(100);

        expect(lindsey.age).toEqual(40);
        expect(lindsey.balance).toEqual(3638.68);
        expect(fakeContext.age).toEqual(1);
        expect(fakeContext.balance).toEqual(-100);
    });

    it("But if bindAll is used, we can rely that 'this' will always be itself.",()=>{
        _.bindAll(lindsey,['celebrateBirthday','chargeFee']);

        lindsey.celebrateBirthday = lindsey.celebrateBirthday.bind(fakeContext);
        lindsey.chargeFee = lindsey.chargeFee.bind(fakeContext);

        lindsey.celebrateBirthday();
        lindsey.chargeFee(100);

        expect(fakeContext.age).toBeUndefined();
        expect(fakeContext.balance).toBeUndefined();
        expect(lindsey.age).toEqual(41);
        expect(lindsey.balance).toEqual(3538.68);

    });

    it("If you omit methodnames, nothing is done.",()=>{
        _.bindAll(lindsey);

        lindsey.celebrateBirthday = lindsey.celebrateBirthday.bind(fakeContext);
        lindsey.chargeFee = lindsey.chargeFee.bind(fakeContext);

        lindsey.celebrateBirthday();
        lindsey.chargeFee(100);

        expect(lindsey.age).toEqual(40);
        expect(lindsey.balance).toEqual(3638.68);
        expect(fakeContext.age).toEqual(1);
        expect(fakeContext.balance).toEqual(-100);

    });
});