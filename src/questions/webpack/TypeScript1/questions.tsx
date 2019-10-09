import React from 'react';
import { QuestionInfo } from 'types/app-common';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to use webpack with TypeScript (application and config code in TypeScript, plus tree-shaking)?`,
    answer: (
      <div>
        <p>Install dependencies.</p>{' '}
        <p>
          <b>Notice:</b> We install <code>@babel/core</code> and{' '}
          <code>@babel/preset-env</code> instead of the old version{' '}
          <code>babel-core</code> and <code>babel-preset-env</code> packages
        </p>
        <Code language="bash">
          yarn add typescript ts-loader babel-loader @babel/core
          @babel/preset-env ts-node cross-env tsconfig-paths
          tsconfig-paths-webpack-plugin @types/webpack @types/webpack-dev-server
          @types/webpack-merge @types/html-webpack-plugin
        </Code>
        <p>
          <b>Write webpack configs in TypeScript:</b>
        </p>
        <p>
          Create file <code>config/tsconfig.json</code> used for webpack configs
        </p>
        <Code language="json">
          {`{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "esModuleInterop": true
  }
}`}
        </Code>
        <p>
          Create common webpack config file:{' '}
          <code>config/webpack.config.common.ts</code>
        </p>
        <Code language="typescript">
          {`import { resolve } from 'path';
import { realpathSync } from 'fs';
import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';

const DIR_ROOT = realpathSync(process.cwd());
export const resolvePath = (relativePath: string) =>
  resolve(DIR_ROOT, relativePath);

// Add this to fix "Failed to load tsconfig.json: Missing baseUrl in compilerOptions #32". See https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-478042178
delete process.env.TS_NODE_PROJECT;

// This resolve plugin makes use of paths and baseUrl of tsconfig.json to load modules so that we can use absolute imports and aliases
const tsconfigPathsPlugin = new TsconfigPathsPlugin();

const htmlPlugin = new HtmlPlugin({
  template: resolvePath('public/index.html'),
});

