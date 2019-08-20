import { InputHTMLAttributes, ReactNode, RefObject } from 'react';

export interface FileInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'type' | 'onChange'
  > {
  id: string;
  files?: FileList | null;
  onChange?: (files: FileList | null) => void;
  draggable?: boolean;
  children?: ReactNode;
}

export interface ImagePreviewProps {
  className?: string;
  imageClassName?: string;
  errorClassName?: string;
  src?: string;
  error?: string;
  imgRef?: RefObject<HTMLImageElement>;
}

export interface UrlImagePreviewProps {
  className?: string;
  imageClassName?: string;
  errorClassName?: string;
  files: FileList | null | undefined;
  supportedFileTypes?: string[];
}

export interface ImageInputProps extends FileInputProps {
  supportedFileTypes?: string[];
}

export type FilesChangeListener = (files: FileList | null) => void;
