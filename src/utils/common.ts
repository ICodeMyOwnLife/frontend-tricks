// eslint-disable-next-line import/prefer-default-export
export const isBrowser = () => typeof window === 'object';

export const pickFrom = <T extends object, K extends keyof T>(
  o: T,
  keys: K[],
): Pick<T, K> => {
  const pickedObject = {} as Pick<T, K>;
  keys.forEach(k => {
    pickedObject[k] = o[k];
  });
  return pickedObject;
};
