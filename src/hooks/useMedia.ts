import { useState, useEffect } from 'react';
import json2mq, { QueryObject } from 'json2mq';
import { isBrowser, pickFrom } from 'utils/common';

const getMediaResult = (mql: MediaQueryList): MediaResult =>
  pickFrom(mql, ['media', 'matches']);

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
};

export default useMedia;

export interface MediaResult {
  media: string;
  matches: boolean;
}

/**
 * # References
 * https://material-ui.com/components/use-media-query/
 * https://github.com/streamich/react-use/blob/master/src/useMedia.ts
 * https://github.com/jaredpalmer/the-platform/blob/master/src/useMedia.tsx
 * https://usehooks.com/useMedia/
 * https://github.com/ReactTraining/react-media
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
 * https://gomakethings.com/a-better-way-to-test-breakpoints-with-vanilla-javascript/
 * https://github.com/akiran/json2mq
 */
