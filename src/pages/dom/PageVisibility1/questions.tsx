import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to check whether users are viewing the page and how to get notified when users switch to/out our page?`,
    answer: (
      <div>
        <p>
          The <code>Document.hidden</code> read-only property returns a Boolean
          value indicating if the page is considered hidden or not.
        </p>
        <p>
          The <code>Document.visibilityState</code> read-only property returns
          the visibility of the <code>document</code>, that is in which context
          this element is now visible. It is useful to know if the document is
          in the background or an invisible tab, or only loaded for
          pre-rendering.
        </p>
        <p>
          The <code>visibilitychange</code> event is fired at the{' '}
          <code>document</code> when the content of its tab have become visible
          or have been hidden.
        </p>

        <CodeViewer language="typescript">
          {`const usePageVisibility = (callback: (state: VisibilityState) => void) =>
  useEvent(document, 'visibilitychange', () =>
    callback?.(document.visibilityState),
  );
  
  const usePageVisibilityState = () => {
    const [state, setState] = useState(document.visibilityState);
    usePageVisibility(setState);
    return state;
  };`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const play = useCallback(() => videoRef.current?.play(), []);
  const pause = useCallback(() => videoRef.current?.pause(), []);

  usePageVisibility(state => {
    switch (state) {
      case 'hidden':
        return pause();

      case 'visible':
        return play();

      default:
        return undefined;
    }
  });

  return { pause, play, videoRef };
};

export const VideoPlay1Component: FC = () => {
  const classes = useStyles();
  const { pause, play, videoRef } = useVideo();

  return (
    <div className={classes.videoPlay1}>
      <video
        autoPlay
        className={classes.player1}
        loop
        ref={videoRef}
        src={VIDEO_SAMPLE_URL}
      />

      <div>
        <IconButton color="primary" onClick={play}>
          <FontIcon type="play_arrow" />
        </IconButton>
        <IconButton color="secondary" onClick={pause}>
          <FontIcon type="pause" />
        </IconButton>
      </div>
    </div>
  );
};`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const VideoPlay2Component: FC = () => {
  const classes = useStyles();
  const [url, , handleChangeUrl] = useTextInput(
    'https://www.youtube.com/watch?v=q0hyYWKXF0Q',
  );
  const [playing, , handleChangePlaying] = useCheckInput(false);
  const [backgroundPlaying, , handleChangeBackgroundPlaying] = useCheckInput(
    false,
  );
  const visibilityState = usePageVisibilityState();

  return (
    <div>
      <div className={classes.playerInputs}>
        <TextField
          className={classes.urlInput}
          label="URL"
          onChange={handleChangeUrl}
          value={url}
        />
        <FormControlLabel
          control={
            <Checkbox checked={playing} onChange={handleChangePlaying} />
          }
          label="Playing"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={backgroundPlaying}
              onChange={handleChangeBackgroundPlaying}
            />
          }
          label="Playing on background"
        />
      </div>

      <div className={classes.player2Container}>
        <ReactPlayer
          className={classes.player2}
          height="100%"
          loop
          playing={
            playing && (backgroundPlaying || visibilityState === 'visible')
          }
          playsinline
          url={url}
          width="100%"
        />
      </div>
    </div>
  );
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Introducing the Page Visibility API`,
        url: `https://levelup.gitconnected.com/introducing-the-page-visibility-api-2fe50ee3dcfa`,
      },
      {
        name: `[GitHub] React Page Visibility`,
        url: `https://github.com/pgilad/react-page-visibility`,
      },
      {
        name: `[GitHub] use-page-visibility`,
        url: `https://github.com/codeshifu/use-page-visibility`,
      },
      {
        name: `[CodeSandbox] usePageVisibility`,
        url: `https://codesandbox.io/s/7y1w0730jx`,
      },
      {
        name: `[MDN] Page Visibility API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API`,
      },
      {
        name: `[MDN] Document.hidden`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden`,
      },
      {
        name: `[MDN] Document.visibilityState`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState`,
      },
      {
        name: `[MDN] Document: visibilitychange`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event`,
      },
    ],
  },
];

export default questions;
