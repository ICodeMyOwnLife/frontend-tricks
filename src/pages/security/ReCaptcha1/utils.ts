import { useState, useCallback, useRef } from 'react';
import {
  ReCaptchaV3Object,
  ReCaptchaVerifyResponse,
  ReCaptchaCheckboxObject,
} from 'cb-react-recaptcha/dist/types/common';
import backendService from 'services/backendService';

export const v3SiteKey = process.env.REACT_APP_RECAPTCHA_V3_SITE_KEY!;
export const checkboxSiteKey = process.env.REACT_APP_RECAPTCHA_WIDGET_SITE_KEY!;

const verify = async (url: string, response: string) => {
  const res = await backendService.post<ReCaptchaVerifyResponse>(url, {
    response,
  });
  return res.data;
};

const verifyV3 = (response: string) => verify('/verify-recaptcha-v3', response);

const verifyCheckbox = (response: string) =>
  verify('/verify-recaptcha-checkbox', response);

export const useReCaptchaV3 = () => {
  const [responseV3, setResponseV3] = useState<string>();
  const [verifyResponseV3, setVerifyResponseV3] = useState<
    ReCaptchaVerifyResponse
  >();
  const refV3 = useRef<ReCaptchaV3Object>(null);

  const handleVerifyV3 = useCallback(async (response: string) => {
    setResponseV3(response);
    const verifyResponse = await verifyV3(response);
    setVerifyResponseV3(verifyResponse);
  }, []);

  const getResponseV3 = useCallback(async () => {
    const response = await refV3.current?.getResponse();
    if (response) {
      handleVerifyV3(response);
    }
  }, [handleVerifyV3]);

  return { getResponseV3, handleVerifyV3, refV3, responseV3, verifyResponseV3 };
};

export const useReCaptchaCheckbox = () => {
  const [responseCheckbox, setResponseCheckbox] = useState<string>();
  const [verifyResponseCheckbox, setVerifyResponseCheckbox] = useState<
    ReCaptchaVerifyResponse
  >();
  const refCheckbox = useRef<ReCaptchaCheckboxObject>(null);

  const handleExpiredCheckbox = useCallback(() => {
    setResponseCheckbox(undefined);
    setVerifyResponseCheckbox(undefined);
  }, []);

  const handleVerifyCheckbox = useCallback(async (response: string) => {
    setResponseCheckbox(response);
    const verifyResponse = await verifyCheckbox(response);
    setVerifyResponseCheckbox(verifyResponse);
  }, []);

  const getResponseCheckbox = useCallback(() => {
    const response = refCheckbox.current?.getResponse();
    if (response) {
      handleVerifyCheckbox(response);
    }
  }, [handleVerifyCheckbox]);

  const resetCheckbox = useCallback(() => refCheckbox.current?.reset(), []);

  return {
    getResponseCheckbox,
    handleExpiredCheckbox,
    handleVerifyCheckbox,
    refCheckbox,
    resetCheckbox,
    responseCheckbox,
    verifyResponseCheckbox,
  };
};
