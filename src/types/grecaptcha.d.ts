interface ReCaptchaV3Settings {
  action: string;
}

interface ReCaptchaCheckboxSettings {
  callback?: string;
  'error-callback'?: string;
  'expired-callback'?: string;
  sitekey: string;
  size?: 'compact' | 'normal';
  tabindex?: number;
  theme?: 'light' | 'dark';
}

type ReCaptchaWidgetCallback = (response: string) => void;

interface ReCaptchaV3 {
  execute: (siteKey: string, settings: ReCaptchaV3Settings) => Promise<string>;
  getResponse: (widgetId?: string) => string;
  ready: (onReady: VoidFunction) => void;
  render: (
    container: string | HTMLElement,
    settings: ReCaptchaCheckboxSettings,
  ) => string;
  reset: (widgetId?: string) => void;
}

interface ReCaptchaVerifyResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

declare var grecaptcha: ReCaptchaV3;
