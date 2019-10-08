(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[14],{133:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(129),s=a(38),c=a(124),o=a(25),i=a(121),m=a(122),u=a(123),d=a(39),p=a(65),E=a(47),h=Object(p.a)((function(e){return{Question:{fontWeight:500},Answer:{marginTop:e.spacing(1.5),padding:0,fontSize:14,backgroundColor:E.a[50],border:"1px solid ".concat(E.a[400]),borderRadius:6,"& p":{padding:e.spacing(0,2.5)},"& ol,ul":{margin:e.spacing(1.5,0)},"& img":{maxWidth:"100%"}},References:{margin:e.spacing(3,0,0),"& ol":{marginTop:e.spacing(1)},"& li":{fontSize:14,fontWeight:500,marginBottom:e.spacing(1)}}}})),f=Object(n.memo)((function(e){var t=e.index,a=e.question,n=e.answer,c=e.references,p=h(),E=Object(d.a)(!1),f=Object(o.a)(E,2),g=f[0],w=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{button:!0,onClick:w},l.a.createElement(m.a,{classes:{primary:p.Question}},t,". ",a)),l.a.createElement(u.a,{in:g,timeout:"auto"},l.a.createElement(r.a,{className:p.Answer},n),!!c&&c.length&&l.a.createElement(r.a,{className:p.References},l.a.createElement(s.a,{variant:"h4"},"References"),l.a.createElement("ol",null,c.map((function(e){var t=e.name,a=e.url;return l.a.createElement("li",{key:a},l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))}))))))}));f.displayName="QuestionItem";var g=f,w=Object(p.a)((function(e){return{Container:{marginTop:e.spacing(4)},Content:{marginTop:e.spacing(2.5)},Questions:{marginTop:e.spacing(4),"& code":{fontFamily:"'Courier New', Courier, monospace",fontSize:14,fontWeight:600,color:"rgb(219, 104, 27)"}}}})),b=Object(n.memo)((function(e){var t=e.title,a=e.questions,n=e.children,o=w();return l.a.createElement(r.a,{className:o.Container},l.a.createElement(s.a,{variant:"h2"},t),l.a.createElement(r.a,{className:o.Content},n),l.a.createElement(r.a,{className:o.Questions},l.a.createElement(s.a,{variant:"h3"},"Questions"),l.a.createElement(r.a,null,l.a.createElement(c.a,null,a.map((function(e,t){return l.a.createElement(g,Object.assign({key:t,index:t+1},e))}))))))}));b.displayName="QuestionPage";t.a=b},134:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(136),s=a.n(r),c=a(464),o=a(450),i=a(135),m=a.n(i),u=Object(n.memo)((function(e){var t=e.className,a=e.children,n=e.style,r=void 0===n?o.a:n,i=e.language;return l.a.createElement("div",{className:s()(m.a.Code,t)},l.a.createElement(c.a,{language:i,style:r},a))}));u.displayName="Code",t.a=u},135:function(e,t,a){e.exports={Code:"styles_Code__2Axvp"}},407:function(e,t,a){e.exports={Table:"styles_Table__2tf1x",Table1:"styles_Table1__2Liu2",Col2:"styles_Col2__1vFtl",Col3:"styles_Col3__3VxyS",Col4:"styles_Col4__27qnj",Td1:"styles_Td1__AfMRn",Td4:"styles_Td4__23_G7",Table2:"styles_Table2__p9Ysn"}},482:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(136),s=a.n(r),c=a(133),o=a(134),i=[{question:"Truncate long text in table column and replace with ellipsis?",answer:l.a.createElement("div",null,l.a.createElement("p",null,"Case 1: Other columns are fixed-width"),l.a.createElement(o.a,{language:"scss"},"td {\n    white-space: nowrap;\n\n  &.Td1 {\n    max-width: 0; // this column will take the remaining width\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &.Td4 {\n    max-width: 100px; // this column will take 100px\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}"),l.a.createElement("p",null,"Case 2: Other columns are flexible-width"),l.a.createElement(o.a,{language:"scss"},"td {\n    white-space: nowrap;\n\n  &.Td1 {\n    width: 100%;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}")),references:[{name:"[CSS-TRICKS] Truncate String with Ellipsis",url:"https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/"},{name:"[CSS-TRICKS] text-overflow",url:"https://css-tricks.com/almanac/properties/t/text-overflow/"},{name:"[MDN] text-overflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"}]}],m=a(407),u=a.n(m);a.d(t,"TextEllipsis1Impl",(function(){return d}));var d=function(){return l.a.createElement(c.a,{title:"Text Ellipsis 1",questions:i},l.a.createElement("table",{className:s()(u.a.Table,u.a.Table1)},l.a.createElement("colgroup",null,l.a.createElement("col",{className:u.a.Col1}),l.a.createElement("col",{className:u.a.Col2}),l.a.createElement("col",{className:u.a.Col3}),l.a.createElement("col",{className:u.a.Col4})),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Col 1"),l.a.createElement("th",null,"Col 2"),l.a.createElement("th",null,"Col 3"),l.a.createElement("th",null,"Col 4"))),l.a.createElement("tbody",null,[1,2,3,4,5].map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",{className:u.a.Td1},"This a very long text and a part of it should be truncated and replaced with ellipsis or else the layout is broken."),l.a.createElement("td",null,"This is a small text."),l.a.createElement("td",null,"This is a small text."),l.a.createElement("td",{className:u.a.Td4},"This is another quite long text."))})))),l.a.createElement("table",{className:s()(u.a.Table,u.a.Table2)},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Column 1"),l.a.createElement("th",null,"Col 2"),l.a.createElement("th",null,"Column Header 3"),l.a.createElement("th",null,"4"),l.a.createElement("th",null,"C5"),l.a.createElement("th",null,"#6"),l.a.createElement("th",null,"No. 7"))),l.a.createElement("tbody",null,[1,2,3,4,5].map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",{className:u.a.Td1},"This a very long text and a part of it should be truncated and replaced with ellipsis or else the layout is broken."),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))})))))},p=Object(n.memo)(d);p.displayName="TextEllipsis1";t.default=p}}]);
//# sourceMappingURL=css__TextEllipsis1.6714bade.chunk.js.map