/* eslint-disable react/jsx-indent */
import React from 'react';
import { MenuItem } from '@material-ui/core';

export const renderOptions = (
  values: readonly string[] | Readonly<Record<string, string>>,
) =>
  Array.isArray(values)
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
