import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to style browser scrollbars?`,
    answer: (
      <div>
        <p>
          Use standard CSS properties <code>scrollbar-width</code>,{' '}
          <code>scrollbar-color</code> and non-standard pseudo-elements{' '}
          <code>::-webkit-scrollbar</code>,{' '}
          <code>::-webkit-scrollbar-track</code>,{' '}
          <code>::-webkit-scrollbar-thumb</code>,{' '}
          <code>::-webkit-scrollbar-corner</code>, and etc
        </p>
        <p>
          The <code>scrollbar-color</code> CSS property sets the color of the
          scrollbar thumb and track.
          <br />
          The track refers to the background of the scrollbar, which is
          generally fixed regardless of the scrolling position.
          <br />
          The thumb refers to the moving part of the scrollbar, which usually
          floats on top of the track.
        </p>
        <p>
          The <code>scrollbar-width</code> property allows the author to set the
          maximum thickness of an element’s scrollbars when they are shown.
        </p>
        <p>
          Currently, only FireFox supports <code>scrollbar-color</code> and{' '}
          <code>scrollbar-width</code>.
        </p>
        <p>
          You can use the following pseudo elements to customize various parts
          of the scrollbar for webkit browsers:
          <br />
          <code>::-webkit-scrollbar</code> — the entire scrollbar.
          <br />
          <code>::-webkit-scrollbar-button</code> — the buttons on the scrollbar
          (arrows pointing upwards and downwards).
          <br />
          <code>::-webkit-scrollbar-thumb</code> — the draggable scrolling
          handle.
          <br />
          <code>::-webkit-scrollbar-track</code> — the track (progress bar) of
          the scrollbar.
          <br />
          <code>::-webkit-scrollbar-track-piece</code> — the part of the track
          (progress bar) not covered by the handle.
          <br />
          <code>::-webkit-scrollbar-corner</code> — the bottom corner of the
          scrollbar, where both horizontal and vertical scrollbars meet.
          <br />
          <code>::-webkit-resizer</code> — the draggable resizing handle that
          appears at the bottom corner of some elements.
        </p>

        <CodeViewer language="css">
          {`.Scrollbar1-container-178 {
  overflow: auto;
  max-height: 160px;
  scrollbar-color: #ab47bc transparent;
  scrollbar-width: thin;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: transparent;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #ab47bc;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-corner {
  background-color: transparent;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-thumb:horizontal {
  min-width: 24px;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-thumb:vertical {
  min-height: 24px;
}

.Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-track:active, .Scrollbar1-withCustomScrollbar-179 ::-webkit-scrollbar-track:hover {
  background-color: rgba(225, 190, 231, 0.25);
}`}
        </CodeViewer>

        <p>
          <b>Notice:</b> When you set a <code>height</code> or{' '}
          <code>width</code> on the <code>::-webkit-scrollbar</code>{' '}
          pseudo-element, on Mac OS it will swap unobtrusive scrollbars to be
          obtrusive (overriding the default configuration). We can fix this by
          testing for obtrusive scrollbar before applying custom styles.
        </p>

        <CodeViewer language="typescript">
          {`const size = 30;
let isObtrusive: boolean | undefined;

export const isObtrusiveScrollbar = () => {
  if (typeof isObtrusive !== 'boolean') {
    const parent = document.createElement('div');
    Object.assign(parent.style, {
      position: 'absolute',
      left: '-1000px',
      width: \`$\{size}px\`,
      height: \`$\{size}px\`,
      overflow: 'scroll',
    });
    const child = document.createElement('div');
    Object.assign(child.style, { width: '100%', height: \`$\{size + 10}px\` });
    parent.appendChild(child);
    document.body.appendChild(parent);
    isObtrusive = size - child.clientWidth > 0;
    parent.remove();
  }

  return isObtrusive;
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Two Browsers Walked Into a Scrollbar`,
        url: `https://www.filamentgroup.com/lab/scrollbars/`,
      },
      {
        name: `[CSS-TRICKS] The Current State of Styling Scrollbars`,
        url: `https://css-tricks.com/the-current-state-of-styling-scrollbars/`,
      },
      {
        name: `[MDN] scrollbar-color`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color`,
      },
      {
        name: `[MDN] scrollbar-width`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width`,
      },
      {
        name: `[MDN] ::-webkit-scrollbar`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar`,
      },
      {
        name: `[CSS-TRICKS] scrollbar-color`,
        url: `https://css-tricks.com/almanac/properties/s/scrollbar-color/`,
      },
      {
        name: `[CSS-TRICKS] scrollbar-width`,
        url: `https://css-tricks.com/almanac/properties/s/scrollbar-width/`,
      },
      {
        name: `[CSS-TRICKS] scrollbar`,
        url: `https://css-tricks.com/almanac/properties/s/scrollbar/`,
      },
      {
        name: `[CSS-TRICKS] Custom Scrollbars in WebKit`,
        url: `https://css-tricks.com/custom-scrollbars-in-webkit/`,
      },
      {
        name: `[WebKit] Styling Scrollbars`,
        url: `https://webkit.org/blog/363/styling-scrollbars/`,
      },
    ],
  },
];

export default questions;
