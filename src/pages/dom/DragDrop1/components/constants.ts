export const CUSTOM_DROP_TYPE = 'app_custom/data';

export const DROP_EFFECTS = ['copy', 'link', 'move', 'none'] as const;

export const EFFECTS_ALLOWED = [
  ...DROP_EFFECTS,
  'copyLink',
  'copyMove',
  'linkMove',
] as const;

export type DropEffect = typeof DROP_EFFECTS[number];

export type EffectAllowed = typeof EFFECTS_ALLOWED[number];
