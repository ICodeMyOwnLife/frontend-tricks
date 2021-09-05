/* eslint-disable react/no-unescaped-entities */
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `What are Module patterns in ES5?`,
    answer: (
      <div>
        <p>
          EcmaScript 5 and earlier editions were not designed with modules in
          mind. Over time, developers came up with different patterns to
          simulate modular design in JavaScript.
        </p>
        <p>
          <b>Immediately Invoked Function Expression (IIFE)</b>: An Immediately
          Invoked Function Expression (IIFE) is an anonymous function that is
          invoked when it is declared.
        </p>
        <p>
          <b>Revealing Module pattern</b>: The Revealing Module pattern is
          similar to an IIFE, but we assign the return value to a variable:
        </p>
        <p>
          Below is an example of a JavaScript file in IIFE/Revealing Module
          pattern generated using Rollup with{' '}
          <code>output.format = 'iife'</code> (<code>dist/main.iife.js</code>)
        </p>
        <CodeViewer language="javascript">
          {`var cbUtils = (function (cbMathFun) {
    'use strict';

    var info = (...args) => console.info(...args);

    var error = (...args) => console.error(...args);

    var random = (from, to) => Math.random() * (from - to) + from;

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const fetchValue = async () => {
        await delay(500);
        return cbMathFun.calculate(random(8, 12), random(5, 8));
    };
    const log = async (factory) => {
        try {
            const value = await factory();
            info(value);
        }
        catch (err) {
            error(err);
        }
    };

    const run = async () => {
        await delay(500);
        await log(fetchValue);
    };
    run();

    return run;

}(cbMathFun));`}
        </CodeViewer>
        <p>
          We can use this file directly in <code>script</code> tag, following
          external dependencies (<code>index.iife.html</code>):
        </p>
        <CodeViewer language="markup">
          {`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IIFE</title>
  </head>
  <body>
    <script src="node_modules/cb-math-fun/dist/index.umd.js"></script>
    <script src="dist/main.iife.js"></script>
  </body>
</html>`}
        </CodeViewer>
        <p>Immediately Invoked Function Expressions allow us to:</p>
        <ul>
          <li>
            encapsulate code complexity inside IIFE so we don't have to
            understand what the IIFE code does
          </li>
          <li>
            define variables inside the IIFE so they don't pollute the global
            scope (var statements inside the IIFE remain within the IIFE's
            closure)
          </li>
        </ul>
        <p>but they don't provide a mechanism for dependency management.</p>
      </div>
    ),
    references: [
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What are JavaScript Module formats?`,
    answer: (
      <div>
        <p>A module format is the syntax we can use to define a module.</p>
        <p>Some of the most widely adapted and well known formats are:</p>
        <ul>
          <li>Asynchronous Module Definition (AMD)</li>
          <li>CommonJS</li>
          <li>Universal Module Definition (UMD)</li>
          <li>System.register</li>
          <li>ES6 module format</li>
        </ul>
      </div>
    ),
    references: [
      {
        name: `Learn the basics of the JavaScript module system and build your own library`,
        url: `https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/`,
      },
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What is Asynchronous Module Definition (AMD) format?`,
    answer: (
      <div>
        <p>
          The AMD format is used in browsers and uses a <code>define</code>{' '}
          function to define modules.
        </p>
        <p>
          Below is an example of a JavaScript file in AMD format generated using
          Rollup with <code>output.format = 'amd'</code> (
          <code>dist/main.amd.js</code>)
        </p>
        <CodeViewer language="javascript">
          {`define(['cb-math-fun'], function (cbMathFun) { 'use strict';

var info = (...args) => console.info(...args);

var error = (...args) => console.error(...args);

var random = (from, to) => Math.random() * (from - to) + from;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchValue = async () => {
    await delay(500);
    return cbMathFun.calculate(random(8, 12), random(5, 8));
};
const log = async (factory) => {
    try {
        const value = await factory();
        info(value);
    }
    catch (err) {
        error(err);
    }
};

const run = async () => {
    await delay(500);
    await log(fetchValue);
};
run();

return run;

});`}
        </CodeViewer>
        <p>We can use this file on browser with support from an AMD loader:</p>
        <ul>
          <li>
            <a href="https://requirejs.org/">RequireJS</a>
          </li>
          <li>
            <a href="https://github.com/cujojs/curl">curl</a>
          </li>
          <li>
            <a href="https://github.com/zazl/lsjs">lsjs</a>
          </li>
          <li>
            <a href="http://dojotoolkit.org/">Dojo</a>
          </li>
        </ul>
        <p>
          In this example we use RequireJS as the loader for our AMD module.{' '}
          <code>index.amd.html</code>:
        </p>
        <CodeViewer language="markup">
          {`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AMD</title>
  </head>
  <body>
    <script data-main="app.js" src="node_modules/requirejs/require.js"></script>
  </body>
</html>`}
        </CodeViewer>
        <p>
          <code>app.js</code>:
        </p>
        <CodeViewer language="javascript">
          {`requirejs.config({
  packages: [
    {
      name: "cb-math-fun",
      location: "node_modules/cb-math-fun/dist",
      main: "index.umd.js",
    },
  ],
});

requirejs(["dist/main.amd.js"]);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] AMD`,
        url: `https://github.com/amdjs/amdjs-api/blob/master/AMD.md`,
      },
      {
        name: `[Require.JS] Why AMD?`,
        url: `https://requirejs.org/docs/whyamd.html`,
      },
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What is CommonJS format?`,
    answer: (
      <div>
        <p>
          The CommonJS format is used in Node.js and uses <code>require</code>{' '}
          and <code>module.exports</code> to define dependencies and modules.
        </p>
        <p>
          Below is an example of a JavaScript file in CommonJS format generated
          using Rollup with <code>output.format = 'cjs'</code> (
          <code>dist/main.common.js</code>)
        </p>
        <CodeViewer language="javascript">
          {`'use strict';

var cbMathFun = require('cb-math-fun');

var info = (...args) => console.info(...args);

var error = (...args) => console.error(...args);

var random = (from, to) => Math.random() * (from - to) + from;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchValue = async () => {
    await delay(500);
    return cbMathFun.calculate(random(8, 12), random(5, 8));
};
const log = async (factory) => {
    try {
        const value = await factory();
        info(value);
    }
    catch (err) {
        error(err);
    }
};

const run = async () => {
    await delay(500);
    await log(fetchValue);
};
run();

module.exports = run;`}
        </CodeViewer>
        <p>This file can be run using Node.js</p>
        <CodeViewer language="bash">node dist/main.common.js</CodeViewer>
      </div>
    ),
    references: [
      {
        name: `CommonJS`,
        url: `http://www.commonjs.org/`,
      },
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What is Universal Module Definition (UMD) format?`,
    answer: (
      <div>
        <p>The UMD format can be used both in the browser and in Node.js.</p>
        <p>Regular module:</p>
        <ul>
          Regular Module
          <li>
            <a href="https://github.com/umdjs/umd/blob/master/templates/amdWeb.js">
              amdWeb.js
            </a>{' '}
            - Defines a module that works with AMD and browser globals.
          </li>
          <li>
            <a href="https://github.com/umdjs/umd/blob/master/templates/returnExports.js">
              returnExports.js
            </a>{' '}
            - Defines a module that works in Node, AMD and browser globals.
          </li>
          <li>
            <a href="https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js">
              commonjsStrict.js
            </a>{' '}
            - Defines a module that works with more CommonJS runtimes, and for
            modules that will have a circular dependency.
          </li>
        </ul>
        <p>
          Below is an example of a JavaScript file in UMD format generated using
          Rollup with <code>output.format = 'umd'</code> (
          <code>dist/main.umd.js</code>)
        </p>
        <CodeViewer language="javascript">
          {`(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('cb-math-fun')) :
    typeof define === 'function' && define.amd ? define(['cb-math-fun'], factory) :
    (global = global || self, global.cbUtils = factory(global.cbMathFun));
}(this, (function (cbMathFun) { 'use strict';

    var info = (...args) => console.info(...args);

    var error = (...args) => console.error(...args);

    var random = (from, to) => Math.random() * (from - to) + from;

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const fetchValue = async () => {
        await delay(500);
        return cbMathFun.calculate(random(8, 12), random(5, 8));
    };
    const log = async (factory) => {
        try {
            const value = await factory();
            info(value);
        }
        catch (err) {
            error(err);
        }
    };

    const run = async () => {
        await delay(500);
        await log(fetchValue);
    };
    run();

    return run;

})));`}
        </CodeViewer>
        <p>This file can be run using Node.js</p>
        <CodeViewer language="bash">node dist/main.umd.js</CodeViewer>
        <p>
          or used directly in <code>script</code> tag, following external
          dependencies. <code>index.umd.html</code>:
        </p>
        <CodeViewer language="markup">
          {`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UMD</title>
  </head>
  <body>
    <script src="node_modules/cb-math-fun/dist/index.umd.js"></script>
    <script src="dist/main.umd.js"></script>
  </body>
