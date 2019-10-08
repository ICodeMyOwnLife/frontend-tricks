(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[19],{133:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(129),i=a(38),o=a(124),c=a(25),m=a(121),s=a(122),u=a(123),p=a(39),d=a(65),f=a(47),g=Object(d.a)((function(e){return{Question:{fontWeight:500},Answer:{marginTop:e.spacing(1.5),padding:0,fontSize:14,backgroundColor:f.a[50],border:"1px solid ".concat(f.a[400]),borderRadius:6,"& p":{padding:e.spacing(0,2.5)},"& ol,ul":{margin:e.spacing(1.5,0)},"& img":{maxWidth:"100%"}},References:{margin:e.spacing(3,0,0),"& ol":{marginTop:e.spacing(1)},"& li":{fontSize:14,fontWeight:500,marginBottom:e.spacing(1)}}}})),b=Object(n.memo)((function(e){var t=e.index,a=e.question,n=e.answer,o=e.references,d=g(),f=Object(p.a)(!1),b=Object(c.a)(f,2),E=b[0],v=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{button:!0,onClick:v},r.a.createElement(s.a,{classes:{primary:d.Question}},t,". ",a)),r.a.createElement(u.a,{in:E,timeout:"auto"},r.a.createElement(l.a,{className:d.Answer},n),!!o&&o.length&&r.a.createElement(l.a,{className:d.References},r.a.createElement(i.a,{variant:"h4"},"References"),r.a.createElement("ol",null,o.map((function(e){var t=e.name,a=e.url;return r.a.createElement("li",{key:a},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))}))))))}));b.displayName="QuestionItem";var E=b,v=Object(d.a)((function(e){return{Container:{marginTop:e.spacing(4)},Content:{marginTop:e.spacing(2.5)},Questions:{marginTop:e.spacing(4),"& code":{fontFamily:"'Courier New', Courier, monospace",fontSize:14,fontWeight:600,color:"rgb(219, 104, 27)"}}}})),h=Object(n.memo)((function(e){var t=e.title,a=e.questions,n=e.children,c=v();return r.a.createElement(l.a,{className:c.Container},r.a.createElement(i.a,{variant:"h2"},t),r.a.createElement(l.a,{className:c.Content},n),r.a.createElement(l.a,{className:c.Questions},r.a.createElement(i.a,{variant:"h3"},"Questions"),r.a.createElement(l.a,null,r.a.createElement(o.a,null,a.map((function(e,t){return r.a.createElement(E,Object.assign({key:t,index:t+1},e))}))))))}));h.displayName="QuestionPage";t.a=h},134:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(136),i=a.n(l),o=a(464),c=a(450),m=a(135),s=a.n(m),u=Object(n.memo)((function(e){var t=e.className,a=e.children,n=e.style,l=void 0===n?c.a:n,m=e.language;return r.a.createElement("div",{className:i()(s.a.Code,t)},r.a.createElement(o.a,{language:m,style:l},a))}));u.displayName="Code",t.a=u},135:function(e,t,a){e.exports={Code:"styles_Code__2Axvp"}},430:function(e,t,a){e.exports={InputLine:"styles_InputLine__3Yc-3",InputGroup:"styles_InputGroup__14Cov",InputOnly:"styles_InputOnly__dVw7v"}},484:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),l=a.n(r),i=a(133),o=a(134),c=[{question:"How to stop an input field in a form from being submitted?",answer:l.a.createElement("div",null,l.a.createElement("p",null,"Using inputs without ",l.a.createElement("code",null,"name")," attribute"),l.a.createElement(o.a,{language:"markup"},'\x3c!-- This input value will be included in form data because its name attribute is set --\x3e\n<input type="text" id="text" name="text" />\n\n\x3c!-- This input value will not be included in form data because its name attribute is not set --\x3e\n<input type="number" id="number" />\n')),references:[{name:"[Stack Overflow] Stop an input field in a form from being submitted",url:"https://stackoverflow.com/questions/3008035/stop-an-input-field-in-a-form-from-being-submitted"},{name:"[Stack Overflow] How do I exclude certain form fields upon submission of the form without disabling the field",url:"https://stackoverflow.com/questions/4869987/how-do-i-exclude-certain-form-fields-upon-submission-of-the-form-without-disabli/20877611"}]},{question:"How to get form data?",answer:l.a.createElement("div",null,l.a.createElement("p",null,"Using ",l.a.createElement("code",null,"FormData")),l.a.createElement(o.a,{language:"typescript"},"const formData = new FormData(form);\nconst searchParams = new URLSearchParams(formData);\nconsole.log(searchParams.toString());"),l.a.createElement("p",null,"Using ",l.a.createElement("code",null,"jQuery.serialize()")," or"," ",l.a.createElement("code",null,"jQuery.serializeArray()")),l.a.createElement(o.a,{language:"typescript"},"console.log($form.serialize());\nconsole.log($form.serializeArray());")),references:[{name:"[MDN] FormData",url:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},{name:"[MDN] Using FormData Objects",url:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects"},{name:"[jQuery] .serialize()",url:"https://api.jquery.com/serialize/"},{name:"[jQuery] .serializeArray()",url:"https://api.jquery.com/serializeArray/"},{name:"[Stack Overflow] How can I get form data with JavaScript/jQuery?",url:"https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery"},{name:"[Stack Overflow] JavaScript - Getting HTML form values",url:"https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values"}]}],m=a(430),s=a.n(m);a.d(t,"ExcludedInput1Impl",(function(){return u}));var u=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],o=t[1],m=Object(r.useState)(""),u=Object(n.a)(m,2),p=u[0],d=u[1],f=Object(r.useState)(""),g=Object(n.a)(f,2),b=g[0],E=g[1],v=Object(r.useState)(""),h=Object(n.a)(v,2),y=h[0],w=h[1],j=Object(r.useCallback)((function(e){e.preventDefault();var t=new FormData(e.target),a=new URLSearchParams(t);w(a.toString())}),[]);return l.a.createElement(i.a,{title:"Excluded Input 1",questions:c},l.a.createElement("div",null,l.a.createElement("form",{onSubmit:j},l.a.createElement("div",{className:s.a.InputLine},l.a.createElement("div",{className:s.a.InputGroup},l.a.createElement("label",{htmlFor:"name1"},"Name"),l.a.createElement("input",{type:"text",id:"name1",value:a,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:s.a.InputGroup},l.a.createElement("label",{htmlFor:"input1"},"Text"),l.a.createElement("input",{type:"text",id:"input1",name:a}))),l.a.createElement("div",{className:s.a.InputLine},l.a.createElement("div",{className:s.a.InputGroup},l.a.createElement("label",{htmlFor:"name2"},"Name"),l.a.createElement("input",{type:"text",id:"name2",value:p,onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",{className:s.a.InputGroup},l.a.createElement("label",{htmlFor:"input2"},"Number"),l.a.createElement("input",{type:"number",name:p}))),l.a.createElement("div",{className:s.a.InputLine},l.a.createElement("div",{className:s.a.InputGroup},l.a.createElement("label",{htmlFor:"name3"},"Name"),l.a.createElement("input",{type:"text",id:"name3",value:b,onChange:function(e){return E(e.target.value)}})),l.a.createElement("div",{className:s.a.InputOnly},l.a.createElement("label",{htmlFor:"input3"},l.a.createElement("input",{type:"checkbox",id:"input3",name:b,value:1}),"Checkbox"))),l.a.createElement("div",{className:s.a.InputOnly},l.a.createElement("button",{type:"submit"},"Submit"))),y&&l.a.createElement("pre",null,y)))},p=Object(r.memo)(u);p.displayName="ExcludedInput1";t.default=p}}]);
//# sourceMappingURL=dom__ExcludedInput1.61d7dde2.chunk.js.map