import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useScript } from 'cb-hooks';
import backendService from 'services/backendService';

const siteKey = process.env.REACT_APP_SITE_KEY!;

const runReCaptchaV3 = (
  setVerifyResponse: Dispatch<
    SetStateAction<ReCaptchaVerifyResponse | undefined>
  >,
) => {
  if (!window.grecaptcha) return;

  window.grecaptcha.ready(async () => {
    const token = await window.grecaptcha.execute(siteKey, { action: 'test' });
    const res = await backendService.post<ReCaptchaVerifyResponse>(
      '/verify-recaptcha',
      { token },
    );
    setVerifyResponse(res.data);
  });
};

export const useReCaptchaV3 = () => {
  const [verifyResponse, setVerifyResponse] = useState<
    ReCaptchaVerifyResponse
  >();

  useScript({
    src: `https://www.google.com/recaptcha/api.js?render=${siteKey}`,
    onload: () => runReCaptchaV3(setVerifyResponse),
  });

  useEffect(() => {
    runReCaptchaV3(setVerifyResponse);
  }, []);
  return verifyResponse;
};
