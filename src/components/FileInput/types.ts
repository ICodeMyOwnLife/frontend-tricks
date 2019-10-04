import {
  InputHTMLAttributes,
  ReactNode,
  EventHandler,
  SyntheticEvent,
} from 'react';

export type TriggerComponent = 'button' | 'label';

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

export interface PreviewContainerProps {
  className?: string;
  errorClassName?: string;
  error?: string;
  hidden?: boolean;
  children?: ReactNode;
}

export interface PreviewProps extends PreviewContainerProps {
  previewClassName?: string;
  title?: string;
  src?: string;
  onLoad?: EventHandler<SyntheticEvent>;
}

export interface WrappedInputProps extends FileInputProps {
  title: string;
  triggerComponent?: TriggerComponent;
  supportedFileTypes?: string[];
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
