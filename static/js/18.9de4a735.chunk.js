(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[18],{323:function(e,t,n){e.exports={Form:"styles_Form__1rZ8s",InputGroup:"styles_InputGroup__22x65",InputLabel:"styles_InputLabel__1qYdK",InputControl:"styles_InputControl__a8_bX",Checkbox:"styles_Checkbox__3xscn",Data:"styles_Data__3jVds"}},33:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(34),c=n.n(l),s=Object(a.memo)(function(e){var t=e.title,n=e.questions,a=e.children;return r.a.createElement("div",{className:c.a.Container},r.a.createElement("h2",{className:c.a.Title},t),r.a.createElement("div",{className:c.a.Content},a),r.a.createElement("div",{className:c.a.Questions},r.a.createElement("h3",null,"Questions"),r.a.createElement("div",null,n.map(function(e,t){var n=e.question,a=e.answer,l=e.references;return r.a.createElement("details",{key:t},r.a.createElement("summary",{className:c.a.Question},r.a.createElement("span",{className:c.a.Index},t+1,".")," ",n),r.a.createElement("div",{className:c.a.Answer},a),l&&l.length&&r.a.createElement("div",{className:c.a.References},r.a.createElement("h4",null,"References"),r.a.createElement("ol",null,l.map(function(e){var t=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))}))))}))))});s.displayName="Question",t.a=s},333:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(0),l=n.n(r),c=n(33),s=n(51),o=n(321);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var i=function(e){var t=Object(r.useState)(e),n=Object(a.a)(t,2),l=n[0],c=n[1],i=Object(r.useCallback)(function(e){var t=e.target;c(function(e){var n;switch(typeof Object(o.get)(e,t.name)){case"number":n=Number(t.value);break;case"string":n=String(t.value);break;case"boolean":n=Boolean(t.checked);break;default:return console.warn("Cannot find field with name ".concat(t.name)),e}var a=Object(o.cloneDeep)(e);return Object(o.set)(a,t.name,n),a})},[]);return[l,function(e){return function(t){var n=Object(o.get)(l,e),a={};switch(typeof n){case"string":case"number":a={value:n};break;case"boolean":a={checked:n};break;default:console.warn("Cannot find field with name ".concat(e))}return Object(r.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},a,{name:e,id:e,onChange:i}))}}]},u=n(35),p=[{question:l.a.createElement("span",null,"How to change/add/remove props of an ",l.a.createElement("code",null,"ReactElement"),"?"),answer:l.a.createElement("div",null,l.a.createElement("p",null,"Using ",l.a.createElement("code",null,"cloneElement()")),l.a.createElement(u.a,{language:"tsx"},"cloneElement<FieldProps>(element, {\n  ...props,\n  name,\n  id: name,\n  onChange,\n});")),references:[{name:"[React] cloneElement()",url:"https://reactjs.org/docs/react-api.html#cloneelement"},{name:"[Medium] Transforming Elements In React",url:"https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba"},{name:"[Medium] How to change or add React Component properties \u2014 clone element with React.cloneElement",url:"https://medium.com/@vygandas/how-to-change-or-add-react-component-properties-clone-element-with-react-cloneelement-be060097a44a"}]}],d=n(323),b=n.n(d);n.d(t,"Element1Impl",function(){return f});var f=function(){var e=i({name:"",value:0,active:!1}),t=Object(a.a)(e,2),n=t[0],r=t[1];return l.a.createElement(c.a,{title:"Element 1",questions:p},l.a.createElement("form",{className:b.a.Form},l.a.createElement("div",{className:b.a.InputGroup},l.a.createElement("label",{className:b.a.InputLabel,htmlFor:"name"},"Name"),r("name")(l.a.createElement("input",{className:b.a.InputControl,type:"text"}))),l.a.createElement("div",{className:b.a.InputGroup},l.a.createElement("label",{className:b.a.InputLabel,htmlFor:"value"},"Value"),r("value")(l.a.createElement("input",{className:b.a.InputControl,type:"number"}))),l.a.createElement("div",{className:b.a.InputGroup},l.a.createElement("label",{className:b.a.Checkbox,htmlFor:"active"},r("active")(l.a.createElement("input",{type:"checkbox"})),"Active"))),l.a.createElement("div",{className:b.a.Data},l.a.createElement("pre",null,JSON.stringify(n,null,2))))},E=Object(r.memo)(f);E.displayName="Element1";t.default=E},34:function(e,t,n){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(37),c=n.n(l),s=n(349),o=n(348),m=n(36),i=n.n(m),u=Object(a.memo)(function(e){var t=e.className,n=e.children,a=e.style,l=void 0===a?o.a:a,m=e.language;return r.a.createElement("div",{className:c()(i.a.Code,t)},r.a.createElement(s.a,{language:m,style:l},n))});u.displayName="Code",t.a=u},36:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}}}]);
//# sourceMappingURL=18.9de4a735.chunk.js.map