(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[5],{133:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(129),o=a(38),l=a(124),c=a(25),s=a(121),m=a(122),u=a(123),g=a(39),d=a(65),p=a(47),b=Object(d.a)((function(e){return{Question:{fontWeight:500},Answer:{marginTop:e.spacing(1.5),padding:0,fontSize:14,backgroundColor:p.a[50],border:"1px solid ".concat(p.a[400]),borderRadius:6,"& p":{padding:e.spacing(0,2.5)},"& ol,ul":{margin:e.spacing(1.5,0)},"& img":{maxWidth:"100%"}},References:{margin:e.spacing(3,0,0),"& ol":{marginTop:e.spacing(1)},"& li":{fontSize:14,fontWeight:500,marginBottom:e.spacing(1)}}}})),f=Object(n.memo)((function(e){var t=e.index,a=e.question,n=e.answer,l=e.references,d=b(),p=Object(g.a)(!1),f=Object(c.a)(p,2),h=f[0],E=f[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{button:!0,onClick:E},i.a.createElement(m.a,{classes:{primary:d.Question}},t,". ",a)),i.a.createElement(u.a,{in:h,timeout:"auto"},i.a.createElement(r.a,{className:d.Answer},n),!!l&&l.length&&i.a.createElement(r.a,{className:d.References},i.a.createElement(o.a,{variant:"h4"},"References"),i.a.createElement("ol",null,l.map((function(e){var t=e.name,a=e.url;return i.a.createElement("li",{key:a},i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))}))))))}));f.displayName="QuestionItem";var h=f,E=Object(d.a)((function(e){return{Container:{marginTop:e.spacing(4)},Content:{marginTop:e.spacing(2.5)},Questions:{marginTop:e.spacing(4),"& code":{fontFamily:"'Courier New', Courier, monospace",fontSize:14,fontWeight:600,color:"rgb(219, 104, 27)"}}}})),C=Object(n.memo)((function(e){var t=e.title,a=e.questions,n=e.children,c=E();return i.a.createElement(r.a,{className:c.Container},i.a.createElement(o.a,{variant:"h2"},t),i.a.createElement(r.a,{className:c.Content},n),i.a.createElement(r.a,{className:c.Questions},i.a.createElement(o.a,{variant:"h3"},"Questions"),i.a.createElement(r.a,null,i.a.createElement(l.a,null,a.map((function(e,t){return i.a.createElement(h,Object.assign({key:t,index:t+1},e))}))))))}));C.displayName="QuestionPage";t.a=C},134:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(136),o=a.n(r),l=a(464),c=a(450),s=a(135),m=a.n(s),u=Object(n.memo)((function(e){var t=e.className,a=e.children,n=e.style,r=void 0===n?c.a:n,s=e.language;return i.a.createElement("div",{className:o()(m.a.Code,t)},i.a.createElement(l.a,{language:s,style:r},a))}));u.displayName="Code",t.a=u},135:function(e,t,a){e.exports={Code:"styles_Code__2Axvp"}},478:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(133),o=a(134),l=[{question:"How to add GitLab CI pipeline for a repo?",answer:i.a.createElement("div",null,i.a.createElement("p",null,"Add ",i.a.createElement("code",null,".gitlab-ci.yml")," to root project directory."),i.a.createElement(o.a,{language:"yaml"},"image: 'node:12.10.0'\n\nstages:\n  - test\n  - build\n\ncache:\n  key: ${CI_COMMIT_REF_SLUG}\n  paths:\n    - node_modules/\n\nbefore_script:\n  - npm i -g yarn\n  - yarn\n\ntest:\n  stage: test\n  script:\n    - yarn test --coverage\n  coverage: /All\\sfiles.*?\\s+(\\d+.\\d+)/\n\nbuild:\n  stage: build\n  script:\n    - yarn build"),i.a.createElement("p",null,"Push config to GitLab"),i.a.createElement(o.a,{language:"bash"},'git add .gitlab-ci.yml\ngit commit -m "Add .gitlab-ci.yml"\ngit push'),i.a.createElement("p",null,"Configure a Runner: Go to ",i.a.createElement("b",null,"Settings \u2794 CI/CD")," to set up your own Runner or use a Shared Runner")),references:[{name:"[GitLab] GitLab CI/CD Pipeline Configuration Reference",url:"https://docs.gitlab.com/ee/ci/yaml/README.html"},{name:"[Medium] React continuous deployment with gitlab-ci and S3",url:"https://medium.com/@trevlinp/react-continuous-deployment-with-gitlab-ci-and-s3-46987e30dc54"},{name:"[GitLab] Cache dependencies in GitLab CI/CD",url:"https://docs.gitlab.com/ee/ci/caching/"},{name:"[GitLab] Getting started with GitLab CI/CD",url:"https://docs.gitlab.com/ee/ci/quick_start/README.html"},{name:"[GitLab] GitLab CI Templates",url:"https://gitlab.com/gitlab-org/gitlab-foss/tree/master/lib/gitlab/ci/templates"},{name:"[GitLab] GitLab-examples",url:"https://gitlab.com/gitlab-examples"},{name:"[GitLab] Introduction to CI/CD with GitLab",url:"https://docs.gitlab.com/ee/ci/introduction/index.html"},{name:"[GitLab] GitLab CI/CD",url:"https://docs.gitlab.com/ee/ci/"},{name:"[GitLab] Test coverage regex does not work when output has color",url:"https://gitlab.com/gitlab-org/gitlab-foss/issues/29642"},{name:"[stackoverflow] Code coverage from Jest to stdout to GitLab",url:"https://stackoverflow.com/questions/50798747/code-coverage-from-jest-to-stdout-to-gitlab"}]}];a.d(t,"GitLab1Component",(function(){return c}));var c=function(){return i.a.createElement(r.a,{title:"GitLab 1",questions:l})},s=Object(n.memo)(c);s.displayName="GitLab1";t.default=s}}]);
//# sourceMappingURL=ci_cd__GitLab1.92bc70bc.chunk.js.map