import { useState, useCallback } from 'react';
import { useScript } from 'cb-hooks';
import backendService from 'services/backendService';

export const v3SiteKey = process.env.REACT_APP_RECAPTCHA_V3_SITE_KEY!;
export const checkboxSiteKey = process.env.REACT_APP_RECAPTCHA_WIDGET_SITE_KEY!;

const v3Attrs: Partial<HTMLScriptElement> = {
  src: `https://www.google.com/recaptcha/api.js?render=${v3SiteKey}`,
};

export const useReCaptchaV3 = () => {
  const [verifyResponse, setVerifyResponse] = useState<
    ReCaptchaVerifyResponse
  >();

  const verify = useCallback(() => {
    if (!window.grecaptcha) return;

    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(v3SiteKey, {
        action: 'test',
      });
      const res = await backendService.post<ReCaptchaVerifyResponse>(
        '/verify-recaptcha',
        { token },
      );
      setVerifyResponse(res.data);
    });
  }, []);

  useScript(v3Attrs);

  return { verify, verifyResponse };
};
