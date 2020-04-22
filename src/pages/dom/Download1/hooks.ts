import { useCallback } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { saveAs } from 'file-saver';

export const urlAttachment = `${process.env.REACT_APP_BASE_URL}/static/1.png`;
export const urlInline = `${process.env.REACT_APP_BASE_URL}/public/1.md`;
export const urlDynamic = `${process.env.REACT_APP_BASE_URL}/export`;
const headerContentType = 'content-type';
const headerContentDisposition = 'content-disposition';

const createFilename = ({
  contentType,
  contentDisposition,
}: {
  contentType?: string | null;
  contentDisposition?: string | null;
}) => {
  const extensionMatch = contentType && contentType.match(/\/(\w+)/);
  const extension = (extensionMatch && extensionMatch[1]) || 'txt';
  const filenameMatch =
    contentDisposition && contentDisposition.match(/filename="(.+)"/);
  const filename =
    (filenameMatch && filenameMatch[1]) || `unnamed.${extension}`;
  return filename;
};

export const saveFileManually: SaveFileFunction = ({
  blob,
  contentType,
  contentDisposition,
}) => {
  const filename = createFilename({ contentType, contentDisposition });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.style.display = 'none';
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(objectUrl);
  link.remove();
};

export const saveFileWithFileSaver: SaveFileFunction = ({
  blob,
  contentType,
  contentDisposition,
}) => {
  const filename = createFilename({ contentType, contentDisposition });
  saveAs(blob, filename);
};

export const downloadWithAxios: DownloadFileFunction = async (
  url: string,
  method = 'GET',
  body?: string | URLSearchParams,
) => {
  const { data: blob, headers } = await Axios.request<Blob>({
    url,
    method: method as AxiosRequestConfig['method'],
    responseType: 'blob',
    data: body,
  });
  const contentType = headers[headerContentType];
  const contentDisposition = headers[headerContentDisposition];
  return { blob, contentType, contentDisposition };
};

export const downloadWithFetch: DownloadFileFunction = async (
  url: string,
  method = 'GET',
  body?: string | URLSearchParams,
) => {
  const res = await fetch(url, { method, body });
  const blob = await res.blob();
  const contentType = res.headers.get(headerContentType);
  const contentDisposition = res.headers.get(headerContentDisposition);
  return { blob, contentType, contentDisposition };
};

export const downloadWithRequest: DownloadFileFunction = async (
  url,
  method = 'GET',
  body,
) =>
  new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.responseType = 'blob';
    req.open(method, url, true);
    req.onload = () => {
      const blob = req.response;
      const contentType = req.getResponseHeader(headerContentType);
      const contentDisposition = req.getResponseHeader(
        headerContentDisposition,
      );
      resolve({ blob, contentType, contentDisposition });
    };
    req.onerror = reject;
    req.send(body);
  });

export const useHandleStaticDownload = ({
  url,
  downloadFile,
  saveFile,
}: {
  url: string;
  downloadFile: DownloadFileFunction;
  saveFile: SaveFileFunction;
}) =>
  useCallback(async () => {
    const fileResult = await downloadFile(url);
    saveFile(fileResult);
  }, [downloadFile, saveFile, url]);

export const useHandleDynamicDownload = ({
  count,
  downloadFile,
  saveFile,
}: {
  count: number;
  downloadFile: DownloadFileFunction;
  saveFile: SaveFileFunction;
}) =>
  useCallback(async () => {
    const searchParams = new URLSearchParams();
    searchParams.set('count', `${count}`);
    const fileResult = await downloadFile(urlDynamic, 'POST', searchParams);
    saveFile(fileResult);
  }, [count, downloadFile, saveFile]);

export interface FileResult {
  blob: Blob;
  contentType?: string | null;
  contentDisposition?: string | null;
}

export type DownloadFileFunction = (
  url: string,
  method?: string,
  body?: string | URLSearchParams,
) => Promise<FileResult>;

export type SaveFileFunction = ({
  blob,
  contentType,
  contentDisposition,
}: {
  blob: Blob;
  contentType?: string | null;
  contentDisposition?: string | null;
}) => void;
