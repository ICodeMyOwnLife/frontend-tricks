(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[33],{133:function(e,a,n){"use strict";var t=n(0),r=n.n(t),o=n(129),l=n(38),i=n(124),c=n(25),s=n(121),m=n(122),u=n(123),g=n(39),d=n(65),p=n(47),f=Object(d.a)((function(e){return{Question:{fontWeight:500},Answer:{marginTop:e.spacing(1.5),padding:0,fontSize:14,backgroundColor:p.a[50],border:"1px solid ".concat(p.a[400]),borderRadius:6,"& p":{padding:e.spacing(0,2.5)},"& ol,ul":{margin:e.spacing(1.5,0)},"& img":{maxWidth:"100%"}},References:{margin:e.spacing(3,0,0),"& ol":{marginTop:e.spacing(1)},"& li":{fontSize:14,fontWeight:500,marginBottom:e.spacing(1)}}}})),E=Object(t.memo)((function(e){var a=e.index,n=e.question,t=e.answer,i=e.references,d=f(),p=Object(g.a)(!1),E=Object(c.a)(p,2),h=E[0],b=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{button:!0,onClick:b},r.a.createElement(m.a,{classes:{primary:d.Question}},a,". ",n)),r.a.createElement(u.a,{in:h,timeout:"auto"},r.a.createElement(o.a,{className:d.Answer},t),!!i&&i.length&&r.a.createElement(o.a,{className:d.References},r.a.createElement(l.a,{variant:"h4"},"References"),r.a.createElement("ol",null,i.map((function(e){var a=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},a))}))))))}));E.displayName="QuestionItem";var h=E,b=Object(d.a)((function(e){return{Container:{marginTop:e.spacing(4)},Content:{marginTop:e.spacing(2.5)},Questions:{marginTop:e.spacing(4),"& code":{fontFamily:"'Courier New', Courier, monospace",fontSize:14,fontWeight:600,color:"rgb(219, 104, 27)"}}}})),v=Object(t.memo)((function(e){var a=e.title,n=e.questions,t=e.children,c=b();return r.a.createElement(o.a,{className:c.Container},r.a.createElement(l.a,{variant:"h2"},a),r.a.createElement(o.a,{className:c.Content},t),r.a.createElement(o.a,{className:c.Questions},r.a.createElement(l.a,{variant:"h3"},"Questions"),r.a.createElement(o.a,null,r.a.createElement(i.a,null,n.map((function(e,a){return r.a.createElement(h,Object.assign({key:a,index:a+1},e))}))))))}));v.displayName="QuestionPage";a.a=v},134:function(e,a,n){"use strict";var t=n(0),r=n.n(t),o=n(136),l=n.n(o),i=n(464),c=n(450),s=n(135),m=n.n(s),u=Object(t.memo)((function(e){var a=e.className,n=e.children,t=e.style,o=void 0===t?c.a:t,s=e.language;return r.a.createElement("div",{className:l()(m.a.Code,a)},r.a.createElement(i.a,{language:s,style:o},n))}));u.displayName="Code",a.a=u},135:function(e,a,n){e.exports={Code:"styles_Code__2Axvp"}},491:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(133),l=n(134),i=[{question:r.a.createElement("span",null,"How to insert raw HTML in React (equivalent to setting"," ",r.a.createElement("code",null,"innerHTML"),")?"),answer:r.a.createElement(l.a,{language:"tsx"},"<div dangerouslySetInnerHTML={{ __html: rawHtml }} />"),references:[{name:"[React] dangerouslySetInnerHTML",url:"https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"}]}];n.d(a,"RawHtml1Impl",(function(){return s}));var c='<ul>\n  <li><a href="https://google.com">Go to Google<a/></li>\n  <li><a href="https://facebook.com">Go to Facebook<a/></li>\n  <li><a href="https://twitter.com">Go to Twitter<a/></li>\n</ul>',s=function(){return r.a.createElement(o.a,{title:"Raw HTML 1",questions:i},r.a.createElement("div",null,c),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))},m=Object(t.memo)(s);m.displayName="RawHtml1";a.default=m}}]);
//# sourceMappingURL=react__RawHtml1.3f6126c8.chunk.js.map