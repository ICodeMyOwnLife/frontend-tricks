import { QuestionInfo } from 'components/Question';

const questions: QuestionInfo[] = [
  {
    question: `How to clip an image?`,
    answer: '',
    references: [
      {
        name: `[MDN] clip-path`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path`,
      },
      {
        name: `[CSS-TRICKS] clip-path`,
        url: `https://css-tricks.com/almanac/properties/c/clip-path/`,
      },
      {
        name: `[CSS-TRICKS] Clipping and Masking in CSS`,
        url: `https://css-tricks.com/clipping-masking-css/`,
      },
      {
        name: `[CSS-TRICKS] Sketchy Avatars with CSS clip-path`,
        url: `https://css-tricks.com/sketchy-avatars-css-clip-path/`,
      },
      {
        name: `CSS clip-path maker`,
        url: `https://bennettfeely.com/clippy/`,
      },
    ],
  },
];

export default questions;
