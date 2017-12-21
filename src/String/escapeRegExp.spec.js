const _ = require("lodash");

describe("escapeRegExp", () => {
    it("Will escape bracket characters used in regular expressions",()=>{
       const t = _.escapeRegExp("({[Text]})");
       expect(t).toEqual("\\(\\{\\[Text\\]\\}\\)");
    });

    it("Will escape other special characters used in regular expressions",()=>{
       const t = _.escapeRegExp("^$\\.*+?|");
       expect(t).toEqual("\\^\\$\\\\\\.\\*\\+\\?\\|");
    });

    it("Does not escape linefeeds or tabs",()=>{
        const t = _.escapeRegExp("\t\r\n");
        expect(t).toEqual("\t\r\n");
    });

    it("Will work with numbers",()=>{
        const t = _.escapeRegExp(2.5);
        expect(t).toEqual("2\\.5");
    })
});