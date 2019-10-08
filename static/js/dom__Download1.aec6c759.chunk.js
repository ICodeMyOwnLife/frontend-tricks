(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[17],{133:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(129),r=n(38),c=n(124),s=n(25),i=n(121),u=n(122),m=n(123),d=n(39),p=n(65),f=n(47),b=Object(p.a)((function(e){return{Question:{fontWeight:500},Answer:{marginTop:e.spacing(1.5),padding:0,fontSize:14,backgroundColor:f.a[50],border:"1px solid ".concat(f.a[400]),borderRadius:6,"& p":{padding:e.spacing(0,2.5)},"& ol,ul":{margin:e.spacing(1.5,0)},"& img":{maxWidth:"100%"}},References:{margin:e.spacing(3,0,0),"& ol":{marginTop:e.spacing(1)},"& li":{fontSize:14,fontWeight:500,marginBottom:e.spacing(1)}}}})),v=Object(a.memo)((function(e){var t=e.index,n=e.question,a=e.answer,c=e.references,p=b(),f=Object(d.a)(!1),v=Object(s.a)(f,2),w=v[0],h=v[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{button:!0,onClick:h},o.a.createElement(u.a,{classes:{primary:p.Question}},t,". ",n)),o.a.createElement(m.a,{in:w,timeout:"auto"},o.a.createElement(l.a,{className:p.Answer},a),!!c&&c.length&&o.a.createElement(l.a,{className:p.References},o.a.createElement(r.a,{variant:"h4"},"References"),o.a.createElement("ol",null,c.map((function(e){var t=e.name,n=e.url;return o.a.createElement("li",{key:n},o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))}))))))}));v.displayName="QuestionItem";var w=v,h=Object(p.a)((function(e){return{Container:{marginTop:e.spacing(4)},Content:{marginTop:e.spacing(2.5)},Questions:{marginTop:e.spacing(4),"& code":{fontFamily:"'Courier New', Courier, monospace",fontSize:14,fontWeight:600,color:"rgb(219, 104, 27)"}}}})),g=Object(a.memo)((function(e){var t=e.title,n=e.questions,a=e.children,s=h();return o.a.createElement(l.a,{className:s.Container},o.a.createElement(r.a,{variant:"h2"},t),o.a.createElement(l.a,{className:s.Content},a),o.a.createElement(l.a,{className:s.Questions},o.a.createElement(r.a,{variant:"h3"},"Questions"),o.a.createElement(l.a,null,o.a.createElement(c.a,null,n.map((function(e,t){return o.a.createElement(w,Object.assign({key:t,index:t+1},e))}))))))}));g.displayName="QuestionPage";t.a=g},134:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(136),r=n.n(l),c=n(464),s=n(450),i=n(135),u=n.n(i),m=Object(a.memo)((function(e){var t=e.className,n=e.children,a=e.style,l=void 0===a?s.a:a,i=e.language;return o.a.createElement("div",{className:r()(u.a.Code,t)},o.a.createElement(c.a,{language:i,style:l},n))}));m.displayName="Code",t.a=m},135:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}},142:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(136),r=n.n(l),c=n(145),s=n.n(c),i=Object(a.memo)((function(e){var t=e.className,n=e.id,a=e.href,l=e.target,c=e.rel,i=e.download,u=e.type,m=void 0===u?"button":u,d=e.onClick,p=e.children;return a?o.a.createElement("a",{className:r()(s.a.Button,t),id:n,href:a,target:l,rel:c,download:i,onClick:d},p):o.a.createElement("button",{className:r()(s.a.Button,t),id:n,type:m,onClick:d},p)}));i.displayName="Button",t.a=i},145:function(e,t,n){e.exports={ButtonBase:"styles_ButtonBase__3uhxr",Button:"styles_Button__1Ekk8"}},149:function(e,t,n){"use strict";var a=n(2),o=n(0),l=n.n(o),r=n(136),c=n.n(r),s=n(155),i=n.n(s),u=Object(o.memo)((function(e){var t=e.className,n=e.labelClassName,o=e.inputClassName,r=e.id,s=e.label,u=Object(a.a)(e,["className","labelClassName","inputClassName","id","label"]);return l.a.createElement("div",{className:c()(i.a.InputGroup,t)},l.a.createElement("label",{className:c()(i.a.Label,n),htmlFor:r},s),l.a.createElement("input",Object.assign({className:c()(i.a.Input,o),id:r},u)))}));u.displayName="Input",t.a=u},154:function(e,t,n){"use strict";var a=n(2),o=n(0),l=n.n(o),r=n(149),c=Object(o.memo)((function(e){var t=e.type,n=void 0===t?"number":t,c=e.onChange,s=Object(a.a)(e,["type","onChange"]),i=Object(o.useCallback)((function(e){return c&&c(Number(e.target.value))}),[c]);return l.a.createElement(r.a,Object.assign({type:n,onChange:i},s))}));c.displayName="NumberInput",t.a=c},155:function(e,t,n){e.exports={InputGroupBase:"styles_InputGroupBase__18W83",InputGroup:"styles_InputGroup__1uLeo",LabelBase:"styles_LabelBase__2_6Yt",Label:"styles_Label__1XhjA",InputBase:"styles_InputBase__2S20X",Input:"styles_Input__18MvC"}},428:function(e,t,n){(function(n){var a,o,l;o=[],void 0===(l="function"===typeof(a=function(){"use strict";function t(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){r(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,r){var c=l.URL||l.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):a(s.href)?t(e,n,r):o(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){o(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,l){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,l),n);else if(a(e))t(e,n,l);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){o(r)}))}}:function(e,n,a,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,a);var r="application/octet-stream"===e.type,c=/constructor/i.test(l.HTMLElement)||l.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&c)&&"object"==typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},i.readAsDataURL(e)}else{var u=l.URL||l.webkitURL,m=u.createObjectURL(e);o?o.location=m:location.href=m,o=null,setTimeout((function(){u.revokeObjectURL(m)}),4e4)}});l.saveAs=r.saveAs=r,e.exports=r})?a.apply(t,o):a)||(e.exports=l)}).call(this,n(71))},461:function(e,t,n){"use strict";n.r(t);var a=n(25),o=n(0),l=n.n(o),r=n(133),c=n(142),s=n(154),i=n(146),u=n.n(i),m=n(147),d=n(164),p=n.n(d),f=n(428),b="".concat("https://frontend-tricks-server.herokuapp.com","/static/1.png"),v="".concat("https://frontend-tricks-server.herokuapp.com","/public/1.md"),w="".concat("https://frontend-tricks-server.herokuapp.com","/export"),h=function(e){var t=e.contentType,n=e.contentDisposition,a=t&&t.match(/\/(\w+)/),o=a&&a[1]||"txt",l=n&&n.match(/filename="(.+)"/);return l&&l[1]||"unnamed.".concat(o)},g=function(e){var t=e.blob,n=e.contentType,a=e.contentDisposition,o=h({contentType:n,contentDisposition:a}),l=URL.createObjectURL(t),r=document.createElement("a");r.href=l,r.style.display="none",r.download=o,document.body.appendChild(r),r.click(),URL.revokeObjectURL(l),document.body.removeChild(r)},E=function(e){var t=e.blob,n=e.contentType,a=e.contentDisposition,o=h({contentType:n,contentDisposition:a});Object(f.saveAs)(t,o)},y=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,o,l,r,c,s,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",a=i.length>2?i[2]:void 0,e.next=4,p.a.request({url:t,method:n,responseType:"blob",data:a});case 4:return o=e.sent,l=o.data,r=o.headers,c=r["content-type"],s=r["content-disposition"],e.abrupt("return",{blob:l,contentType:c,contentDisposition:s});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,o,l,r,c,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2?s[2]:void 0,e.next=4,fetch(t,{method:n,body:a});case 4:return o=e.sent,e.next=7,o.blob();case 7:return l=e.sent,r=o.headers.get("content-type"),c=o.headers.get("content-disposition"),e.abrupt("return",{blob:l,contentType:r,contentDisposition:c});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2?o[2]:void 0,e.abrupt("return",new Promise((function(e,o){var l=new XMLHttpRequest;l.responseType="blob",l.open(n,t,!0),l.onload=function(){var t=l.response,n=l.getResponseHeader("content-type"),a=l.getResponseHeader("content-disposition");e({blob:t,contentType:n,contentDisposition:a})},l.onerror=o,l.send(a)})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(o.memo)((function(e){var t=e.className,n=e.count,a=e.downloadFile,r=e.saveFile,s=e.children,i=function(e){var t=e.count,n=e.downloadFile,a=e.saveFile;return Object(o.useCallback)(Object(m.a)(u.a.mark((function e(){var o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new URLSearchParams).set("count","".concat(t)),e.next=4,n(w,"POST",o);case 4:l=e.sent,a(l);case 6:case"end":return e.stop()}}),e)}))),[t,n,a])}({count:n,downloadFile:a,saveFile:r});return l.a.createElement(c.a,{className:t,onClick:i},s)}));F.displayName="DynamicDownloadButton";var N=F,O=n(134),L=[{question:l.a.createElement("span",null,"How to download file using anchor tag ",l.a.createElement("code",null,"<a>"),"?"),answer:l.a.createElement("div",null,l.a.createElement("p",null,"Setting ",l.a.createElement("code",null,"href")," and ",l.a.createElement("code",null,"download")," attribute"),l.a.createElement(O.a,{language:"markup"},'<a href="http://localhost:1333/static/1.png" download="1.png">Download<a/>')),references:[{name:"[MDN] <a>: The Anchor element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download"},{name:"[Stack Overflow] how to download file using anchor tag <a>",url:"https://stackoverflow.com/questions/21607309/how-to-download-file-using-anchor-tag-a"},{name:"[Stack Overflow] How can I create download link in HTML?",url:"https://stackoverflow.com/questions/2793751/how-can-i-create-download-link-in-html"}]},{question:"How to download file using AJAX request?",answer:l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"Saving file manually:")," Creating an ",l.a.createElement("code",null,"objectURL")," by calling ",l.a.createElement("code",null,"URL.createObjectURL(blob)")," and use it to set"," ",l.a.createElement("code",null,"href")," of an ",l.a.createElement("code",null,"a")," element. After using"," ",l.a.createElement("code",null,"objectURL")," we can revoke it by calling"," ",l.a.createElement("code",null,"URL.revokeObjectURL(objectURL)")),l.a.createElement(O.a,{language:"tsx"},"const saveFileManually: SaveFileFunction = ({\n  blob,\n  contentType,\n  contentDisposition,\n}) => {\n  const filename = createFilename({ contentType, contentDisposition });\n  const objectUrl = URL.createObjectURL(blob);\n  const link = document.createElement('a');\n  link.href = objectUrl;\n  link.style.display = 'none';\n  link.download = filename;\n  document.body.appendChild(link);\n  link.click();\n  URL.revokeObjectURL(objectUrl);\n  document.body.removeChild(link);\n};"),l.a.createElement("p",null,"Using library ",l.a.createElement("code",null,"FileSaver.js")),l.a.createElement(O.a,{language:"tsx"},"import { saveAs } from 'file-saver';\n\nsaveAs(blob, filename);")),references:[{name:"[Stack Overflow] download file using an ajax request",url:"https://stackoverflow.com/questions/20830309/download-file-using-an-ajax-request"},{name:"[Stack Overflow] Download a file by jQuery.Ajax",url:"https://stackoverflow.com/questions/4545311/download-a-file-by-jquery-ajax"},{name:"[Medium] Download Files With Ajax",url:"https://medium.com/tyrone-tudehope/download-files-with-ajax-74d371f548f3"},{name:"[MDN] URL.createObjectURL()",url:"https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL"},{name:"[MDN] URL.revokeObjectURL()",url:"https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL"},{name:"[MDN] Fetch API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},{name:"[MDN] XMLHttpRequest",url:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},{name:"[MDN] Blob",url:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},{name:"[GitHub] axios",url:"https://github.com/axios/axios"},{name:"[Medium] Handle Blobs requests with Axios the right way",url:"https://medium.com/@fakiolinho/handle-blobs-requests-with-axios-the-right-way-bb905bdb1c04"},{name:"[GitHub] FileSaver.js",url:"https://github.com/eligrey/FileSaver.js"}]}],R=Object(o.memo)((function(e){var t=e.className,n=e.url,a=e.downloadFile,r=e.saveFile,s=e.children,i=function(e){var t=e.url,n=e.downloadFile,a=e.saveFile;return Object(o.useCallback)(Object(m.a)(u.a.mark((function e(){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:o=e.sent,a(o);case 4:case"end":return e.stop()}}),e)}))),[n,a,t])}({url:n,downloadFile:a,saveFile:r});return l.a.createElement(c.a,{className:t,onClick:i},s)}));R.displayName="StaticDownloadButton";var D=R;n.d(t,"Download1Impl",(function(){return x}));var x=function(){var e=Object(o.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1];return l.a.createElement(r.a,{title:"Download 1",questions:L},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Attachment Download"),l.a.createElement(c.a,{className:"mr-2",href:b,target:"_blank",download:"1.png"},"Download Link"),l.a.createElement(D,{className:"mr-2",url:b,downloadFile:y,saveFile:g},"Axios Download"),l.a.createElement(D,{className:"mr-2",url:b,downloadFile:j,saveFile:g},"Fetch Download"),l.a.createElement(D,{className:"mr-2",url:b,downloadFile:k,saveFile:g},"Request Download")),l.a.createElement("div",null,l.a.createElement("h3",null,"Inline Download"),l.a.createElement(c.a,{className:"mr-2",href:v,target:"_blank",download:"1.md"},"Download Link"),l.a.createElement(D,{className:"mr-2",url:v,downloadFile:y,saveFile:E},"Axios Download"),l.a.createElement(D,{className:"mr-2",url:v,downloadFile:j,saveFile:E},"Fetch Download"),l.a.createElement(D,{className:"mr-2",url:v,downloadFile:k,saveFile:E},"Request Download")),l.a.createElement("div",null,l.a.createElement("h3",null,"Dynamic Download"),l.a.createElement("form",{action:w,method:"GET"},l.a.createElement(s.a,{id:"count",name:"count",label:"Count",value:n,onChange:i}),l.a.createElement("div",null,l.a.createElement(c.a,{className:"mr-2",type:"submit"},"Submit")),l.a.createElement("div",null,l.a.createElement("h6",null,"Save File Manually"),l.a.createElement(N,{className:"mr-2",count:n,downloadFile:y,saveFile:g},"Axios Download"),l.a.createElement(N,{className:"mr-2",count:n,downloadFile:j,saveFile:g},"Fetch Download"),l.a.createElement(N,{className:"mr-2",count:n,downloadFile:k,saveFile:g},"Request Download")),l.a.createElement("div",null,l.a.createElement("h6",null,"Use Library"),l.a.createElement(N,{className:"mr-2",count:n,downloadFile:y,saveFile:E},"Axios Download"),l.a.createElement(N,{className:"mr-2",count:n,downloadFile:j,saveFile:E},"Fetch Download"),l.a.createElement(N,{className:"mr-2",count:n,downloadFile:k,saveFile:E},"Request Download"))))))},U=Object(o.memo)(x);U.displayName="Download1";t.default=U}}]);
//# sourceMappingURL=dom__Download1.aec6c759.chunk.js.map