// eslint-disable-next-line import/prefer-default-export
export const download = async (url: string) => {
  const res = await fetch(url);
  const contentType = res.headers.get('Content-Type') || '';
  const contentDisposition = res.headers.get('Content-Disposition') || '';
  const extensionMatch = contentType.match(/\/(\w+)/);
  const extension = (extensionMatch && extensionMatch[1]) || 'txt';
  const filenameMatch = contentDisposition.match(/filename="(.+)"/);
  const filename =
    (filenameMatch && filenameMatch[1]) || `unnamed.${extension}`;
  const blob = await res.blob();
  // eslint-disable-next-line no-debugger
  debugger;
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.style.display = 'none';
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
};
