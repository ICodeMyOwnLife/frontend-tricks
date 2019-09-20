(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[13],{318:function(e,t,a){e.exports={Container:"styles_Container__P5lBp",LeftBar:"styles_LeftBar__1xNdg",RightBar:"styles_RightBar__26hl-",LeftColumn:"styles_LeftColumn__2-UjH",RightColumn:"styles_RightColumn__1QpUR",LongBlock:"styles_LongBlock__38LCS"}},33:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(34),r=a.n(s),o=Object(n.memo)(function(e){var t=e.title,a=e.questions,n=e.children;return l.a.createElement("div",{className:r.a.Container},l.a.createElement("h2",{className:r.a.Title},t),l.a.createElement("div",{className:r.a.Content},n),l.a.createElement("div",{className:r.a.Questions},l.a.createElement("h3",null,"Questions"),l.a.createElement("div",null,a.map(function(e,t){var a=e.question,n=e.answer,s=e.references;return l.a.createElement("details",{key:t},l.a.createElement("summary",{className:r.a.Question},l.a.createElement("span",{className:r.a.Index},t+1,".")," ",a),l.a.createElement("div",{className:r.a.Answer},n),s&&s.length&&l.a.createElement("div",{className:r.a.References},l.a.createElement("h4",null,"References"),l.a.createElement("ol",null,s.map(function(e){var t=e.name,a=e.url;return l.a.createElement("li",{key:a},l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))}))))}))))});o.displayName="Question",t.a=o},34:function(e,t,a){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},340:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(33),r=a(35),o=[{question:"How to prevent flex items from overflowing a flex container?",answer:l.a.createElement("div",null,l.a.createElement("p",null,"For fixed-with item: Set ",l.a.createElement("code",null,"flex-grow")," and"," ",l.a.createElement("code",null,"flex-shrink")," to 0 and set ",l.a.createElement("code",null,"flex-basis")," to the width of the item:"),l.a.createElement(r.a,{language:"scss"},".LeftColumn {\n  flex: 0 0 64px;\n}"),l.a.createElement("p",null,"For overflow-hidden item: Set ",l.a.createElement("code",null,"flex-grow")," and"," ",l.a.createElement("code",null,"flex-shrink")," to a positive value, set"," ",l.a.createElement("code",null,"min-width")," to a finite value, and set"," ",l.a.createElement("code",null,"overflow")," to a value other than ",l.a.createElement("code",null,"visible"),":"),l.a.createElement(r.a,{language:"scss"},".RightColumn {\n  flex: 1;\n  min-width: 0;\n  overflow-x: auto;\n}"))}],c=a(318),i=a.n(c);a.d(t,"FlexOverflow1Impl",function(){return m});var m=function(){return l.a.createElement(s.a,{title:"Flew Overflow 1",questions:o},l.a.createElement("div",{className:i.a.Container},l.a.createElement("div",{className:i.a.LeftBar}),l.a.createElement("div",{className:i.a.RightBar},l.a.createElement("div",{className:i.a.LeftColumn}),l.a.createElement("div",{className:i.a.RightColumn},l.a.createElement("div",{className:i.a.LongBlock})))))},u=Object(n.memo)(m);u.displayName="FlexOverflow1";t.default=u},35:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(37),r=a.n(s),o=a(349),c=a(348),i=a(36),m=a.n(i),u=Object(n.memo)(function(e){var t=e.className,a=e.children,n=e.style,s=void 0===n?c.a:n,i=e.language;return l.a.createElement("div",{className:r()(m.a.Code,t)},l.a.createElement(o.a,{language:i,style:s},a))});u.displayName="Code",t.a=u},36:function(e,t,a){e.exports={Code:"styles_Code__2Axvp"}}}]);
//# sourceMappingURL=13.e4168f23.chunk.js.map