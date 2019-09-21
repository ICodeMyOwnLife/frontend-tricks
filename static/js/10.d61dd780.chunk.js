(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[10],{313:function(e,t,n){e.exports={Request:"styles_Request__28ARP"}},327:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(33),s=n(46),c=n(313),o=n.n(c),u=Object(a.memo)((function(e){var t=e.name,n=e.initialize,a=e.send,l=e.cancel,c=e.result;return r.a.createElement("div",{className:o.a.Request},r.a.createElement("h4",null,t),r.a.createElement("div",null,r.a.createElement(s.a,{className:"mr-4",onClick:n},"Initialize"),r.a.createElement(s.a,{className:"mr-4",onClick:a},"Send"),r.a.createElement(s.a,{className:"mr-4",onClick:l},"Cancel")),r.a.createElement("h6",null,"Result:"),r.a.createElement("pre",null,JSON.stringify(c,null,2)))}));u.displayName="Request";var i=u,m=n(35),d=[{question:r.a.createElement("span",null,"How to cancel an ",r.a.createElement("code",null,"XMLHttpRequest"),"?"),answer:r.a.createElement("div",null,r.a.createElement("p",null,"Call ",r.a.createElement("code",null,"XMLHttpRequest.abort()")),r.a.createElement(m.a,{language:"tsx"},"const request = new XMLHttpRequest();\nrequest.open('GET', url);\nrequest.send(params);\n\nif (SHOULD_CANCEL_REQUEST) request.abort();")),references:[{name:"[MDN] XMLHttpRequest",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},{name:"[MDN] XMLHttpRequest.readyState",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState"},{name:"[MDN] XMLHttpRequest.abort()",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort"},{name:"[MDN] Using XMLHttpRequest",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest"}]},{question:r.a.createElement("span",null,"How to cancel a ",r.a.createElement("code",null,"fetch")," request?"),answer:r.a.createElement("div",null,r.a.createElement("p",null,"Specify an ",r.a.createElement("code",null,"AbortSignal")," when calling ",r.a.createElement("code",null,"fetch()")," ","and call ",r.a.createElement("code",null,"AbortController.abort()")," when needed"),r.a.createElement(m.a,{language:"tsx"},"const request = new Request(url);\nconst abortController = new AbortController();\nconst response = await fetch(request, {\n  method: 'GET',\n  signal: abortController.signal,\n  body: params,\n});\n\nif (SHOULD_CANCEL_REQUEST) abortController.abort();")),references:[{name:"[MDN] Fetch API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},{name:"[MDN] WindowOrWorkerGlobalScope.fetch()",url:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},{name:"[MDN] AbortSignal",url:"https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal"},{name:"[MDN] AbortController",url:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"}]},{question:r.a.createElement("span",null,"How to cancel an ",r.a.createElement("code",null,"axios")," request?"),answer:r.a.createElement("div",null,r.a.createElement("p",null,"Specify a ",r.a.createElement("code",null,"CancelToken")," when calling"," ",r.a.createElement("code",null,"Axios.request()")," and call"," ",r.a.createElement("code",null,"CancelTokenSource.cancel()")," when needed"),r.a.createElement(m.a,{language:"tsx"},"  const cancelTokenSource = Axios.CancelToken.source();\nconst response = await Axios.request({\n  url,\n  method: 'GET',\n  params,\n  cancelToken: cancelTokenSource.token,\n});\n\nif (SHOULD_CANCEL_REQUEST) cancelTokenSource.cancel();"))}],p=n(38),b=n(54),f=n.n(b),E=n(55),v=n(77),g=n.n(v),C="".concat("https://frontend-tricks-server.herokuapp.com","/long"),h=new URLSearchParams;h.set("duration","5000");var _=function(e,t){var n=e.status,a=e.statusText,r=e.readyState,l=e.response,s=e.responseText;return{loading:t,status:n,statusText:a,readyState:r,body:l&&JSON.parse(l),responseText:s}},k=function(){var e=Object(E.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.status,r=t.statusText,e.t0=n,e.t1=a,e.t2=r,e.next=6,t.clone().json();case 6:return e.t3=e.sent,e.next=9,t.clone().text();case 9:return e.t4=e.sent,e.abrupt("return",{loading:e.t0,status:e.t1,statusText:e.t2,body:e.t3,responseText:e.t4});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n.d(t,"CancelRequest1Impl",(function(){return O}));var O=function(){var e=function(){var e=Object(a.useState)({loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1],l=Object(a.useRef)(),s=Object(a.useRef)();return{initialize:Object(a.useCallback)((function(){var e=new XMLHttpRequest;e.open("POST",C),e.onload=function(){return r(_(e,!1))},e.onerror=function(){return r(_(e,!1))},e.onabort=function(){return r(_(e,!1))},l.current=e,s.current=e}),[]),send:Object(a.useCallback)((function(){var e=l.current;e&&(r(_(e,!0)),e.send(h),l.current=void 0)}),[]),cancel:Object(a.useCallback)((function(){s.current&&s.current.abort()}),[]),result:n}}(),t=function(){var e=Object(a.useState)({loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1],l=Object(a.useRef)(),s=Object(a.useRef)();return{initialize:Object(a.useCallback)((function(){var e=new AbortController,t=new Request(C,{method:"POST",body:h,signal:e.signal});s.current=e,l.current=t}),[]),send:Object(a.useCallback)(Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.current){e.next=3;break}return e.abrupt("return");case 3:return r({loading:!0}),e.prev=4,e.next=7,fetch(t);case 7:return n=e.sent,e.t0=r,e.next=11,k(n,!1);case 11:e.t1=e.sent,(0,e.t0)(e.t1),l.current=void 0,e.next=19;break;case 16:e.prev=16,e.t2=e.catch(4),r({loading:!1,error:(a=e.t2,{message:a.message,code:a.code,name:a.name})});case 19:case"end":return e.stop()}var a}),e,null,[[4,16]])}))),[]),cancel:Object(a.useCallback)((function(){s.current&&s.current.abort()}),[]),result:n}}(),n=function(){var e=Object(a.useState)({loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1],l=Object(a.useRef)(),s=Object(a.useRef)();return{initialize:Object(a.useCallback)((function(){var e=g.a.CancelToken.source();s.current=e;var t=g.a.create({cancelToken:e.token});l.current=t}),[]),send:Object(a.useCallback)(Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.current){e.next=3;break}return e.abrupt("return");case 3:return r({loading:!0}),e.prev=4,e.next=7,t.request({url:C,method:"POST",params:h});case 7:n=e.sent,r({loading:!1,data:(s=n).data,status:s.status,statusText:s.statusText}),l.current=void 0,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),r({loading:!1,error:(a=e.t0,{message:g.a.isCancel(a)?"Cancelled":a.message})});case 15:case"end":return e.stop()}var a,s}),e,null,[[4,12]])}))),[]),cancel:Object(a.useCallback)((function(){s.current&&s.current.cancel()}),[]),result:n}}();return r.a.createElement(l.a,{title:"Cancel Request 1",questions:d},r.a.createElement(i,Object.assign({name:"XMLHttpRequest"},e)),r.a.createElement(i,Object.assign({name:"Fetch"},t)),r.a.createElement(i,Object.assign({name:"Axios"},n)))},q=Object(a.memo)(O);q.displayName="CancelRequest1";t.default=q},33:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(34),s=n.n(l),c=Object(a.memo)((function(e){var t=e.title,n=e.questions,a=e.children;return r.a.createElement("div",{className:s.a.Container},r.a.createElement("h2",{className:s.a.Title},t),r.a.createElement("div",{className:s.a.Content},a),r.a.createElement("div",{className:s.a.Questions},r.a.createElement("h3",null,"Questions"),r.a.createElement("div",null,n.map((function(e,t){var n=e.question,a=e.answer,l=e.references;return r.a.createElement("details",{key:t},r.a.createElement("summary",{className:s.a.Question},r.a.createElement("span",{className:s.a.Index},t+1,".")," ",n),r.a.createElement("div",{className:s.a.Answer},a),l&&l.length&&r.a.createElement("div",{className:s.a.References},r.a.createElement("h4",null,"References"),r.a.createElement("ol",null,l.map((function(e){var t=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))})))))})))))}));c.displayName="Question",t.a=c},34:function(e,t,n){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(37),s=n.n(l),c=n(348),o=n(347),u=n(36),i=n.n(u),m=Object(a.memo)((function(e){var t=e.className,n=e.children,a=e.style,l=void 0===a?o.a:a,u=e.language;return r.a.createElement("div",{className:s()(i.a.Code,t)},r.a.createElement(c.a,{language:u,style:l},n))}));m.displayName="Code",t.a=m},36:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}},46:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(37),s=n.n(l),c=n(49),o=n.n(c),u=Object(a.memo)((function(e){var t=e.className,n=e.id,a=e.href,l=e.target,c=e.rel,u=e.download,i=e.type,m=void 0===i?"button":i,d=e.onClick,p=e.children;return a?r.a.createElement("a",{className:s()(o.a.Button,t),id:n,href:a,target:l,rel:c,download:u,onClick:d},p):r.a.createElement("button",{className:s()(o.a.Button,t),id:n,type:m,onClick:d},p)}));u.displayName="Button",t.a=u},49:function(e,t,n){e.exports={ButtonBase:"styles_ButtonBase__3uhxr",Button:"styles_Button__1Ekk8"}}}]);
//# sourceMappingURL=10.d61dd780.chunk.js.map