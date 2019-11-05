import { useState, useEffect } from 'react';
import json2mq, { QueryObject } from 'json2mq';
import { isBrowser } from 'utils/common';

const getMediaResult = ({ media, matches }: MediaQueryList): MediaResult => ({
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
    setResult(mql);

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
 * References
 * https://github.com/streamich/react-use/blob/master/src/useMedia.ts
 * https://github.com/jaredpalmer/the-platform/blob/master/src/useMedia.tsx
 * https://usehooks.com/useMedia/
 */
