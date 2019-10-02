import {
  useCallback,
  FormEvent,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { BASE_URL } from 'constants/common';

export const upload = async ({
  input,
  method,
  url,
  fieldName,
  multiple,
  setStatus,
}: {
  input: HTMLInputElement | undefined | null;
  method: string;
  url: string;
  fieldName: string;
  multiple: boolean;
  setStatus: Dispatch<SetStateAction<UploadStatus>>;
}) => {
  const files = input && input.files;
  if (!files) return;
  const count = multiple ? files.length : Math.max(1, files.length);
  const formData = new FormData();
  for (let i = 0; i < count; ++i) {
    const file = files[i];
    formData.append(fieldName, file, file.name);
  }

  const xhr = new XMLHttpRequest();
  xhr.addEventListener(
    'progress',
    e => {
      if (e.lengthComputable) {
        console.log(e.loaded);
        const progressPercentage = Math.round((e.loaded * 100) / e.total);
        setStatus(status => ({ ...status, progressPercentage }));
      }
    },
    false,
  );
  xhr.addEventListener(
    'load',
    () =>
      setStatus({
        loading: false,
        progressPercentage: 100,
        result: JSON.parse(xhr.response),
      }),
    false,
  );
  xhr.open(method, url);
  setStatus({ loading: true, progressPercentage: 0 });
  xhr.send(formData);
};

export const useUploadSingle = () => {
  const inputSingleRef = useRef<HTMLInputElement>(null);
  const [uploadSingleStatus, setUploadSingleStatus] = useState<UploadStatus>({
    loading: false,
    progressPercentage: 0,
  });

  const handleUploadSingle = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      upload({
        input: inputSingleRef.current,
        url: `${BASE_URL}/upload-single`,
        method: 'POST',
        fieldName: 'single-file',
        setStatus: setUploadSingleStatus,
        multiple: false,
      });
    },
    [],
  );

  return {
    inputSingleRef,
    handleUploadSingle,
    uploadSingleStatus,
  };
};

export const useUploadMultiple = () => {
  const inputMultipleRef = useRef<HTMLInputElement>(null);
  const [uploadMultipleStatus, setUploadMultipleStatus] = useState<
    UploadStatus
  >({ loading: false, progressPercentage: 0 });

  const handleUploadMultiple = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      upload({
        input: inputMultipleRef.current,
        url: `${BASE_URL}/upload-multiple`,
        method: 'POST',
        fieldName: 'multiple-files',
        setStatus: setUploadMultipleStatus,
        multiple: true,
      });
    },
    [],
  );

  return {
    inputMultipleRef,
    handleUploadMultiple,
    uploadMultipleStatus,
  };
};

export interface UploadStatus {
  progressPercentage: number;
  loading: boolean;
  result?: any;
}
