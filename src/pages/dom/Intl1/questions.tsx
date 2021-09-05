import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to enable language-sensitive string comparison?`,
    answer: (
      <div>
        <p>
          Use <code>Intl.Collator</code>
        </p>
        <CodeViewer language="typescript">
          {`const collator = new Intl.Collator(locale, {
  caseFirst,
  ignorePunctuation,
  localeMatcher,
  numeric,
  sensitivity,
  usage,
});
return list.sort(collator.compare).join(', ');`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Intl.Collator`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator`,
      },
    ],
  },
  {
    question: `How to enable language-sensitive date and time formatting?`,
    answer: (
      <div>
        <p>
          Use <code>Intl.DateTimeFormat</code>
        </p>
        <CodeViewer language="typescript">
          {`const dateTimeFormat = new Intl.DateTimeFormat(locale, {
  day,
  era,
  formatMatcher,
  hour,
  hour12,
  localeMatcher,
  minute,
  month,
  second,
  timeZone,
  timeZoneName,
  weekday,
  year,
});
return dateTimeFormat.format(new Date());`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Intl.DateTimeFormat`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat`,
      },
    ],
  },
  {
    question: `How to enable language-sensitive list formatting?`,
    answer: (
      <div>
        <p>
          Use <code>Intl.ListFormat</code>
        </p>
        <CodeViewer language="typescript">
          {`const listFormat = new Intl.ListFormat(locale, {
  localeMatcher,
  style,
  type,
});
return listFormat.format(list);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Intl.ListFormat`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat`,
      },
    ],
  },
  {
    question: `How to enable language-sensitive relative time formatting?`,
    answer: (
      <div>
        <p>
          Use <code>Intl.RelativeTimeFormat</code>
        </p>
        <CodeViewer language="typescript">
          {`const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, {
  localeMatcher,
  numeric,
  style,
});
return relativeTimeFormat.format(Number(value), unit);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: '[MDN] Intl.RelativeTimeFormat',
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat`,
      },
    ],
  },
];

export default questions;
