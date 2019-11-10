import { DependencyList, useState, useEffect } from 'react';

const PENDING_STATE: PromiseState = { loading: false };
const LOADING_STATE: PromiseState = { loading: true };

const usePromise = <TResult, TError = unknown>(
  promiseFactory: ReturnedFunction<Promise<TResult> | undefined | null | false>,
  deps: DependencyList = [],
  initialValue: UseStateInitialValue<
    PromiseState<TResult, TError>
  > = PENDING_STATE,
) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    let isCancelled = false;
    const promise = promiseFactory();

    if (!promise) {
      setState(PENDING_STATE);
      return undefined;
    }

    setState(LOADING_STATE);
    promise
      .then(result => {
        if (!isCancelled) {
          setState({ loading: false, result });
        }
      })
      .catch(error => {
        if (!isCancelled) {
          setState({ loading: false, error });
        }
      });

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
};

export default usePromise;

export type PromiseState<TResult = unknown, TError = unknown> =
  | {
      loading: boolean;
      result?: undefined;
      error?: undefined;
    }
  | {
      loading: false;
      result: TResult;
      error?: undefined;
    }
  | {
      loading: false;
      result?: undefined;
      error: TError;
    };
