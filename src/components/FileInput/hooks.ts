/* eslint-disable no-console */
import { useCallback, ChangeEvent, useRef, useEffect, useState } from 'react';
import { FilesChangeListener } from './types';

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
  const draggingClass = 'dragging';
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef<FilesChangeListener>();

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !draggable) return undefined;

    const highlight = () => container.classList.add(draggingClass);

    const unhighlight = () => container.classList.remove(draggingClass);

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

export const useDataUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | null | undefined;
  supportedFileTypes?: string[];
}) => {
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const file = files && files[0];

    if (!file) return;

    if (supportedFileTypes && !supportedFileTypes.includes(file.type)) {
      setError('Unsupported file type');
      setSrc(undefined);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const dataUrl = fileReader.result as string;
      setSrc(dataUrl);
    };
    fileReader.onerror = () => {
      if (fileReader.error) setError(fileReader.error.message);
    };
    fileReader.readAsDataURL(file);
  }, [files, supportedFileTypes]);

  return { src, error };
};

export const useObjectUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | undefined | null;
  supportedFileTypes?: string[];
}) => {
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();
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

    if (supportedFileTypes && !supportedFileTypes.includes(file.type)) {
      setError('Unsupported file type');
      setSrc(undefined);
      return undefined;
    }

    let objectUrl: string | undefined;

    try {
      objectUrl = URL.createObjectURL(file);
      setSrc(objectUrl);
    } catch (e) {
      setError(e);
    }

    const cleanup = () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
    cleanupRef.current = cleanup;
    return cleanup;
  }, [files, supportedFileTypes]);

  return { src, error, cleanupCallback };
};
