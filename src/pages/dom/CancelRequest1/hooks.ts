/* eslint-disable no-console */
import { useCallback, useRef, useState } from 'react';
import Axios, { CancelTokenSource, AxiosResponse, AxiosInstance } from 'axios';

const url = `${process.env.REACT_APP_BASE_URL}/long`;
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
  response: Response,
  loading: boolean,
): Promise<FetchResult> => {
  const { status, statusText } = response;

  return {
    loading,
    status,
    statusText,
    body: await response.clone().json(),
    responseText: await response.clone().text(),
  };
};

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
  const abortableRef = useRef<XMLHttpRequest>();

  const initialize = useCallback(() => {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.onload = () => setResult(getXMLHttpResult(request, false));
    request.onerror = () => setResult(getXMLHttpResult(request, false));
    request.onabort = () => setResult(getXMLHttpResult(request, false));
    requestRef.current = request;
    abortableRef.current = request;
  }, []);

  const send = useCallback(() => {
    const request = requestRef.current;

    if (request) {
      setResult(getXMLHttpResult(request, true));
      request.send(params);
      requestRef.current = undefined;
    }
  }, []);

  const cancel = useCallback(() => {
    if (abortableRef.current) abortableRef.current.abort();
  }, []);

  return { initialize, send, cancel, result };
};

export const useFetch = () => {
  const [result, setResult] = useState<FetchResult>({ loading: false });
  const requestRef = useRef<Request>();
  const abortControllerRef = useRef<AbortController>();

  const initialize = useCallback(() => {
    const abortController = new AbortController();
    const request = new Request(url, {
      method: 'POST',
      body: params,
      signal: abortController.signal,
    });
    abortControllerRef.current = abortController;
    requestRef.current = request;
  }, []);

  const send = useCallback(async () => {
    const request = requestRef.current;

    if (!request) return;

    setResult({ loading: true });

    try {
      const response = await fetch(request);
      setResult(await getFetchResult(response, false));
      requestRef.current = undefined;
    } catch (error) {
      setResult({
        loading: false,
        error: getFetchError(error as DOMException),
      });
    }
  }, []);

  const cancel = useCallback(() => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
  }, []);

  return { initialize, send, cancel, result };
};

export const useAxios = () => {
  const [result, setResult] = useState<AxiosResult>({ loading: false });
  const instanceRef = useRef<AxiosInstance>();
  const cancelTokenSourceRef = useRef<CancelTokenSource>();

  const initialize = useCallback(() => {
    const cancelTokenSource = Axios.CancelToken.source();
    cancelTokenSourceRef.current = cancelTokenSource;
    const instance = Axios.create({
      cancelToken: cancelTokenSource.token,
    });
    instanceRef.current = instance;
  }, []);

  const send = useCallback(async () => {
    const instance = instanceRef.current;

    if (!instance) return;

    setResult({ loading: true });

    try {
      const response = await instance.request({
        url,
        method: 'POST',
        params,
      });
      setResult(getAxiosResult(response, false));
      instanceRef.current = undefined;
    } catch (error) {
      setResult({ loading: false, error: getAxiosError(error) });
    }
  }, []);

  const cancel = useCallback(() => {
    if (cancelTokenSourceRef.current) cancelTokenSourceRef.current.cancel();
  }, []);

  return { initialize, send, cancel, result };
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
