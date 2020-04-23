import { useState, useEffect, useMemo } from 'react';
import useSearchObject from 'hooks/useSearchObject';

export const useOpener = () => {
  const [opener, setOpener] = useState<Window>();

  const handleNavigate = useMemo(
    () =>
      opener &&
      opener.location &&
      (() => opener.location.replace('https://google.com')),
    [opener],
  );

  useEffect(() => {
    if (window.opener) {
      setOpener(window.opener);
    }
  }, []);

  return { handleNavigate, opener };
};

export const useReferrer = () => {
  const { referrer } = useSearchObject<{ referrer: string }>();
  return referrer || document.referrer;
};
