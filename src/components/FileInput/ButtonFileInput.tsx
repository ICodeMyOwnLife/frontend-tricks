import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { Button, Typography } from '@material-ui/core';
import {
  useTriggerInputClick,
  useInputChangeHandler,
  useDragDrop,
  getFileName,
} from './hooks';
import { FileInputProps } from './types';
import useStyles from './styles';

export const ButtonFileInputImpl: FC<FileInputProps> = ({
  className,
  files,
  onChange,
  draggable,
  children = 'Choose File',
  ...props
}) => {
  const classes = useStyles();
  const handleInputChange = useInputChangeHandler({ onChange });
  const { inputRef, triggerInputClick } = useTriggerInputClick();
  const containerRef = useDragDrop({ onChange, draggable });
  const filename = getFileName(files);

  return (
    <div className={clsx(classes.FileInput, className)} ref={containerRef}>
      <Button
        type="button"
        variant="contained"
        color="primary"
        size="small"
        onClick={triggerInputClick}
      >
        {children}
      </Button>

      <input
        ref={inputRef}
        type="file"
        onChange={handleInputChange}
        hidden
        {...props}
      />

      {filename && (
        <Typography
          className={classes.Filename}
          title={filename}
          variant="body1"
        >
          {filename}
        </Typography>
      )}
    </div>
  );
};

const ButtonFileInput = memo(ButtonFileInputImpl);
ButtonFileInput.displayName = 'ButtonFileInput';
export default ButtonFileInput;
