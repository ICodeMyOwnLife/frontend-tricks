(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[21],{33:function(e,t,n){"use strict";var a=n(0),l=n.n(a),s=n(34),r=n.n(s),o=Object(a.memo)(function(e){var t=e.title,n=e.questions,a=e.children;return l.a.createElement("div",{className:r.a.Container},l.a.createElement("h2",{className:r.a.Title},t),l.a.createElement("div",{className:r.a.Content},a),l.a.createElement("div",{className:r.a.Questions},l.a.createElement("h3",null,"Questions"),l.a.createElement("div",null,n.map(function(e,t){var n=e.question,a=e.answer,s=e.references;return l.a.createElement("details",{key:t},l.a.createElement("summary",{className:r.a.Question},l.a.createElement("span",{className:r.a.Index},t+1,".")," ",n),l.a.createElement("div",{className:r.a.Answer},a),s&&s.length&&l.a.createElement("div",{className:r.a.References},l.a.createElement("h4",null,"References"),l.a.createElement("ol",null,s.map(function(e){var t=e.name,n=e.url;return l.a.createElement("li",{key:n},l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))}))))}))))});o.displayName="Question",t.a=o},34:function(e,t,n){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},341:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),s=n(33),r=n(35),o=[{question:l.a.createElement("span",null,"How to insert raw HTML in React (equivalent to setting"," ",l.a.createElement("code",null,"innerHTML"),")?"),answer:l.a.createElement(r.a,{language:"tsx"},"<div dangerouslySetInnerHTML={{ __html: rawHtml }} />"),references:[{name:"[React] dangerouslySetInnerHTML",url:"https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"}]}];n.d(t,"RawHtml1Impl",function(){return i});var c='<ul>\n  <li><a href="https://google.com">Go to Google<a/></li>\n  <li><a href="https://facebook.com">Go to Facebook<a/></li>\n  <li><a href="https://twitter.com">Go to Twitter<a/></li>\n</ul>',i=function(){return l.a.createElement(s.a,{title:"Raw HTML 1",questions:o},l.a.createElement("div",null,c),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))},m=Object(a.memo)(i);m.displayName="RawHtml1";t.default=m},35:function(e,t,n){"use strict";var a=n(0),l=n.n(a),s=n(37),r=n.n(s),o=n(349),c=n(348),i=n(36),m=n.n(i),u=Object(a.memo)(function(e){var t=e.className,n=e.children,a=e.style,s=void 0===a?c.a:a,i=e.language;return l.a.createElement("div",{className:r()(m.a.Code,t)},l.a.createElement(o.a,{language:i,style:s},n))});u.displayName="Code",t.a=u},36:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}}}]);
//# sourceMappingURL=21.a5aaad54.chunk.js.map