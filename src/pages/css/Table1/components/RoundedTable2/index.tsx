import React, { memo, ReactElement, ComponentType } from 'react';
import BaseTable, { BaseTableProps } from '../BaseTable';
import useStyles from './styles';

export function RoundedTable2Component<TData extends Record<string, any>>(
  props: RoundedTable2Props<TData>,
): ReactElement | null {
  const classes = useStyles();
  return <BaseTable {...props} classes={classes} />;
}

const RoundedTable2 = memo(
  RoundedTable2Component,
) as typeof RoundedTable2Component & ComponentType<any>;
RoundedTable2.displayName = 'RoundedTable2';
export default RoundedTable2;

export interface RoundedTable2Props<TData extends Record<string, any>>
  extends BaseTableProps<TData> {}
