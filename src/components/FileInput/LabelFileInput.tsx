import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { Button, Typography } from '@material-ui/core';
import { useInputChangeHandler, useDragDrop, getFileName } from './hooks';
import { FileInputProps } from './types';
import useStyles from './styles';

export const LabelFileInputImpl: FC<FileInputProps> = ({
  className,
  files,
  id,
  onChange,
  draggable,
  children = 'Choose File',
  ...props
}) => {
  const classes = useStyles();
  const handleInputChange = useInputChangeHandler({ onChange });
  const containerRef = useDragDrop({ onChange, draggable });
  const filename = getFileName(files);

  return (
    <div className={clsx(classes.FileInput, className)} ref={containerRef}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        component="label"
        htmlFor={id}
      >
        {children}
      </Button>

      <input
        className={clsx(classes.HiddenInput)}
        id={id}
        type="file"
        onChange={handleInputChange}
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

const LabelFileInput = memo(LabelFileInputImpl);
LabelFileInput.displayName = 'LabelFileInput';
export default LabelFileInput;
