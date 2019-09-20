(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[16],{317:function(e,t,l){e.exports={Table:"styles_Table__2tf1x",Table1:"styles_Table1__2Liu2",Col2:"styles_Col2__1vFtl",Col3:"styles_Col3__3VxyS",Col4:"styles_Col4__27qnj",Td1:"styles_Td1__AfMRn",Td4:"styles_Td4__23_G7",Table2:"styles_Table2__p9Ysn"}},33:function(e,t,l){"use strict";var a=l(0),n=l.n(a),s=l(34),r=l.n(s),c=Object(a.memo)(function(e){var t=e.title,l=e.questions,a=e.children;return n.a.createElement("div",{className:r.a.Container},n.a.createElement("h2",{className:r.a.Title},t),n.a.createElement("div",{className:r.a.Content},a),n.a.createElement("div",{className:r.a.Questions},n.a.createElement("h3",null,"Questions"),n.a.createElement("div",null,l.map(function(e,t){var l=e.question,a=e.answer,s=e.references;return n.a.createElement("details",{key:t},n.a.createElement("summary",{className:r.a.Question},n.a.createElement("span",{className:r.a.Index},t+1,".")," ",l),n.a.createElement("div",{className:r.a.Answer},a),s&&s.length&&n.a.createElement("div",{className:r.a.References},n.a.createElement("h4",null,"References"),n.a.createElement("ol",null,s.map(function(e){var t=e.name,l=e.url;return n.a.createElement("li",{key:l},n.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},t))}))))}))))});c.displayName="Question",t.a=c},339:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),s=l(37),r=l.n(s),c=l(33),o=l(35),i=[{question:"Truncate long text in table column and replace with ellipsis?",answer:n.a.createElement("div",null,n.a.createElement("p",null,"Case 1: Other columns are fixed-width"),n.a.createElement(o.a,{language:"scss"},"td {\n    white-space: nowrap;\n    \n  &.Td1 {\n    max-width: 0; // this column will take the remaining width\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  \n  &.Td4 {\n    max-width: 100px; // this column will take 100px\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}"),n.a.createElement("p",null,"Case 2: Other columns are flexible-width"),n.a.createElement(o.a,{language:"scss"},"td {\n    white-space: nowrap;\n    \n  &.Td1 {\n    width: 100%;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}")),references:[{name:"[CSS-TRICKS] Truncate String with Ellipsis",url:"https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/"},{name:"[CSS-TRICKS] text-overflow",url:"https://css-tricks.com/almanac/properties/t/text-overflow/"},{name:"[MDN] text-overflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"}]}],m=l(317),u=l.n(m);l.d(t,"TextEllipsis1Impl",function(){return d});var d=function(){return n.a.createElement(c.a,{title:"Text Ellipsis 1",questions:i},n.a.createElement("table",{className:r()(u.a.Table,u.a.Table1)},n.a.createElement("colgroup",null,n.a.createElement("col",{className:u.a.Col1}),n.a.createElement("col",{className:u.a.Col2}),n.a.createElement("col",{className:u.a.Col3}),n.a.createElement("col",{className:u.a.Col4})),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Col 1"),n.a.createElement("th",null,"Col 2"),n.a.createElement("th",null,"Col 3"),n.a.createElement("th",null,"Col 4"))),n.a.createElement("tbody",null,[1,2,3,4,5].map(function(e){return n.a.createElement("tr",{key:e},n.a.createElement("td",{className:u.a.Td1},"This a very long text and a part of it should be truncated and replaced with ellipsis or else the layout is broken."),n.a.createElement("td",null,"This is a small text."),n.a.createElement("td",null,"This is a small text."),n.a.createElement("td",{className:u.a.Td4},"This is another quite long text."))}))),n.a.createElement("table",{className:r()(u.a.Table,u.a.Table2)},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Column 1"),n.a.createElement("th",null,"Col 2"),n.a.createElement("th",null,"Column Header 3"),n.a.createElement("th",null,"4"),n.a.createElement("th",null,"C5"),n.a.createElement("th",null,"#6"),n.a.createElement("th",null,"No. 7"))),n.a.createElement("tbody",null,[1,2,3,4,5].map(function(e){return n.a.createElement("tr",{key:e},n.a.createElement("td",{className:u.a.Td1},"This a very long text and a part of it should be truncated and replaced with ellipsis or else the layout is broken."),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",null))}))))},E=Object(a.memo)(d);E.displayName="TextEllipsis1";t.default=E},34:function(e,t,l){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},35:function(e,t,l){"use strict";var a=l(0),n=l.n(a),s=l(37),r=l.n(s),c=l(349),o=l(348),i=l(36),m=l.n(i),u=Object(a.memo)(function(e){var t=e.className,l=e.children,a=e.style,s=void 0===a?o.a:a,i=e.language;return n.a.createElement("div",{className:r()(m.a.Code,t)},n.a.createElement(c.a,{language:i,style:s},l))});u.displayName="Code",t.a=u},36:function(e,t,l){e.exports={Code:"styles_Code__2Axvp"}}}]);
//# sourceMappingURL=16.ccb5eaee.chunk.js.map