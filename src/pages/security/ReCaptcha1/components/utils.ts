/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import {
  RefObject,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  Ref,
  MutableRefObject,
} from 'react';
import { useScript } from 'cb-hooks';

const buildCallbackName = (id: string, callbackType: string) =>
  `_recaptcha_checkbox_${id}_${callbackType}`;

const noop = () => {};

const useOnErrorCallback = ({
  id,
  onError,
}: {
  id: string;
  onError: ((error: any) => void) | undefined;
}) => {
  const onErrorCallback = buildCallbackName(id, 'onError');

  useEffect(() => {
    (window as any)[onErrorCallback] = onError || noop;
    return () => {
      delete (window as any)[onErrorCallback];
    };
  }, [onError, onErrorCallback]);

  return onErrorCallback;
};

const useOnExpiredCallback = ({
  id,
  onExpired,
}: {
  id: string;
  onExpired: VoidFunction | undefined;
}) => {
  const onExpiredCallback = buildCallbackName(id, 'onExpired');

  useEffect(() => {
    (window as any)[onExpiredCallback] = onExpired || noop;
    return () => {
      delete (window as any)[onExpiredCallback];
    };
  }, [onExpired, onExpiredCallback]);

  return onExpiredCallback;
};

const useOnLoadCallback = ({
  id,
  elementRef,
  onErrorCallback,
  onExpiredCallback,
  onVerifyCallback,
  sitekey,
  size,
  tabindex,
  theme,
  widgetIdRef,
}: {
  elementRef: RefObject<HTMLElement>;
  id: string;
  onErrorCallback: string;
  onExpiredCallback: string;
  onVerifyCallback: string;
  sitekey: ReCaptchaCheckboxSettings['sitekey'];
  size: ReCaptchaCheckboxSettings['size'];
  tabindex: ReCaptchaCheckboxSettings['tabindex'];
  theme: ReCaptchaCheckboxSettings['theme'];
  widgetIdRef: MutableRefObject<string | undefined>;
}) => {
  const onLoadCallback = buildCallbackName(id, 'onLoad');
  const handleOnLoad = useCallback(() => {
    if (!window.grecaptcha || !elementRef.current) return;

    widgetIdRef.current = window.grecaptcha.render(elementRef.current, {
      callback: onVerifyCallback,
      'error-callback': onErrorCallback,
      'expired-callback': onExpiredCallback,
      sitekey,
      size,
      tabindex,
      theme,
    });
  }, [
    elementRef,
    onErrorCallback,
    onExpiredCallback,
    onVerifyCallback,
    sitekey,
    size,
    tabindex,
    theme,
    widgetIdRef,
  ]);

  useEffect(() => {
    (window as any)[onLoadCallback] = handleOnLoad;
    handleOnLoad();
    return () => {
      delete (window as any)[onLoadCallback];
    };
  }, [onLoadCallback, handleOnLoad]);

  return onLoadCallback;
};

const useOnVerifyCallback = ({
  id,
  onVerify,
}: {
  id: string;
  onVerify: ((response: string) => void) | undefined;
}) => {
  const onVerifyCallback = buildCallbackName(id, 'onVerify');

  useEffect(() => {
    (window as any)[onVerifyCallback] = onVerify || noop;
    return () => {
      delete (window as any)[onVerifyCallback];
    };
  }, [onVerify, onVerifyCallback]);

  return onVerifyCallback;
};

const useReCaptchaCheckboxHandle = ({
  ref,
  widgetIdRef,
}: {
  ref: Ref<ReCaptchaCheckboxObject>;
  widgetIdRef: MutableRefObject<string | undefined>;
}) => {
  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        if (window.grecaptcha && widgetIdRef.current) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      },
    }),
    [widgetIdRef],
  );
};

const useReCaptchaScript = ({ onLoadCallback }: { onLoadCallback: string }) => {
  const attrs = useMemo<Partial<HTMLScriptElement>>(
    () => ({
      async: true,
      defer: true,
      src: `https://www.google.com/recaptcha/api.js?render=explicit&onload=${onLoadCallback}`,
    }),
    [onLoadCallback],
  );

  useScript(attrs);
};

export const useReCaptchaWidget = ({
  elementRef,
  id,
  onError,
  onExpired,
  onVerify,
  ref,
  sitekey,
  size,
  tabindex,
  theme,
}: {
  id: string;
  elementRef: RefObject<HTMLElement>;
  onError: ((error: any) => void) | undefined;
  onExpired: VoidFunction | undefined;
  onVerify: ((response: string) => void) | undefined;
  ref: Ref<ReCaptchaCheckboxObject>;
  sitekey: ReCaptchaCheckboxSettings['sitekey'];
  size: ReCaptchaCheckboxSettings['size'];
  tabindex: ReCaptchaCheckboxSettings['tabindex'];
  theme: ReCaptchaCheckboxSettings['theme'];
}) => {
  const widgetIdRef = useRef<string>();
  const onErrorCallback = useOnErrorCallback({ id, onError });
  const onExpiredCallback = useOnExpiredCallback({ id, onExpired });
  const onVerifyCallback = useOnVerifyCallback({ id, onVerify });
  const onLoadCallback = useOnLoadCallback({
    elementRef,
    id,
    onErrorCallback,
    onExpiredCallback,
    onVerifyCallback,
    sitekey,
    size,
    tabindex,
    theme,
    widgetIdRef,
  });
  useReCaptchaScript({ onLoadCallback });
  useReCaptchaCheckboxHandle({ ref, widgetIdRef });
};

export interface ReCaptchaCheckboxObject {
  reset: VoidFunction;
}
