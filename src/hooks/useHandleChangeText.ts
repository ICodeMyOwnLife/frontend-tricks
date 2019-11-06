import { useCallback, ChangeEvent } from 'react';

const useHandleChangeText = (
  ...callbacks: readonly (TypedFunction<[string]> | undefined | null)[]
) =>
  useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      callbacks.forEach(
        callback => callback && callback(String(e.target.value)),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    callbacks,
  );

export default useHandleChangeText;
