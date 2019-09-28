import { QuestionInfo } from 'components/Question';
import React from 'react';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to write webpack config files in TypeScript?`,
    answer: (
      <div>
        <p>
          Install <code>typescript</code>, <code>ts-node</code> and relevant
          type definitions
        </p>

        <Code language="bash">
          yarn add typescript ts-node @types/node @types/webpack
          @types/webpack-dev-server
        </Code>

        <p>
          Add <code>tsconfig.json</code> in the root project directory with the{' '}
          <code>module</code> entry is set to <code>commonjs</code> and{' '}
          <code>esModuleInterop</code> entry is set to <code>true</code>
        </p>

        <Code language="json">
          {`{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["esnext", "dom"],
    "sourceMap": true,
    "outDir": "./build",
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

        <p>Write webpack config files in TypeScript</p>

        <Code language="typescript">
          {`// webpack.config.development.ts
import { HotModuleReplacementPlugin } from 'webpack';
import Dotenv from 'dotenv-webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common';

const dotenvPlugin = new Dotenv({ path: './.env.development' });
const hotModuleReplacementPlugin = new HotModuleReplacementPlugin({});

const config = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 4000,
    open: true,
    openPage: 'samples/blank.html',
  },
  plugins: [dotenvPlugin, hotModuleReplacementPlugin],
});

export default config;


// webpack.config.production.ts
import { Plugin } from 'webpack';
import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import common from './webpack.config.common';

const cleanPlugin = new CleanWebpackPlugin({ verbose: true }) as Plugin;
const dotenvPlugin = new Dotenv({ path: './.env.production' });

const config = merge(common, {
  mode: 'production',
  plugins: [cleanPlugin, dotenvPlugin],
});

export default config;
`}
        </Code>

        <p>
          Add scripts to <code>package.json</code>
        </p>
        <Code language="json">
          {`{
  "scripts": {
    "start": "webpack-dev-server --config webpack.config.development.ts",
    "build": "webpack --config webpack.config.production.ts"
  }
}`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[webpack] Configuration Languages`,
        url: `https://webpack.js.org/configuration/configuration-languages/#typescript`,
      },
    ],
  },
];

export default questions;
