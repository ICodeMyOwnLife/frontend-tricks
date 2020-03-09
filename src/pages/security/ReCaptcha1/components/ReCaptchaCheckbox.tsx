import React, { forwardRef, useRef } from 'react';
import { useReCaptchaWidget, ReCaptchaCheckboxObject } from './utils';

const ReCaptchaCheckbox = forwardRef<
  ReCaptchaCheckboxObject,
  ReCaptchaCheckboxProps
>(
  (
    { id, onError, onExpired, onVerify, sitekey, size, tabindex, theme },
    ref,
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useReCaptchaWidget({
      id,
      elementRef,
      onError,
      onExpired,
      onVerify,
      ref,
      sitekey,
      size,
      tabindex,
      theme,
    });
    return <div id={id} ref={elementRef} />;
  },
);

ReCaptchaCheckbox.displayName = 'ReCaptchaCheckbox';

export default ReCaptchaCheckbox;

export interface ReCaptchaCheckboxProps
  extends PickFrom<
    ReCaptchaCheckboxSettings,
    'sitekey' | 'size' | 'tabindex' | 'theme'
  > {
  id: string;
  onError?: (error: any) => void;
  onExpired?: VoidFunction;
  onVerify?: (response: string) => void;
}
