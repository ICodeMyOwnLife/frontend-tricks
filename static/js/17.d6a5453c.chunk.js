(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[17],{311:function(e,t,n){e.exports={StyleEditor:"styles_StyleEditor__3Ea5_"}},33:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(34),s=n.n(l),r=Object(a.memo)((function(e){var t=e.title,n=e.questions,a=e.children;return i.a.createElement("div",{className:s.a.Container},i.a.createElement("h2",{className:s.a.Title},t),i.a.createElement("div",{className:s.a.Content},a),i.a.createElement("div",{className:s.a.Questions},i.a.createElement("h3",null,"Questions"),i.a.createElement("div",null,n.map((function(e,t){var n=e.question,a=e.answer,l=e.references;return i.a.createElement("details",{key:t},i.a.createElement("summary",{className:s.a.Question},i.a.createElement("span",{className:s.a.Index},t+1,".")," ",n),i.a.createElement("div",{className:s.a.Answer},a),l&&l.length&&i.a.createElement("div",{className:s.a.References},i.a.createElement("h4",null,"References"),i.a.createElement("ol",null,l.map((function(e){var t=e.name,n=e.url;return i.a.createElement("li",{key:n},i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))})))))})))))}));r.displayName="Question",t.a=r},335:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(33),s=n(35),r=[{question:"How to live edit elements and styles?",answer:i.a.createElement("div",null,i.a.createElement("p",null,"Set the ",i.a.createElement("code",null,"contenteditable")," attribute on nearly any HTML element to make it editable"),i.a.createElement(s.a,{language:"markup"},'<div class="EditableText" contenteditable="true">\n  <p>Lorem ipsum dolor sit amet ...</p>\n</div>'),i.a.createElement("p",null,"For ",i.a.createElement("code",null,"style")," tag, we have to make it appear using"," ",i.a.createElement("code",null,"display: block")),i.a.createElement(s.a,{language:"scss"},".StyleEditor {\n  display: block;\n  padding: 20px;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 16px;\n  font-weight: bold;\n  color: #ecffca;\n  background-color: black;\n  white-space: pre;\n  caret-color: aquamarine;\n}")),references:[{name:"[MDN] contenteditable",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"},{name:"[MDN] Making content editable",url:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"},{name:"[Medium] Make a HTML element editable with contenteditable",url:"https://medium.com/@samanthaming/make-a-html-element-editable-with-contenteditable-abe7358640e"},{name:"[Stack Overflow] Why does React warn against an contentEditable component having children managed by React?",url:"https://stackoverflow.com/questions/49639144/why-does-react-warn-against-an-contenteditable-component-having-children-managed"}]}],u=n(311),o=n.n(u);n.d(t,"LiveEdit1Impl",(function(){return c}));var c=function(){return i.a.createElement(l.a,{title:"Live Edit 1",questions:r},i.a.createElement("div",{className:"EditableText",contentEditable:!0,suppressContentEditableWarning:!0},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula risus, viverra ac porta non, volutpat sed est. Integer lectus odio, convallis vitae tincidunt vitae, semper vitae tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quis aliquet nibh. Pellentesque erat metus, congue ut dui quis, dapibus porta sem. Cras porttitor nisl arcu, in rutrum est ornare eget. Fusce quis eleifend purus, et interdum sapien. Etiam rutrum est a erat accumsan auctor."),i.a.createElement("p",null,"Aliquam non ornare turpis. Pellentesque laoreet efficitur libero euismod molestie. Quisque imperdiet arcu nunc, ut cursus tellus elementum eu. Nullam id dui nisi. Quisque maximus enim libero, eleifend faucibus quam porta tincidunt. Quisque vestibulum, libero vitae viverra luctus, ligula metus elementum ex, ut varius dui elit in nunc. Morbi elementum faucibus aliquam. Sed commodo sapien eu odio maximus pretium."),i.a.createElement("p",null,"Morbi ut ligula sollicitudin, fringilla orci vel, lobortis est. Fusce consequat tellus eget dolor egestas, sit amet suscipit ex luctus. Nulla venenatis finibus sapien eu blandit. Nunc porttitor nulla ac hendrerit gravida. Pellentesque non tristique turpis, at aliquet tellus. Suspendisse potenti. Fusce tempus turpis non fermentum placerat. Nunc hendrerit mi velit. Duis ultricies facilisis lorem vel scelerisque.")),i.a.createElement("style",{className:o.a.StyleEditor,contentEditable:!0,suppressContentEditableWarning:!0},".EditableText {\n  margin-bottom: 20px;\n  padding: 20px;\n  border: 1px solid lightgray;\n}\n\n.EditableText p {\n  margin: 0 0 12px;\n}\n"))},m=Object(a.memo)(c);m.displayName="LiveEdit1";t.default=m},34:function(e,t,n){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},35:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(37),s=n.n(l),r=n(348),u=n(347),o=n(36),c=n.n(o),m=Object(a.memo)((function(e){var t=e.className,n=e.children,a=e.style,l=void 0===a?u.a:a,o=e.language;return i.a.createElement("div",{className:s()(c.a.Code,t)},i.a.createElement(r.a,{language:o,style:l},n))}));m.displayName="Code",t.a=m},36:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}}}]);
//# sourceMappingURL=17.d6a5453c.chunk.js.map