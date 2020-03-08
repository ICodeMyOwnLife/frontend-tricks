interface ReCaptchaV3Settings {
  action: string;
}

interface ReCaptchaV3 {
  ready: (onReady: VoidFunction) => void;
  execute: (siteKey: string, settings: ReCaptchaV3Settings) => Promise<string>;
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
