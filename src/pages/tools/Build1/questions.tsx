import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `What build tool is suitable for small ts/js project?`,
    answer: (
      <div>
        <p>
          Use <code>microbundle</code> - Zero-configuration bundler for tiny
          modules
        </p>

        <CodeViewer language="bash">yarn add -D microbundle</CodeViewer>

        <p>
          Config <code>microbundle</code> and add scripts in{' '}
          <code>package.json</code>
        </p>

        <CodeViewer language="json">
          {`{
  "source": "src/index.ts",
  "main": "dist/index.js",
  "umd:main": "dist/index.umd.js",
  "module": "dist/index.m.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "microbundle",
    "dev": "microbundle watch"
  }
}`}
        </CodeViewer>

        <p>
          <span>
            <code>source</code>: entry point
          </span>
          <br />
          <span>
            <code>main</code>: CJS bundle
          </span>
          <br />
          <span>
            <code>umd:main</code>: UMD bundle
          </span>
          <br />
          <span>
            <code>module</code>: ES Modules bundle
          </span>
          <br />
          <span>
            <code>types</code>: TypeScript typings
          </span>
        </p>
      </div>
    ),
    references: [
      {
        name: `[GitHub] microbundle`,
        url: `https://github.com/developit/microbundle`,
      },
      {
        name: `[GitHub] cb-hooks`,
        url: `https://github.com/ICodeMyOwnLife/cb-hooks/blob/master/package.json`,
      },
      {
        name: `[GitHub] cb-react-recaptcha`,
        url: `https://github.com/ICodeMyOwnLife/cb-react-recaptcha/blob/master/package.json`,
      },
      {
        name: `[GitHub] react-hooks-lib`,
        url: `https://github.com/beizhedenglong/react-hooks-lib/blob/master/package.json`,
      },
    ],
  },
];

export default questions;
