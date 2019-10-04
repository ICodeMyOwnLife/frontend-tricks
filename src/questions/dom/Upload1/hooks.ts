/* eslint-disable no-console */
import {
  useCallback,
  FormEvent,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  FormEventHandler,
} from 'react';
import { BASE_URL } from 'constants/common';

const upload = ({
  formData,
  url,
  setStatus,
}: {
  formData: FormData;
  url: string;
  setStatus: Dispatch<SetStateAction<UploadStatus>>;
}) => {
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
  xhr.addEventListener('error', () => {
    const error = xhr.responseText || 'UNKNOWN ERROR';
    setStatus({ loading: false, error, progressPercentage: 0 });
  });
  xhr.open('POST', url, true);
  xhr.timeout = 2000;
  setStatus({ loading: true, progressPercentage: 0 });
  xhr.send(formData);
};

export const uploadWholeForm = ({
  form,
  url,
  setStatus,
}: {
  form: HTMLFormElement | null | undefined;
  url: string;
  setStatus: Dispatch<SetStateAction<UploadStatus>>;
}) => {
  if (!form) return;

  const formData = new FormData(form);
  upload({ formData, url, setStatus });
};

export const uploadFilesOnly = ({
  input,
  url,
  fieldName,
  multiple,
  setStatus,
}: {
  input: HTMLInputElement | undefined | null;
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

  upload({ formData, url, setStatus });
};

export const useUploadWholeForm = ({ url }: { url: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [uploadWholeFormStatus, setUploadWholeFormStatus] = useState<
    UploadStatus
  >({
    loading: false,
    progressPercentage: 0,
  });

  const handleUploadWholeForm = useCallback<FormEventHandler>(
    e => {
      e.preventDefault();

      uploadWholeForm({
        form: formRef.current,
        url,
        setStatus: setUploadWholeFormStatus,
      });
    },
    [url],
  );

  return {
    formRef,
    handleUploadWholeForm,
    uploadWholeFormStatus,
  };
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

      uploadFilesOnly({
        input: inputSingleRef.current,
        url: `${BASE_URL}/upload-single`,
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

      uploadFilesOnly({
        input: inputMultipleRef.current,
        url: `${BASE_URL}/upload-multiple`,
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
  error?: string;
}
