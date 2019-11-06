import { useState, useEffect } from 'react';
import mq2json, { QueryObject } from 'mq2json';
import { isBrowser } from 'utils/common';

const useMediaQuery = (
  query: string | QueryObject,
  initialState: UseStateInitialValue<boolean> = false,
) => {
  const queryString = typeof query === 'string' ? query : mq2json(query);
  const [matches, setMatches] = useState(
    isBrowser() ? window.matchMedia(queryString).matches : initialState,
  );

  useEffect(() => {
    let mounted = true;
    const mediaQueryList = window.matchMedia(queryString);
    const onChange = (ev: MediaQueryListEvent) => {
      if (mounted) {
        setMatches(ev.matches);
      }
    };
    mediaQueryList.addListener(onChange);

    return () => {
      mounted = false;
      mediaQueryList.removeListener(onChange);
    };
  }, [queryString]);

  return matches;
};

export default useMediaQuery;

/**
 * # References
 * https://github.com/ReactTraining/react-media
 * https://material-ui.com/components/use-media-query/
 * https://github.com/streamich/react-use/blob/master/src/useMedia.ts
 * https://github.com/jaredpalmer/the-platform/blob/master/src/useMedia.tsx
 * https://usehooks.com/useMedia/
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
 * https://gomakethings.com/a-better-way-to-test-breakpoints-with-vanilla-javascript/
 * https://github.com/akiran/json2mq
 */
