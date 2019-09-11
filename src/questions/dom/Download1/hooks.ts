import { useCallback } from 'react';
import { BASE_URL } from 'constants/urls';

export const urlAttachment = `${BASE_URL}/static/1.png`;
export const urlInline = `${BASE_URL}/public/1.md`;
export const urlDynamic = `${BASE_URL}/export`;

const download = ({
  blob,
  contentType,
  contentDisposition,
}: {
  blob: Blob;
  contentType?: string | null;
  contentDisposition?: string | null;
}) => {
  const extensionMatch = contentType && contentType.match(/\/(\w+)/);
  const extension = (extensionMatch && extensionMatch[1]) || 'txt';
  const filenameMatch =
    contentDisposition && contentDisposition.match(/filename="(.+)"/);
  const filename =
    (filenameMatch && filenameMatch[1]) || `unnamed.${extension}`;
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.style.display = 'none';
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(objectUrl);
  document.body.removeChild(link);
};

export const downloadWithFetch = async (
  url: string,
  method = 'GET',
  body?: string | URLSearchParams,
) => {
  const res = await fetch(url, { method, body });
  const blob = await res.blob();
  const contentType = res.headers.get('Content-Type');
  const contentDisposition = res.headers.get('Content-Disposition');
  download({ blob, contentType, contentDisposition });
};

export const downloadWithRequest = async (
  url: string,
  method = 'GET',
  body?: string | URLSearchParams,
) =>
  new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.responseType = 'blob';
    req.open(method, url, true);
    req.onload = () => {
      const blob = req.response;
      const contentType = req.getResponseHeader('Content-Type');
      const contentDisposition = req.getResponseHeader('Content-Disposition');

      download({ blob, contentType, contentDisposition });
      resolve();
    };
    req.onerror = reject;
    req.send(body);
  });

export const handleAttachmentDownload = () => downloadWithFetch(urlAttachment);
export const handleInlineDownload = () => downloadWithFetch(urlInline);

export const useHandleDynamicDownload = ({
  count,
  ajaxDownload,
}: {
  count: number;
  ajaxDownload: (
    url: string,
    method?: string,
    body?: string | URLSearchParams,
  ) => void;
}) =>
  useCallback(() => {
    const searchParams = new URLSearchParams();
    searchParams.set('count', `${count}`);
    ajaxDownload(urlDynamic, 'POST', searchParams);
  }, [ajaxDownload, count]);
