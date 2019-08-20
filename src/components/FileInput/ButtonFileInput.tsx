/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import classnames from 'classnames';
import {
  useTriggerInputClick,
  useInputChangeHandler,
  useDragDrop,
  getFileName,
} from './hooks';
import { FileInputProps } from './types';
import classes from './styles.module.scss';

export const ButtonFileInputImpl: FC<FileInputProps> = ({
  className,
  files,
  onChange,
  draggable,
  children = 'Choose File',
  ...props
}) => {
  const handleInputChange = useInputChangeHandler({ onChange });
  const { inputRef, triggerInputClick } = useTriggerInputClick();
  const containerRef = useDragDrop({ onChange, draggable });
  const filename = getFileName(files);

  return (
    <div
      className={classnames(classes.FileInput, className)}
      ref={containerRef}
    >
      <button
        className={classes.Button}
        type="button"
        onClick={triggerInputClick}
      >
        {children}
      </button>
      <input
        className={classnames(classes.Input, classes.displayNone)}
        ref={inputRef}
        type="file"
        onChange={handleInputChange}
        {...props}
      />
      {filename && (
        <span className={classes.Filename} title={filename}>
          {filename}
        </span>
      )}
    </div>
  );
};

const ButtonFileInput = memo(ButtonFileInputImpl);
ButtonFileInput.displayName = 'ButtonFileInput';
export default ButtonFileInput;
