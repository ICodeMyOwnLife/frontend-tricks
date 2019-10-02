import { useCallback, FormEvent, useRef, useState } from 'react';
import { BASE_URL } from 'constants/common';

export const useUploadSingle = () => {
  const inputSingleRef = useRef<HTMLInputElement>(null);
  const [uploadSingleResult, setUploadSingleResult] = useState<any>();

  const handleUploadSingle = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUploadSingleResult(undefined);
      const file =
        inputSingleRef.current &&
        inputSingleRef.current.files &&
        inputSingleRef.current.files[0];

      if (!file) return;

      const formData = new FormData();
      formData.append('single-file', file, file.name);
      const res = await fetch(`${BASE_URL}/upload-single`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setUploadSingleResult(data);
    },
    [],
  );

  return {
    inputSingleRef,
    uploadSingleResult,
    handleUploadSingle,
  };
};

export const useUploadMultiple = () => {
  const inputMultipleRef = useRef<HTMLInputElement>(null);
  const [uploadMultipleResult, setUploadMultipleResult] = useState<any>();

  const handleUploadMultiple = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUploadMultipleResult(undefined);
      const files = inputMultipleRef.current && inputMultipleRef.current.files;

      if (!files) return;

      const formData = new FormData();

      for (let i = 0; i < files.length; ++i) {
        const file = files[i];
        formData.append('multiple-files', file, file.name);
      }

      const res = await fetch(`${BASE_URL}/upload-multiple`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setUploadMultipleResult(data);
    },
    [],
  );

  return {
    inputMultipleRef,
    uploadMultipleResult,
    handleUploadMultiple,
  };
};