</html>`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] UMD`,
        url: `https://github.com/umdjs/umd`,
      },
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What is System.register format?`,
    answer: (
      <div>
        <p>
          System.register can be considered as a new module format designed to
          support the exact semantics of ES6 modules within ES5.
        </p>
        <p>
          To run the format, a suitable loader implementation needs to be used
          that understands how to execute it. Currently these include{' '}
          <a href="https://github.com/systemjs/systemjs">SystemJS</a>,{' '}
          <a href="https://github.com/systemjs/builder#sfx-bundles">
            SystemJS Self-Executing Bundles
          </a>{' '}
          and{' '}
          <a href="https://github.com/caridy/es6-micro-loader">
            ES6 Micro Loader
          </a>
          .
        </p>
        <p>
          Below is an example of a JavaScript file in System.register format
          generated using Rollup with <code>output.format = 'system'</code> (
          <code>dist/main.system.js</code>)
        </p>
        <CodeViewer language="javascript">
          {`System.register(['cb-math-fun'], function (exports) {
    'use strict';
    var calculate;
    return {
        setters: [function (module) {
            calculate = module.calculate;
        }],
        execute: function () {

            var info = (...args) => console.info(...args);

            var error = (...args) => console.error(...args);

            var random = (from, to) => Math.random() * (from - to) + from;

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            const fetchValue = async () => {
                await delay(500);
                return calculate(random(8, 12), random(5, 8));
            };
            const log = async (factory) => {
                try {
                    const value = await factory();
                    info(value);
                }
                catch (err) {
                    error(err);
                }
            };

            const run = async () => {
                await delay(500);
                await log(fetchValue);
            };
            run();
            exports('default', run);

        }
    };
});`}
        </CodeViewer>
        <p>
          In this example we'll use SystemJS as the loader for this module.{' '}
          <code>index.system.html</code>:
        </p>
        <CodeViewer language="markup">
          {`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>System</title>
  </head>
  <body>
    <script src="node_modules/systemjs/dist/system.min.js"></script>
    <script type="systemjs-importmap">
      {
        "imports": {
          "cb-math-fun": "./node_modules/cb-math-fun/dist/index.system.js"
        }
      }
    </script>
    <script>
      System.import("./dist/main.system.js");
    </script>
  </body>
