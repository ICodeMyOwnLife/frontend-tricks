import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to use media queries in JavaScript?`,
    answer: (
      <div>
        <p>
          Use <code>window.matchMedia()</code> to get a{' '}
          <code>MediaQueryList</code> object. Test matching by using{' '}
          <code>MediaQueryList.matches</code> and listen to changes by using{' '}
          <code>MediaQueryList.addListener</code>
        </p>

        <CodeViewer language="typescript">
          {`const getMediaResult = ({ media, matches }: MediaQueryList): MediaResult => ({
  media,
  matches,
});

const useMedia = (
  query: string | QueryObject,
  initialState: UseStateInitialValue<MediaResult> = {
    media: '',
    matches: false,
  },
) => {
  const queryString = typeof query === 'string' ? query : json2mq(query);
  const [result, setResult] = useState<MediaResult>(
    isBrowser()
      ? () => getMediaResult(window.matchMedia(queryString))
      : initialState,
  );

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(queryString);
    const onChange = (ev: MediaQueryListEvent) => {
      if (mounted) {
        setResult(ev);
      }
    };
    mql.addListener(onChange);
    setResult(getMediaResult(mql));

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [queryString]);

  return result;
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Window.matchMedia()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia`,
      },
      {
        name: `[MDN] MediaQueryList`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList`,
      },
      {
        name: `[MDN] Testing media queries programmatically`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries`,
      },
      {
        name: `[MDN] Using media queries`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries`,
      },
      {
        name: `[Material UI] useMediaQuery`,
        url: `https://material-ui.com/components/use-media-query/`,
      },
      {
        name: `[GitHub] react-use/useMedia`,
        url: `https://github.com/streamich/react-use/blob/master/docs/useMedia.md`,
      },
      {
        name: `[GitHub] the-platform/useMedia`,
        url: `https://github.com/jaredpalmer/the-platform#usemedia`,
      },
      {
        name: `[GitHub] react-media`,
        url: `https://github.com/ReactTraining/react-media`,
      },
      {
        name: `[GitHub] json2mq`,
        url: `https://github.com/akiran/json2mq`,
      },
      {
        name: `[useHooks] useMedia`,
        url: `https://usehooks.com/useMedia/`,
      },
      {
        name: `A better way to test breakpoints with vanilla JavaScript`,
        url: `https://gomakethings.com/a-better-way-to-test-breakpoints-with-vanilla-javascript/`,
      },
    ],
  },
];

export default questions;
