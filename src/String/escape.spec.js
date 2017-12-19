const _ = require("lodash");

describe("escape",()=>{
   it("Will escape certain characters to be used in HTML markup",()=>{
       const t = _.escape("<Julie & Jennette can't \"treat\" minor colds.>");
       expect(t).toEqual("&lt;Julie &amp; Jennette can&#39;t &quot;treat&quot; minor colds.&gt;")
   });

   it("Does not escape minor characters",()=>{
      const t= _.escape("It is 21° outside with a variance of ±2°.");
      expect(t).toEqual("It is 21° outside with a variance of ±2°.");
      expect(t).not.toEqual("It is 21&deg; outside with a variance of &plusmn;2&deg;.")
   });

   it("Does not escape unicode for UTF-8 documents",()=>{
       const t = _.escape("ሰላም");
       expect(t).toEqual("ሰላም");
       expect(t).not.toEqual("&#1230;&#120B;&#121D;")
   });

   it("Joins arrays then escapes them",()=>{
      const data = ["<html>","<body/>","</html>"];
      const t = _.escape(data);
      expect(t).toEqual("&lt;html&gt;,&lt;body/&gt;,&lt;/html&gt;");
   });

   it("Escapes the source of a function when it is supplied to it",()=>{
      function x(){return "<html>";}
      const t= _.escape(x);

      expect(t).toEqual("function x() {return &quot;&lt;html&gt;&quot;;}");
   });
});