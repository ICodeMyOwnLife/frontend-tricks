/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { useInputChangeHandler, useDragDrop, getFileName } from './hooks';
import { FileInputProps } from './types';
import classes from './styles.module.scss';

export const LabelFileInputImpl: FC<FileInputProps> = ({
  className,
  files,
  id,
  onChange,
  draggable,
  children = 'Choose File',
  ...props
}) => {
  const handleInputChange = useInputChangeHandler({ onChange });
  const containerRef = useDragDrop({ onChange, draggable });
  const filename = getFileName(files);

  return (
    <div
      className={classnames(classes.FileInput, className)}
      ref={containerRef}
    >
      <label className={classes.Button} htmlFor={id}>
        {children}
      </label>
      <input
        className={classnames(classes.Input, classes.visuallyHidden)}
        id={id}
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

const ButtonFileInput = memo(LabelFileInputImpl);
ButtonFileInput.displayName = 'ButtonFileInput';
export default ButtonFileInput;
