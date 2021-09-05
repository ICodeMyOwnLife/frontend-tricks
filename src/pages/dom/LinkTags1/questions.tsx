import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to update <code>link</code> tag in order to change favicon?
      </span>
    ),
    answer: (
      <div>
        <CodeViewer language="typescript">
          {`const useUpdatedLink = (
  attrs: Partial<HTMLLinkElement>,
  selector: string | (() => HTMLLinkElement),
  deps: DependencyList = [],
) => {
  const selectorRef = useUpdatedRef(selector);

  useEffect(() => {
    const linkSelector = selectorRef.current;
    const link =
      (typeof linkSelector === 'function'
        ? linkSelector()
        : document.querySelector(linkSelector)) ||
      document.createElement('link');

    if (link instanceof HTMLLinkElement) {
      Object.assign(link, attrs);
      document.head.appendChild(link);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const useFavicon = (href: string) =>
  useUpdatedLink(
    { href, rel: \`shortcut icon\`, type: \`image/x-icon\` },
    \`link[rel='shortcut icon']\`,
    [href],
  );`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] react-use/useFavicon.ts`,
        url: `https://github.com/streamich/react-use/blob/c0574064ca/src/useFavicon.ts`,
      },
    ],
  },
];

export default questions;
