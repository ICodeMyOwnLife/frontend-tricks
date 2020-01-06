import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import InputControl from 'components/InputControl';
import CheckboxControl from 'components/CheckboxControl';
import Select from 'components/Select';
import { renderOptions } from 'utils/render';
import IntlLayout from '../IntlLayout';
import { CollatorFormData, handleSubmit } from './utils';
import { localeOptions, localeValues } from '../common';

const localeMatcherValues = ['lookup', 'best fit'] as const;
const usageValues = ['sort', 'search'] as const;
const sensitivityValues = ['base', 'accent', 'case', 'variant'] as const;
const caseFirstValues = ['upper', 'lower', 'false'] as const;

const localeMatcherOptions = renderOptions(localeMatcherValues);
const usageOptions = renderOptions(usageValues);
const sensitivityOptions = renderOptions(sensitivityValues);
const caseFirstOptions = renderOptions(caseFirstValues);

export const CollatorComponent: FC = () => {
  const form = useForm<CollatorFormData>();
  const { register } = form;

  return (
    <IntlLayout form={form} onSubmit={handleSubmit}>
      <InputControl
        component={Input}
        form={form}
        inputRef={register}
        label="List"
        name="listText"
      />
      <InputControl
        component={Select}
        componentChildren={localeOptions}
        defaultValue={Object.keys(localeValues)[0]}
        form={form}
        inputRef={register}
        label="Locale"
        name="locale"
      />
      <InputControl
        component={Select}
        componentChildren={localeMatcherOptions}
        defaultValue={localeMatcherValues[0]}
        form={form}
        inputRef={register}
        label="Locale Matcher"
        name="localeMatcher"
      />
      <InputControl
        component={Select}
        componentChildren={usageOptions}
        defaultValue={usageValues[0]}
        form={form}
        inputRef={register}
        label="Usage"
        name="usage"
      />
      <InputControl
        component={Select}
        componentChildren={sensitivityOptions}
        defaultValue={sensitivityValues[0]}
        form={form}
        inputRef={register}
        label="Sensitivity"
        name="sensitivity"
      />
      <InputControl
        component={Select}
        componentChildren={caseFirstOptions}
        defaultValue={caseFirstValues[0]}
        form={form}
        inputRef={register}
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
    </IntlLayout>
  );
};

const Collator = memo(CollatorComponent);
Collator.displayName = 'Collator';
export default Collator;
