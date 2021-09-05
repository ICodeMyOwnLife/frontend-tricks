import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import InputControl from 'components/InputControl';
import CheckboxControl from 'components/CheckboxControl';
import Select from 'components/Select';
import Experiment from 'components/Experiment';
import { renderOptions } from 'utils/render';
import { CollatorFormData, handleSubmit } from './utils';
import { localeOptions, localeMatcherOptions } from '../common';

const usageValues = ['sort', 'search'] as const;
const sensitivityValues = ['base', 'accent', 'case', 'variant'] as const;
const caseFirstValues = ['upper', 'lower', 'false'] as const;

const usageOptions = renderOptions(usageValues);
const sensitivityOptions = renderOptions(sensitivityValues);
const caseFirstOptions = renderOptions(caseFirstValues);

export const CollatorComponent: FC = () => {
  const form = useForm<CollatorFormData>();
  const { register } = form;

  return (
    <Experiment form={form} onSubmit={handleSubmit}>
      <InputControl
        component={Input}
        form={form}
        inputRef={register({ required: 'Required' })}
        label="List"
        name="listText"
      />
      <InputControl
        component={Select}
        componentChildren={localeOptions}
        form={form}
        label="Locale"
        name="locale"
      />
      <InputControl
        component={Select}
        componentChildren={localeMatcherOptions}
        form={form}
        label="Locale Matcher"
        name="localeMatcher"
      />
      <InputControl
        component={Select}
        componentChildren={usageOptions}
        form={form}
        label="Usage"
        name="usage"
      />
      <InputControl
        component={Select}
        componentChildren={sensitivityOptions}
        form={form}
        label="Sensitivity"
        name="sensitivity"
      />
      <InputControl
        component={Select}
        componentChildren={caseFirstOptions}
        form={form}
        label="Case First"
        name="caseFirst"
      />
      <CheckboxControl
        form={form}
        inputRef={register}
        label="Ignore Punctuation"
        name="ignorePunctuation"
      />
      <CheckboxControl
        form={form}
        inputRef={register}
        label="Numeric"
        name="numeric"
      />
    </Experiment>
  );
};

const Collator = memo(CollatorComponent);
Collator.displayName = 'Collator';
export default Collator;
