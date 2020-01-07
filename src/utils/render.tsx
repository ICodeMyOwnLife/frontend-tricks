/* eslint-disable react/jsx-indent */
import React from 'react';
import { MenuItem } from '@material-ui/core';

export const renderOptions = (
  values: readonly string[] | Readonly<Record<string, string>>,
  {
    noValueLabel = '(no value)',
    renderNoValue = true,
  }: RenderOptionsSettings = {},
) => {
  const valueOptions = Array.isArray(values)
    ? values.map(item => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))
    : Object.entries(values).map(([value, name]) => (
        <MenuItem key={value} value={value}>
          {name}
        </MenuItem>
      ));
  return renderNoValue
    ? [
        <MenuItem key="no-value" value="">
          {noValueLabel}
        </MenuItem>,
        ...valueOptions,
      ]
    : valueOptions;
};

export interface RenderOptionsSettings {
  renderNoValue?: boolean;
  noValueLabel?: string;
}
