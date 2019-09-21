(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[22],{343:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(35),l=n(37),i=[{question:"How to create an React app with TypeScript support?",answer:a.a.createElement(l.a,{language:"bash"},"npx create-react-app MyApp --typescript")},{question:"How to add TypeScript to a current project?",answer:a.a.createElement("div",null,a.a.createElement("p",null,"Install ",a.a.createElement("code",null,"typescript")," and type definitions"),a.a.createElement(l.a,{language:"bash"},"yarn add typescript @types/node @types/react @types/react-dom @types/jest"),a.a.createElement("p",null,"Add ",a.a.createElement("code",null,"tsconfig.json")," to the root project directory"),a.a.createElement(l.a,{language:"json"},'{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "noEmit": true,\n    "jsx": "react",\n    "baseUrl": "src",\n    "downlevelIteration": true\n  },\n  "include": ["src"]\n}'),a.a.createElement("p",null,"Rename ",a.a.createElement("code",null,"js")," files into ",a.a.createElement("code",null,"ts")," and ",a.a.createElement("code",null,"jsx")," ","files into ",a.a.createElement("code",null,"tsx"))),references:[{name:"[Create React App] Adding TypeScript",url:"https://create-react-app.dev/docs/adding-typescript"}]},{question:"How to add apply ESLint to TypeScript project?",answer:a.a.createElement("div",null,a.a.createElement("p",null,"Install ",a.a.createElement("code",null,"prettier")," and ",a.a.createElement("code",null,"eslint"),", parser, configs and plugins for ESLint"),a.a.createElement(l.a,{language:"bash"},"yarn add prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-config-airbnb eslint-config-prettier eslint-config-react eslint-plugin-react-hooks"),a.a.createElement("p",null,"Add ",a.a.createElement("code",null,".eslintrc")," to the root project directory"),a.a.createElement(l.a,{language:"json"},'{\n  "parser": "@typescript-eslint/parser",\n  "env": {\n    "node": true,\n    "browser": true,\n    "es6": true,\n    "mocha": true,\n    "jest": true\n  },\n  "plugins": [\n    "react",\n    "@typescript-eslint",\n    "import",\n    "prettier",\n    "react-hooks"\n  ],\n  "extends": [\n    "airbnb",\n    "plugin:jsx-a11y/recommended",\n    "plugin:react/recommended",\n    "plugin:@typescript-eslint/recommended",\n    "prettier/@typescript-eslint",\n    "plugin:prettier/recommended"\n  ],\n  "globals": {\n    "document": true,\n    "window": true\n  },\n  "parserOptions": {\n    "ecmaVersion": 2018,\n    "sourceType": "module",\n    "ecmaFeatures": {\n      "jsx": true\n    }\n  },\n  "rules": {\n    "arrow-body-style": "warn",\n    "no-sparse-arrays": "off",\n    "@typescript-eslint/explicit-function-return-type": "off",\n    "@typescript-eslint/no-explicit-any": "off",\n    "@typescript-eslint/no-non-null-assertion": "off",\n    "@typescript-eslint/no-object-literal-type-assertion": "off",\n    "jsx-a11y/label-has-associated-control": "off",\n    "jsx-a11y/no-onchange": "off",\n    "react/jsx-curly-newline": "off",\n    "react/jsx-one-expression-per-line": "off",\n    "react/prop-types": "off",\n    "react-hooks/exhaustive-deps": "warn",\n    "react-hooks/rules-of-hooks": "error",\n    "import/no-unresolved": "off",\n    "prettier/prettier": [\n      "warn",\n      { "singleQuote": true, "trailingComma": "all" }\n    ],\n    "react/jsx-filename-extension": [\n      "error",\n      {\n        "extensions": [".jsx", ".tsx"]\n      }\n    ],\n    "no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }]\n  },\n  "settings": {\n    "react": {\n      "version": "detect"\n    }\n  }\n}'),a.a.createElement("p",null,"Add ",a.a.createElement("code",null,".prettierrc")," to the root project directory"),a.a.createElement(l.a,{language:"json"},'{ "singleQuote": true, "trailingComma": "all" }'),a.a.createElement("p",null,"Add or update ",a.a.createElement("code",null,".vscode/settings.json")),a.a.createElement(l.a,{language:"json"},'{\n  "eslint.enable": true,\n  "eslint.validate": [\n    "javascript",\n    "javascriptreact",\n    { "language": "typescript", "autoFix": true },\n    { "language": "typescriptreact", "autoFix": true }\n  ],\n  "eslint.autoFixOnSave": true,\n  "[javascript]":  {\n    "editor.formatOnSave":  false,\n  },\n  "[javascriptreact]":  {\n    "editor.formatOnSave":  false,\n  },\n  "[typescript]":  {\n    "editor.formatOnSave":  false,\n  },\n  "[typescriptreact]":  {\n    "editor.formatOnSave":  false,\n  }\n}')),references:[{name:"[DEV] Using ESLint and Prettier in a TypeScript Project",url:"https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb"},{name:"[DEV] How To Set Up ESLint, TypeScript, Prettier with Create React App",url:"https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675"},{name:"Linting Your React+Typescript Project With ESlint and Prettier",url:"https://dorshinar.me/linting-your-react+typescript-project-with-eslint-and-prettier"}]}];n.d(t,"TypeScript1Component",function(){return o});var o=function(){return a.a.createElement(s.a,{title:"TypeScript 1",questions:i})},c=Object(r.memo)(o);t.default=c},35:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(36),l=n.n(s),i=Object(r.memo)(function(e){var t=e.title,n=e.questions,r=e.children;return a.a.createElement("div",{className:l.a.Container},a.a.createElement("h2",{className:l.a.Title},t),a.a.createElement("div",{className:l.a.Content},r),a.a.createElement("div",{className:l.a.Questions},a.a.createElement("h3",null,"Questions"),a.a.createElement("div",null,n.map(function(e,t){var n=e.question,r=e.answer,s=e.references;return a.a.createElement("details",{key:t},a.a.createElement("summary",{className:l.a.Question},a.a.createElement("span",{className:l.a.Index},t+1,".")," ",n),a.a.createElement("div",{className:l.a.Answer},r),s&&s.length&&a.a.createElement("div",{className:l.a.References},a.a.createElement("h4",null,"References"),a.a.createElement("ol",null,s.map(function(e){var t=e.name,n=e.url;return a.a.createElement("li",{key:n},a.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t))}))))}))))});i.displayName="Question",t.a=i},36:function(e,t,n){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},37:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(13),l=n.n(s),i=n(350),o=n(349),c=n(38),p=n.n(c),u=Object(r.memo)(function(e){var t=e.className,n=e.children,r=e.style,s=void 0===r?o.a:r,c=e.language;return a.a.createElement("div",{className:l()(p.a.Code,t)},a.a.createElement(i.a,{language:c,style:s},n))});u.displayName="Code",t.a=u},38:function(e,t,n){e.exports={Code:"styles_Code__2Axvp"}}}]);
//# sourceMappingURL=22.174362c1.chunk.js.map