const config: Configuration = {
  entry: resolvePath('src/index.ts'),
  output: { path: resolvePath('dist') },
  resolve: {
    // Must have .js
    extensions: ['.ts', '.js'],
    plugins: [tsconfigPathsPlugin],
  },
  module: {
    rules: [
      {
        test: /\\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        include: resolvePath('src'),
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader'],
        // Flagging it as side effect tells webpack to not consider css file as dead code
        sideEffects: true,
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;`}
        </Code>
        <p>
          Create webpack config file for development environment:{' '}
          <code>config/webpack.config.dev.ts</code>
        </p>
        <Code language="typescript">
          {`import merge from 'webpack-merge';
import common from './webpack.config.common';

const config = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 5000,
  },
});

export default config;`}
        </Code>
        <p>
          Create webpack config file for production environment:{' '}
          <code>config/webpack.config.prod.ts</code>
        </p>
        <Code language="typescript">
          {`import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import common from './webpack.config.common';

const cleanPlugin = new CleanWebpackPlugin({ verbose: true });

const config = merge(common, {
  mode: 'production',
  plugins: [cleanPlugin],
});

export default config;`}
        </Code>
        <p>
          Create <code>.babelrc</code> in root project directory.
        </p>
        <p>
          <b>Notice:</b> Use <code>@babel/preset-env</code> instead of{' '}
          <code>env</code>
        </p>
        <Code language="json">
          {`{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ]
}`}
        </Code>
        <p>
          Add <code>start</code> and <code>build</code> scripts to{' '}
          <code>package.json</code>. These scripts make use of{' '}
          <code>ts-node</code> to run TypeScript files on the fly,{' '}
          <code>tsconfig-paths</code> to use the configs in{' '}
          <code>config/tsconfig.json</code> file, and <code>cross-env</code> to
          set the environment variable.
        </p>
        <Code language="json">
          {`{
  "scripts": {
    "start": "cross-env TS_NODE_PROJECT=\\"config/tsconfig.json\\" webpack-dev-server --config config/webpack.config.dev.ts",
    "build": "cross-env TS_NODE_PROJECT=\\"config/tsconfig.json\\" webpack --config config/webpack.config.prod.ts",
    "build:staging": "cross-env TS_NODE_PROJECT=\\"config/tsconfig.json\\" webpack --config config/webpack.config.staging.ts"
  }
}`}
        </Code>
        <p>
          <b>Write project code in TypeScript:</b>
        </p>
        <p>
          Create <code>tsconfig.js</code> in project root directory.
        </p>
        <p>
          <b>Notice:</b> In order to enable tree-shaking we have to set{' '}
          <code>target</code> and <code>module</code> to <code>es2015</code>
        </p>
        <Code language="json">
          {`{
  "compilerOptions": {
    "target": "es2015",
    "module": "es2015",
    "lib": ["esnext", "dom"],
    "sourceMap": true,
    "outDir": "./dist",
    "downlevelIteration": true,
    "strict": true,
    "noUnusedLocals": true,
    "moduleResolution": "node",
    "baseUrl": "./src",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "skipDefaultLibCheck": true
  }
}`}
        </Code>
        <p>
          <b>Add some code to test:</b>
        </p>
        <p>
          <code>public/index.html</code>
        </p>
        <Code language="markup">
          {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Webpack with TypeScript</title>
  </head>
  <body>
    <h1>Test</h1>
    <p>Open console to view logs</p>
    <div class="container"></div>
  </body>
</html>`}
        </Code>
        <p>
          <code>styles/index.css</code>
        </p>
        <Code language="css">
          {`.container {
  max-width: 400px;
  height: 240px;
  margin: 40px auto;
  background-color: rgb(196, 255, 221);
  border: 1px solid rgb(89, 173, 124);
  border-radius: 4px;
}`}
        </Code>
        <p>
          <code>src/services/testServices.ts</code>
        </p>
        <Code language="typescript">
          {`console.log('testServices side effect');

export const test1 = () => console.log('Test1');

export const test2 = () => console.log('Test2');

export const test3 = () => console.log('Test3');`}
        </Code>
        <p>
          <code>src/index.ts</code>
        </p>
        <Code language="typescript">
          {`// test1, test2 will be included in the bundle but test3 will not
import { test1, test2 } from 'services/testServices';

// css files are marked as side effect, so it will always be included in the bundle
import 'styles/index.css';

test1();

test2();`}
        </Code>
        <p>
          Run <code>yarn start</code> or <code>yarn build</code> and inspect the
          bundle
        </p>
      </div>
    ),
    references: [
      {
        name: `[GitHub] learn-webpack/typescript`,
        url: `https://github.com/ICodeMyOwnLife/learn-webpack/tree/master/typescript`,
      },
      {
        name: `[GitHub] Failed to load tsconfig.json: Missing baseUrl in compilerOptions #32`,
        url: `https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-478042178`,
      },
      {
        name: `[GitHub] webpack.js.org/content/guides/webpack-and-typescript.md`,
        url: `https://github.com/webpack/webpack.js.org/blob/de7e5ffb2938a1edcc9a0e9fe3b370d7b97f7d6a/content/guides/webpack-and-typescript.md`,
      },
      {
        name: `[GitHub] tsconfig-paths-webpack-plugin`,
        url: `https://github.com/dividab/tsconfig-paths-webpack-plugin`,
      },
      {
        name: `[webpack] TypeScript`,
        url: `https://webpack.js.org/guides/typescript/`,
      },
      {
        name: `[webpack] Configuration Languages`,
        url: `https://webpack.js.org/configuration/configuration-languages/#typescript`,
      },
    ],
  },
];

export default questions;
// typescript ts-loader babel-loader @babel/core @babel/preset-env ts-node tsconfig-path tsconfig-paths-webpack-plugin @types/webpack @types/webpack-dev-server @types/webpack-merge
