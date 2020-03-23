import { useRef, useCallback } from 'react';
import { usePageVisibility } from 'cb-hooks';

export const useVideo = () => {
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
