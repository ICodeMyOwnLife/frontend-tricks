(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[15],{133:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(129),l=n(38),o=n(124),s=n(25),u=n(121),i=n(122),m=n(123),d=n(39),p=n(65),b=n(47),f=Object(p.a)((function(e){return{Question:{fontWeight:500},Answer:{marginTop:e.spacing(1.5),padding:0,fontSize:14,backgroundColor:b.a[50],border:"1px solid ".concat(b.a[400]),borderRadius:6,"& p":{padding:e.spacing(0,2.5)},"& ol,ul":{margin:e.spacing(1.5,0)},"& img":{maxWidth:"100%"}},References:{margin:e.spacing(3,0,0),"& ol":{marginTop:e.spacing(1)},"& li":{fontSize:14,fontWeight:500,marginBottom:e.spacing(1)}}}})),g=Object(a.memo)((function(e){var t=e.index,n=e.question,a=e.answer,o=e.references,p=f(),b=Object(d.a)(!1),g=Object(s.a)(b,2),E=g[0],v=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{button:!0,onClick:v},r.a.createElement(i.a,{classes:{primary:p.Question}},t,". ",n)),r.a.createElement(m.a,{in:E,timeout:"auto"},r.a.createElement(c.a,{className:p.Answer},a),!!o&&o.length&&r.a.createElement(c.a,{className:p.References},r.a.createElement(l.a,{variant:"h4"},"References"),r.a.createElement("ol",null,o.map((function(e){var t=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))}))))))}));g.displayName="QuestionItem";var E=g,v=Object(p.a)((function(e){return{Container:{marginTop:e.spacing(4)},Content:{marginTop:e.spacing(2.5)},Questions:{marginTop:e.spacing(4),"& code":{fontFamily:"'Courier New', Courier, monospace",fontSize:14,fontWeight:600,color:"rgb(219, 104, 27)"}}}})),h=Object(a.memo)((function(e){var t=e.title,n=e.questions,a=e.children,s=v();return r.a.createElement(c.a,{className:s.Container},r.a.createElement(l.a,{variant:"h2"},t),r.a.createElement(c.a,{className:s.Content},a),r.a.createElement(c.a,{className:s.Questions},r.a.createElement(l.a,{variant:"h3"},"Questions"),r.a.createElement(c.a,null,r.a.createElement(o.a,null,n.map((function(e,t){return r.a.createElement(E,Object.assign({key:t,index:t+1},e))}))))))}));h.displayName="QuestionPage";t.a=h},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(136),l=n.n(c),o=n(464),s=n(450),u=n(135),i=n.n(u),m=Object(a.memo)((function(e){var t=e.className,n=e.children,a=e.style,c=void 0===a?s.a:a,u=e.language;return r.a.createElement("div",{className:l()(i.a.Code,t)},r.a.createElement(o.a,{language:u,style:c},n))}));m.displayName="Code",t.a=m},135:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}},142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(136),l=n.n(c),o=n(145),s=n.n(o),u=Object(a.memo)((function(e){var t=e.className,n=e.id,a=e.href,c=e.target,o=e.rel,u=e.download,i=e.type,m=void 0===i?"button":i,d=e.onClick,p=e.children;return a?r.a.createElement("a",{className:l()(s.a.Button,t),id:n,href:a,target:c,rel:o,download:u,onClick:d},p):r.a.createElement("button",{className:l()(s.a.Button,t),id:n,type:m,onClick:d},p)}));u.displayName="Button",t.a=u},145:function(e,t,n){e.exports={ButtonBase:"styles_ButtonBase__3uhxr",Button:"styles_Button__1Ekk8"}},408:function(e,t,n){e.exports={Request:"styles_Request__28ARP"}},466:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(133),l=n(142),o=n(408),s=n.n(o),u=Object(a.memo)((function(e){var t=e.name,n=e.initialize,a=e.send,c=e.cancel,o=e.result;return r.a.createElement("div",{className:s.a.Request},r.a.createElement("h4",null,t),r.a.createElement("div",null,r.a.createElement(l.a,{className:"mr-4",onClick:n},"Initialize"),r.a.createElement(l.a,{className:"mr-4",onClick:a},"Send"),r.a.createElement(l.a,{className:"mr-4",onClick:c},"Cancel")),r.a.createElement("h6",null,"Result:"),r.a.createElement("pre",null,JSON.stringify(o,null,2)))}));u.displayName="Request";var i=u,m=n(134),d=[{question:r.a.createElement("span",null,"How to cancel an ",r.a.createElement("code",null,"XMLHttpRequest"),"?"),answer:r.a.createElement("div",null,r.a.createElement("p",null,"Call ",r.a.createElement("code",null,"XMLHttpRequest.abort()")),r.a.createElement(m.a,{language:"tsx"},"const request = new XMLHttpRequest();\nrequest.open('GET', url);\nrequest.send(params);\n\nif (SHOULD_CANCEL_REQUEST) request.abort();")),references:[{name:"[MDN] XMLHttpRequest",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},{name:"[MDN] XMLHttpRequest.readyState",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState"},{name:"[MDN] XMLHttpRequest.abort()",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort"},{name:"[MDN] Using XMLHttpRequest",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest"}]},{question:r.a.createElement("span",null,"How to cancel a ",r.a.createElement("code",null,"fetch")," request?"),answer:r.a.createElement("div",null,r.a.createElement("p",null,"Specify an ",r.a.createElement("code",null,"AbortSignal")," when calling ",r.a.createElement("code",null,"fetch()")," ","and call ",r.a.createElement("code",null,"AbortController.abort()")," when needed"),r.a.createElement(m.a,{language:"tsx"},"const request = new Request(url);\nconst abortController = new AbortController();\nconst response = await fetch(request, {\n  method: 'GET',\n  signal: abortController.signal,\n  body: params,\n});\n\nif (SHOULD_CANCEL_REQUEST) abortController.abort();")),references:[{name:"[MDN] Fetch API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},{name:"[MDN] WindowOrWorkerGlobalScope.fetch()",url:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},{name:"[MDN] AbortSignal",url:"https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal"},{name:"[MDN] AbortController",url:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"}]},{question:r.a.createElement("span",null,"How to cancel an ",r.a.createElement("code",null,"axios")," request?"),answer:r.a.createElement("div",null,r.a.createElement("p",null,"Specify a ",r.a.createElement("code",null,"CancelToken")," when calling"," ",r.a.createElement("code",null,"Axios.request()")," and call"," ",r.a.createElement("code",null,"CancelTokenSource.cancel()")," when needed"),r.a.createElement(m.a,{language:"tsx"},"  const cancelTokenSource = Axios.CancelToken.source();\nconst response = await Axios.request({\n  url,\n  method: 'GET',\n  params,\n  cancelToken: cancelTokenSource.token,\n});\n\nif (SHOULD_CANCEL_REQUEST) cancelTokenSource.cancel();"))}],p=n(25),b=n(146),f=n.n(b),g=n(147),E=n(164),v=n.n(E),h="".concat("https://frontend-tricks-server.herokuapp.com","/long"),C=new URLSearchParams;C.set("duration","5000");var O=function(e,t){var n=e.status,a=e.statusText,r=e.readyState,c=e.response,l=e.responseText;return{loading:t,status:n,statusText:a,readyState:r,body:c&&JSON.parse(c),responseText:l}},k=function(){var e=Object(g.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.status,r=t.statusText,e.t0=n,e.t1=a,e.t2=r,e.next=6,t.clone().json();case 6:return e.t3=e.sent,e.next=9,t.clone().text();case 9:return e.t4=e.sent,e.abrupt("return",{loading:e.t0,status:e.t1,statusText:e.t2,body:e.t3,responseText:e.t4});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n.d(t,"CancelRequest1Impl",(function(){return S}));var S=function(){var e=function(){var e=Object(a.useState)({loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(),l=Object(a.useRef)();return{initialize:Object(a.useCallback)((function(){var e=new XMLHttpRequest;e.open("POST",h),e.onload=function(){return r(O(e,!1))},e.onerror=function(){return r(O(e,!1))},e.onabort=function(){return r(O(e,!1))},c.current=e,l.current=e}),[]),send:Object(a.useCallback)((function(){var e=c.current;e&&(r(O(e,!0)),e.send(C),c.current=void 0)}),[]),cancel:Object(a.useCallback)((function(){l.current&&l.current.abort()}),[]),result:n}}(),t=function(){var e=Object(a.useState)({loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(),l=Object(a.useRef)();return{initialize:Object(a.useCallback)((function(){var e=new AbortController,t=new Request(h,{method:"POST",body:C,signal:e.signal});l.current=e,c.current=t}),[]),send:Object(a.useCallback)(Object(g.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.current){e.next=3;break}return e.abrupt("return");case 3:return r({loading:!0}),e.prev=4,e.next=7,fetch(t);case 7:return n=e.sent,e.t0=r,e.next=11,k(n,!1);case 11:e.t1=e.sent,(0,e.t0)(e.t1),c.current=void 0,e.next=19;break;case 16:e.prev=16,e.t2=e.catch(4),r({loading:!1,error:(a=e.t2,{message:a.message,code:a.code,name:a.name})});case 19:case"end":return e.stop()}var a}),e,null,[[4,16]])}))),[]),cancel:Object(a.useCallback)((function(){l.current&&l.current.abort()}),[]),result:n}}(),n=function(){var e=Object(a.useState)({loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(),l=Object(a.useRef)();return{initialize:Object(a.useCallback)((function(){var e=v.a.CancelToken.source();l.current=e;var t=v.a.create({cancelToken:e.token});c.current=t}),[]),send:Object(a.useCallback)(Object(g.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.current){e.next=3;break}return e.abrupt("return");case 3:return r({loading:!0}),e.prev=4,e.next=7,t.request({url:h,method:"POST",params:C});case 7:n=e.sent,r({loading:!1,data:(l=n).data,status:l.status,statusText:l.statusText}),c.current=void 0,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),r({loading:!1,error:(a=e.t0,{message:v.a.isCancel(a)?"Cancelled":a.message})});case 15:case"end":return e.stop()}var a,l}),e,null,[[4,12]])}))),[]),cancel:Object(a.useCallback)((function(){l.current&&l.current.cancel()}),[]),result:n}}();return r.a.createElement(c.a,{title:"Cancel Request 1",questions:d},r.a.createElement(i,Object.assign({name:"XMLHttpRequest"},e)),r.a.createElement(i,Object.assign({name:"Fetch"},t)),r.a.createElement(i,Object.assign({name:"Axios"},n)))},q=Object(a.memo)(S);q.displayName="CancelRequest1";t.default=q}}]);
//# sourceMappingURL=dom__CancelRequest1.67f6e8e1.chunk.js.map