</html>`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] es-module-loader:system-register`,
        url: `https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register.md`,
      },
      {
        name: `[GitHub] SystemJS`,
        url: `https://github.com/systemjs/systemjs`,
      },
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What is ES module format?`,
    answer: (
      <div>
        <p>
          As of ES6, JavaScript also supports a native module format. It uses an
          <code>export</code> token to export a module's public API and an
          <code>import</code> token to import parts that a module exports.
        </p>
        <p>
          <b>Why are ES modules better than CommonJS Modules?</b>
        </p>
        <p>
          ES modules are an official standard and the clear path forward for
          JavaScript code structure, whereas CommonJS modules are an
          idiosyncratic legacy format that served as a stopgap solution before
          ES modules had been proposed. ES modules allow static analysis that
          helps with optimizations like tree-shaking and scope-hoisting, and
          provide advanced features like circular references and live bindings.
        </p>
        <p>
          <b>How bindings work</b>
        </p>
        <p>
          ES modules export live bindings, not values, so values can be changed
          after they are initially imported as per this demo:
        </p>
        <CodeViewer language="javascript">
          {`// incrementer.js
export let count = 0;

export function increment() {
  count += 1;
}`}
        </CodeViewer>
        <CodeViewer language="javascript">
          {`// main.js
import { count, increment } from './incrementer.js';

