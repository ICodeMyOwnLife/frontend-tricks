import React, { memo, ReactElement, ComponentType, ReactNode } from 'react';
import { FormContextValues } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import { useHandleSubmit, OnSubmit } from './utils';
import useStyles from './styles';

export function IntlLayoutComponent<TFormData>({
  children,
  form,
  onSubmit,
}: IntlLayoutProps<TFormData>): ReactElement | null {
  const classes = useStyles();
  const { result, handleSubmitForm } = useHandleSubmit({ form, onSubmit });

  return (
    <Box className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmitForm}>
        {children}
        <Button color="primary" fullWidth type="submit" variant="contained">
          Apply
        </Button>
      </form>
      <pre>
        <code>{result}</code>
      </pre>
    </Box>
  );
}

const IntlLayout = memo(IntlLayoutComponent) as typeof IntlLayoutComponent &
  ComponentType<any>;
IntlLayout.displayName = 'IntlLayout';
export default IntlLayout;

export interface IntlLayoutProps<TFormData> {
  children?: ReactNode;
  form: FormContextValues<TFormData>;
  onSubmit: OnSubmit<TFormData>;
}
