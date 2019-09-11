import { BASE_URL } from 'constants/urls';
import { useCallback, useRef, useState } from 'react';
import Axios, { CancelTokenSource, AxiosResponse } from 'axios';

const url = `${BASE_URL}/long`;
const params = new URLSearchParams();
params.set('duration', '5000');

const getXMLHttpResult = (
  { status, statusText, readyState, response, responseText }: XMLHttpRequest,
  loading: boolean,
): XMLHttpResult => ({
  loading,
  status,
  statusText,
  readyState,
  body: response && JSON.parse(response),
  responseText,
});

const getFetchResult = async (
  { status, statusText, json, text }: Response,
  loading: boolean,
): Promise<FetchResult> => ({
  loading,
  status,
  statusText,
  body: await json(),
  responseText: await text(),
});

const getFetchError = ({ message, code, name }: DOMException): FetchError => ({
  message,
  code,
  name,
});

const getAxiosResult = (
  { data, status, statusText }: AxiosResponse,
  loading: boolean,
): AxiosResult => ({ loading, data, status, statusText });

const getAxiosError = (error: any) => ({
  message: Axios.isCancel(error) ? 'Cancelled' : error.message,
});

export const useXMLHttpRequest = () => {
  const [result, setResult] = useState<XMLHttpResult>({ loading: false });
  const requestRef = useRef<XMLHttpRequest>();

  const send = useCallback(() => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => setResult(getXMLHttpResult(request, false));
    request.onerror = () => setResult(getXMLHttpResult(request, false));
    request.onabort = () => setResult(getXMLHttpResult(request, false));
    request.send(params);
    setResult(getXMLHttpResult(request, true));
    requestRef.current = request;
  }, []);

  const cancel = useCallback(() => {
    if (requestRef.current) requestRef.current.abort();
  }, []);

  return { send, cancel, result };
};

export const useFetch = () => {
  const [result, setResult] = useState<FetchResult>({ loading: false });
  const abortControllerRef = useRef<AbortController>();

  const send = useCallback(async () => {
    const request = new Request(url);
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setResult({ loading: true });
    try {
      const response = await fetch(request, {
        method: 'GET',
        signal: abortController.signal,
        body: params,
      });
      setResult(await getFetchResult(response, false));
    } catch (error) {
      setResult({ loading: false, error: getFetchError(error) });
    }
  }, []);

  const cancel = useCallback(() => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
  }, []);

  return { send, cancel, result };
};

export const useAxios = () => {
  const [result, setResult] = useState<AxiosResult>({ loading: false });
  const cancelTokenSourceRef = useRef<CancelTokenSource>();

  const send = useCallback(async () => {
    const cancelTokenSource = Axios.CancelToken.source();
    cancelTokenSourceRef.current = cancelTokenSource;
    setResult({ loading: true });
    try {
      const response = await Axios.request({
        url,
        method: 'GET',
        params,
        cancelToken: cancelTokenSource.token,
      });
      setResult(getAxiosResult(response, false));
    } catch (error) {
      setResult({ loading: false, error: getAxiosError(error) });
    }
  }, []);

  const cancel = useCallback(() => {
    if (cancelTokenSourceRef.current) cancelTokenSourceRef.current.cancel();
  }, []);

  return { send, cancel, result };
};

const SHOULD_CANCEL_REQUEST = true;

export function test1() {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send(params);

  if (SHOULD_CANCEL_REQUEST) request.abort();
}

export async function test2() {
  const request = new Request(url);
  const abortController = new AbortController();
  const response = await fetch(request, {
    method: 'GET',
    signal: abortController.signal,
    body: params,
  });

  if (SHOULD_CANCEL_REQUEST) abortController.abort();
  console.log(response);
}

export async function test3() {
  const cancelTokenSource = Axios.CancelToken.source();
  const response = await Axios.request({
    url,
    method: 'GET',
    params,
    cancelToken: cancelTokenSource.token,
  });

  if (SHOULD_CANCEL_REQUEST) cancelTokenSource.cancel();
  console.log(response);
}

export interface XMLHttpResult
  extends Partial<
    Pick<
      XMLHttpRequest,
      'status' | 'statusText' | 'readyState' | 'responseText'
    >
  > {
  loading: boolean;
  body?: any;
}

export interface FetchResult
  extends Partial<Pick<Response, 'status' | 'statusText'>> {
  loading: boolean;
  body?: any;
  responseText?: any;
  error?: FetchError;
}

export type FetchError = Pick<DOMException, 'message' | 'code' | 'name'>;

export interface AxiosResult
  extends Partial<Pick<AxiosResponse, 'data' | 'status' | 'statusText'>> {
  loading: boolean;
  error?: AxiosError;
}

export interface AxiosError {
  message: string;
}
