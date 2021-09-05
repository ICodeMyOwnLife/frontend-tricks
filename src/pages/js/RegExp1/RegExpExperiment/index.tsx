import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import Experiment from 'components/Experiment';
import InputControl from 'components/InputControl';
import { RegExpExperimentFormData, handleSubmit } from './utils';
import useStyles from './styles';

export const RegExpExperimentComponent: FC<RegExpExperimentProps> = ({
  defaultFlags,
  defaultPattern,
  defaultString,
}) => {
  const classes = useStyles();
  const form = useForm<RegExpExperimentFormData>();
  const { register } = form;

  return (
    <Experiment className={classes.root} form={form} onSubmit={handleSubmit}>
      <InputControl
        className={classes.inputGroup}
        component={Input}
        defaultValue={defaultString}
        form={form}
        inputRef={register({ required: 'Required' })}
        label="String"
        multiline
        name="string"
      />
      <InputControl
        component={Input}
        defaultValue={defaultPattern}
        form={form}
        inputRef={register({ required: 'Required' })}
        label="Pattern"
        name="pattern"
      />
      <InputControl
        component={Input}
        defaultValue={defaultFlags}
        form={form}
        inputRef={register}
        label="Flags"
        name="flags"
      />
    </Experiment>
  );
};

const RegExpExperiment = memo(RegExpExperimentComponent);
RegExpExperiment.displayName = 'RegExpExperiment';
export default RegExpExperiment;

export interface RegExpExperimentProps {
  defaultFlags?: string;
  defaultPattern: string;
  defaultString: string;
}
