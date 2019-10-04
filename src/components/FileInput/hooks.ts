/* eslint-disable no-console */
import { useCallback, ChangeEvent, useRef, useEffect, useState } from 'react';
import { FilesChangeListener } from './types';
import classes from './styles.module.scss';

export const getFileName = (files: FileList | null | undefined) => {
  if (!files) {
    return null;
  }

  if (files.length === 1) {
    return files[0].name;
  }

  return `${files.length} files`;
};

export const preventDefaults = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
};

export const useInputChangeHandler = ({
  onChange,
}: {
  onChange: FilesChangeListener | undefined;
}) =>
  useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.files),
    [onChange],
  );

export const useTriggerInputClick = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerInputClick = useCallback(
    () => inputRef.current && inputRef.current.click(),
    [],
  );

  return { inputRef, triggerInputClick };
};

export const useDragDrop = ({
  onChange,
  draggable,
}: {
  onChange: FilesChangeListener | undefined;
  draggable: boolean | undefined;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef<FilesChangeListener>();

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !draggable) return undefined;

    const highlight = () => container.classList.add(classes.dragging);

    const unhighlight = () => container.classList.remove(classes.dragging);

    const handleDragEnter = (e: Event) => {
      preventDefaults(e);
      highlight();
    };

    const handleDragLeave = (e: Event) => {
      preventDefaults(e);
      unhighlight();
    };

    const handleDrop = (e: DragEvent) => {
      preventDefaults(e);
      unhighlight();
      if (onChangeRef.current)
        onChangeRef.current(e.dataTransfer && e.dataTransfer.files);
    };

    container.addEventListener('dragenter', handleDragEnter);
    container.addEventListener('dragover', handleDragEnter);
    container.addEventListener('dragleave', handleDragLeave);
    container.addEventListener('drop', handleDrop);

    return () => {
      container.removeEventListener('dragenter', handleDragEnter);
      container.removeEventListener('dragover', handleDragEnter);
      container.removeEventListener('dragleave', handleDragLeave);
      container.removeEventListener('drop', handleDrop);
    };
  }, [draggable]);

  return containerRef;
};

export const useImageDataUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | null | undefined;
  supportedFileTypes: string[];
}) => {
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const file = files && files[0];

    if (!file) return undefined;

    if (!supportedFileTypes.includes(file.type)) {
      return setError('Invalid file type');
    }

    const fileReader = new FileReader();
    const handleLoad = (e: ProgressEvent) => {
      console.log(e);
      const dataUrl = fileReader.result as string;
      setSrc(dataUrl);
    };
    const handleError = (e: ProgressEvent) => {
      console.log(e);
      if (fileReader.error) setError(fileReader.error.message);
    };
    fileReader.addEventListener('load', handleLoad);
    fileReader.addEventListener('error', handleError);
    setSrc(undefined);
    setError(undefined);
    fileReader.readAsDataURL(file);

    return () => {
      fileReader.removeEventListener('load', handleLoad);
      fileReader.removeEventListener('error', handleError);
    };
  }, [files, supportedFileTypes]);

  return { src, error };
};

export const useImageObjectUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | null | undefined;
  supportedFileTypes: string[];
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const file = files && files[0];
    const img = imgRef.current;

    if (!file || !img) return undefined;

    if (!supportedFileTypes.includes(file.type)) {
      return setError('Invalid file type');
    }

    const objectUrl = URL.createObjectURL(file);
    const handleLoad = () => URL.revokeObjectURL(objectUrl);
    img.addEventListener('load', handleLoad);
    setSrc(objectUrl);
    setError(undefined);

    return () => {
      img.removeEventListener('load', handleLoad);
      URL.revokeObjectURL(objectUrl);
    };
  }, [files, supportedFileTypes]);

  return { src, error, imgRef };
};

export const useIframePreview = ({
  files,
}: {
  files: FileList | null | undefined;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const file = files && files[0];
    const iframe = iframeRef.current;

    if (!iframe) return;

    if (!file) {
      setSrc(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    // Set src here instead of binding in JSX to make sure it is used before revoked
    iframe.src = objectUrl;
    setSrc(objectUrl);
    URL.revokeObjectURL(objectUrl);
  }, [files]);

  return { iframeRef, src };
};

export const useObjectUrl = ({
  files,
}: {
  files: FileList | undefined | null;
}) => {
  const [src, setSrc] = useState<string>();
  const cleanupRef = useRef<VoidFunction>();
  const cleanupCallback = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
    }
  }, []);

  useEffect(() => {
    const file = files && files[0];

    if (!file) {
      setSrc(undefined);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(file);
    setSrc(objectUrl);
    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
      console.log(`Cleaned up`);
    };
    cleanupRef.current = cleanup;
    return cleanup;
  }, [files]);

  return { src, cleanupCallback };
};

export const usePdfIframe = ({
  files,
}: {
  files: FileList | null | undefined;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const file = files && files[0];
    const iframe = iframeRef.current;

    if (!iframe) return;

    if (!file) {
      setSrc(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    iframe.src = objectUrl;
    setSrc(objectUrl);
    URL.revokeObjectURL(objectUrl);
  }, [files]);

  return { src, iframeRef };
};
