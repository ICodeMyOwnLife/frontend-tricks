import { useState, useEffect } from 'react';
import json2mq, { QueryObject } from 'json2mq';
import { isBrowser } from 'utils/common';

const useMedia = (
  query: string | QueryObject,
  initialState: UseStateInitialValue<boolean> = false,
) => {
  const queryString = typeof query === 'string' ? query : json2mq(query);
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

export default useMedia;

/**
 * References
 * https://github.com/streamich/react-use/blob/master/src/useMedia.ts
 * https://github.com/jaredpalmer/the-platform/blob/master/src/useMedia.tsx
 * https://usehooks.com/useMedia/
 */