console.log(count); // 0
increment();
console.log(count); // 1

count += 1; // Error — only incrementer.js can change this`}
        </CodeViewer>
        <p>
          Below is an example of a JavaScript file in ES module format generated
          using Rollup with <code>output.format = 'es'</code> (
          <code>dist/main.es.js</code>)
        </p>
        <CodeViewer language="javascript">
          {`import { calculate } from 'cb-math-fun';

var info = (...args) => console.info(...args);

var error = (...args) => console.error(...args);

var random = (from, to) => Math.random() * (from - to) + from;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchValue = async () => {
    await delay(500);
    return calculate(random(8, 12), random(5, 8));
};
const log = async (factory) => {
    try {
        const value = await factory();
        info(value);
    }
    catch (err) {
        error(err);
    }
};

const run = async () => {
    await delay(500);
    await log(fetchValue);
};
run();

export default run;`}
        </CodeViewer>
        <p>
          Some of modern browsers support <code>import</code>,{' '}
          <code>export</code> and Dynamic import but currently no browsers
          supports Import Maps. In this example, we use{' '}
          <a href="https://github.com/guybedford/es-module-shims">
            ES Module Shims
          </a>{' '}
          to polyfill the Import Maps feature. <code>index.es.html</code>:
        </p>
        <CodeViewer language="markup">
          {`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ES</title>
  </head>
  <body>
    <script
      defer
      src="node_modules/es-module-shims/dist/es-module-shims.min.js"
    ></script>
    <script type="importmap-shim">
      {
        "imports": {
          "cb-math-fun": "./node_modules/cb-math-fun/dist/index.m.js"
        }
      }
    </script>
    <script type="module-shim" src="dist/main.es.js"></script>
  </body>
</html>`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] JavaScript Modules`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules`,
      },
      {
        name: `[Rollup] ES Module Syntax`,
        url: `https://rollupjs.org/guide/en/#es-module-syntax`,
      },
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
    ],
  },
  {
    question: `What is the difference between module loaders and module bundlers?`,
    answer: (
      <div>
        <p>
          A module loader interprets and loads a module written in a certain
          module format at runtime.
        </p>
        <p>Some of popular module loaders are:</p>
        <ul>
          <li>
            <a href="http://requirejs.org/">RequireJS</a>: loader for modules in
            AMD format
          </li>
          <li>
            <a href="https://github.com/systemjs/systemjs">SystemJS</a>: loader
            for modules in AMD, CommonJS, UMD or System.register format
          </li>
        </ul>
        <p>
          A module bundler replaces a module loader and generates a bundle of
          all code at build time.
        </p>
        <p>Some of popular module bundlers are:</p>
        <ul>
          <li>
            <a href="http://browserify.org/">Browserify</a>: bundler for
            CommonJS modules
          </li>
          <li>
            <a href="https://webpack.github.io/">Webpack</a>: bundler for AMD,
            CommonJS, ES6 modules
          </li>
          <li>
            <a href="https://rollupjs.org/guide/en/">Rollup</a>: bundler for ES
            modules
          </li>
          <li>
            <a href="https://github.com/parcel-bundler/parcel">Parcel</a>
          </li>
          <li>
            <a href="https://fuse-box.org/">FuseBox</a>
          </li>
          <li>
            <a href="https://www.snowpack.dev/">Snowpack</a>
          </li>
        </ul>
      </div>
    ),
    references: [
      {
        name: `A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers`,
        url: `https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/`,
      },
      {
        name: `[Medium] JavaScript Bundlers, a Comparison`,
        url: `https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364`,
      },
    ],
  },
];

export default questions;
