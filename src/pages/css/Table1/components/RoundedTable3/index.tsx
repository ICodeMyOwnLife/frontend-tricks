import React, { memo, ReactElement, ComponentType } from 'react';
import BaseTable, { BaseTableProps } from '../BaseTable';
import useStyles from './styles';

export function RoundedTable3Component<TData extends Record<string, any>>(
  props: RoundedTable3Props<TData>,
): ReactElement | null {
  const classes = useStyles();
  return <BaseTable {...props} classes={classes} />;
}

const RoundedTable3 = memo(
  RoundedTable3Component,
) as typeof RoundedTable3Component & ComponentType<any>;
RoundedTable3.displayName = 'RoundedTable3';
export default RoundedTable3;

export interface RoundedTable3Props<TData extends Record<string, any>>
  extends BaseTableProps<TData> {}
