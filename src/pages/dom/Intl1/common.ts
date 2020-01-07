import { renderOptions } from 'utils/render';

export const localeValues = {
  'en-US': 'English',
  'fr-FR': 'French',
  'vi-VN': 'Vietnamese',
  'de-DE': 'German',
};
export const localeOptions = renderOptions(localeValues);

export const localeMatcherValues = ['lookup', 'best fit'] as const;
export const localeMatcherOptions = renderOptions(localeMatcherValues);

export const formatMatcherValues = ['basic', 'best fit'] as const;
export const formatMatcherOptions = renderOptions(formatMatcherValues);

export const textStyleValues = ['long', 'short', 'narrow'] as const;
export const textStyleOptions = renderOptions(textStyleValues);

export const numberStyleValues = ['numeric', '2-digit'] as const;
export const numberStyleOptions = renderOptions(numberStyleValues);
