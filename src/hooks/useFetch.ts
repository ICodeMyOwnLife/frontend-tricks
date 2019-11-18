// https://medium.com/frontend-digest/axios-vs-fetch-which-to-use-in-2019-6678c083c5c
import { DependencyList } from 'react';
import usePromise from 'hooks/usePromise';

export const useFetch = <TValue>(
  input: RequestInfo,
  init?: RequestInit,
  deps?: DependencyList,
) =>
  usePromise<TValue, Error>(
    () =>
      fetch(input, init).then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      }),
    deps,
  );
