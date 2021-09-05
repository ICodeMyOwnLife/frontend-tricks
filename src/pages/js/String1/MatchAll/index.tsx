import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import Experiment from 'components/Experiment';
import InputControl from 'components/InputControl';
import { MatchAllFormData, handleSubmit } from './utils';
import useStyles from './styles';

const defaultString = `2019-12-31
2020-01-01`;

export const MatchAllComponent: FC = () => {
  const classes = useStyles();
  const form = useForm<MatchAllFormData>();
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
        defaultValue="(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})"
        form={form}
        inputRef={register({ required: 'Required' })}
        label="Pattern"
        name="pattern"
      />
      <InputControl
        component={Input}
        defaultValue="g"
        form={form}
        inputRef={register}
        label="Flags"
        name="flags"
      />
    </Experiment>
  );
};

const MatchAll = memo(MatchAllComponent);
MatchAll.displayName = 'MatchAll';
export default MatchAll;
