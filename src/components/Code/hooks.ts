import { useRef, useEffect } from 'react';
import Prism from 'prismjs';

console.log('languages:', Prism.languages);

// eslint-disable-next-line import/prefer-default-export
export const usePrism = () => {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false);
    }
  }, []);

  return ref;
};
