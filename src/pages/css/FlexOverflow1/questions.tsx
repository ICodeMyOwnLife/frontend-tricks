import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to prevent flex items from overflowing a flex container?`,
    answer: (
      <div>
        <p>
          For fixed-size item: Set <code>flex-grow</code> and{' '}
          <code>flex-shrink</code> to 0 and set <code>flex-basis</code> to the
          width/height of the item:
        </p>

        <CodeViewer language="scss">
          {`.leftColumn {
  flex: 0 0 64px;
}

.topBar {
  flex: 0 0 160px;
}`}
        </CodeViewer>

        <p>
          For overflow-hidden item: By default, flex items won’t shrink below
          their minimum content size (the length of the longest word or
          fixed-size element). To change this, set the min-width or min-height
          property.
        </p>
        <p>
          Set <code>flex-grow</code> and <code>flex-shrink</code> to a positive
          value, set <code>min-width</code> or <code>min-height</code> to a
          finite value, and set <code>overflow</code> to a value other than{' '}
          <code>visible</code>:
        </p>

        <CodeViewer language="scss">
          {`.rightColumn {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
}

.bottomBar {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Setting Min Width/Height to Zero With Flexbox`,
        url: `https://ishadeed.com/article/min-max-css/#setting-min-width-to-zero-with-flexbox`,
      },
      {
        name: `CSS: Flex and "min-width"`,
        url: `https://makandracards.com/makandra/66994-css-flex-and-min-width`,
      },
      {
        name: `Minimum content sizing of flex items not honored`,
        url: `https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored`,
      },
    ],
  },
];

export default questions;
