(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[15],{332:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),s=a(35),l=a(37),c=[{question:"How to set gradient or image background for text?",answer:r.a.createElement(l.a,{language:"scss"},".Text {\n  width: fit-content;\n  margin-bottom: 20px;\n  font-size: 100px;\n  font-weight: bold;\n  text-align: center;\n  color: transparent;\n  background-clip: text !important;\n}\n\n.linear {\n  background: linear-gradient(\n    45deg,\n    rgba(0, 128, 0, 1) 0%,\n    rgba(255, 255, 0, 1) 50%,\n    rgba(0, 128, 0, 1) 100%\n  );\n}\n\n.radial {\n  background: radial-gradient(\n    ellipse at center,\n    rgba(235, 196, 255, 1) 0%,\n    rgba(0, 0, 0, 1) 100%\n  );\n}\n\n.url {\n  background: url(./1.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}"),references:[{name:"[MDN] background-clip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"},{name:"[CSS-TRICKS] background-clip",url:"https://css-tricks.com/almanac/properties/b/background-clip/"}]}],o=a(13),i=a.n(o),u=a(89),m=a.n(u),d=Object(t.memo)(function(e){var n=e.className;return r.a.createElement("div",{className:i()(m.a.Text,n)},"THIS IS TEXT")});d.displayName="Text";var _=d;a.d(n,"TextBackground1Impl",function(){return g});var g=function(){return r.a.createElement(s.a,{title:"Text Background 1",questions:c},r.a.createElement(_,{className:m.a.linear}),r.a.createElement(_,{className:m.a.radial}),r.a.createElement(_,{className:m.a.url}))},p=Object(t.memo)(g);p.displayName="TextBackground1";n.default=p},35:function(e,n,a){"use strict";var t=a(0),r=a.n(t),s=a(36),l=a.n(s),c=Object(t.memo)(function(e){var n=e.title,a=e.questions,t=e.children;return r.a.createElement("div",{className:l.a.Container},r.a.createElement("h2",{className:l.a.Title},n),r.a.createElement("div",{className:l.a.Content},t),r.a.createElement("div",{className:l.a.Questions},r.a.createElement("h3",null,"Questions"),r.a.createElement("div",null,a.map(function(e,n){var a=e.question,t=e.answer,s=e.references;return r.a.createElement("details",{key:n},r.a.createElement("summary",{className:l.a.Question},r.a.createElement("span",{className:l.a.Index},n+1,".")," ",a),r.a.createElement("div",{className:l.a.Answer},t),s&&s.length&&r.a.createElement("div",{className:l.a.References},r.a.createElement("h4",null,"References"),r.a.createElement("ol",null,s.map(function(e){var n=e.name,a=e.url;return r.a.createElement("li",{key:a},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n))}))))}))))});c.displayName="Question",n.a=c},36:function(e,n,a){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},37:function(e,n,a){"use strict";var t=a(0),r=a.n(t),s=a(13),l=a.n(s),c=a(350),o=a(349),i=a(38),u=a.n(i),m=Object(t.memo)(function(e){var n=e.className,a=e.children,t=e.style,s=void 0===t?o.a:t,i=e.language;return r.a.createElement("div",{className:l()(u.a.Code,n)},r.a.createElement(c.a,{language:i,style:s},a))});m.displayName="Code",n.a=m},38:function(e,n,a){e.exports={Code:"styles_Code__2Axvp"}},89:function(e,n,a){e.exports={Text:"styles_Text__34lGb",linear:"styles_linear__1Gu22",radial:"styles_radial__1pQ1i",url:"styles_url__25BKy"}}}]);
//# sourceMappingURL=15.974c2500.chunk.js.map