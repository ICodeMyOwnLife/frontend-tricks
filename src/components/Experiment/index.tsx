import { memo, ReactElement, ComponentType, ReactNode } from 'react';
import { FormContextValues } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useHandleSubmit, OnSubmit } from './utils';
import useStyles from './styles';

export function ExperimentComponent<TFormData>({
  children,
  className,
  form,
  onSubmit,
}: ExperimentProps<TFormData>): ReactElement | null {
  const classes = useStyles();
  const { result, handleSubmitForm } = useHandleSubmit({ form, onSubmit });

  return (
    <Box className={clsx(classes.root, className)}>
      <form className={classes.form} onSubmit={handleSubmitForm}>
        {children}
        <Button
          className={classes.submitButton}
          color="default"
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Apply
        </Button>
      </form>
      {!!result && (
        <Typography
          className={classes.result}
          color="textPrimary"
          variant="subtitle2"
        >
          {JSON.stringify(result, null, 2)}
        </Typography>
      )}
    </Box>
  );
}

const Experiment = memo(ExperimentComponent) as typeof ExperimentComponent &
  ComponentType<any>;
Experiment.displayName = 'Experiment';
export default Experiment;

export interface ExperimentProps<TFormData> {
  children?: ReactNode;
  className?: string;
  form: FormContextValues<TFormData>;
  onSubmit: OnSubmit<TFormData>;
}
