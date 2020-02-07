import { RefObject, useRef, useLayoutEffect } from 'react';

const useMutationObserver = (
  nodeRef: RefObject<Node>,
  callback: MutationCallback,
  options?: MutationObserverInit,
) => {
  const callbackRef = useRef<MutationCallback>();

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useLayoutEffect(() => {
    if (!nodeRef.current) return undefined;

    const observer = new MutationObserver((mutations, currentObserver) =>
      callbackRef.current?.(mutations, currentObserver),
    );
    observer.observe(nodeRef.current, options);

    return () => observer.disconnect();
  }, [nodeRef, options]);
};

export default useMutationObserver;
