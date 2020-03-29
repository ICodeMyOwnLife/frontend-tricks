import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to make an aspect-ratio box?`,
    answer: (
      <div>
        <ol>
          <li>
            Create a container with <code>padding-top</code> or{' '}
            <code>padding-bottom</code> in percentage because padding percentage
            is based on width. Also set <code>position: relative</code> for the
            container.
          </li>
          <li>
            The content should have <code>position: absolute</code> and take
            full-width and full-height of the container.
          </li>
        </ol>

        <CodeViewer language="css">
          {`.AspectRatioBox1-textContainer-178 {
  position: relative;
  padding-bottom: calc(480 / 640 * 100%);
}

.AspectRatioBox1-text-179 {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  font-size: 8vw;
  align-items: center;
  justify-content: center;
  background-color: #212121;
}

.AspectRatioBox1-youtubeContainer-180 {
  position: relative;
  padding-bottom: calc(1080 / 1920 * 100%);
}

.AspectRatioBox1-youtube-181 {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Aspect Ratio Boxes`,
        url: `https://css-tricks.com/aspect-ratio-boxes/`,
      },
    ],
  },
];

export default questions;
