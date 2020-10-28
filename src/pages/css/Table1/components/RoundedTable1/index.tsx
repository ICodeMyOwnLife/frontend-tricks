import React, { memo, ReactElement, ComponentType } from 'react';
import BaseTable, { BaseTableProps } from '../BaseTable';
import useStyles from './styles';

export function RoundedTable1Component<TData extends Record<string, any>>({
  ...props
}: RoundedTable1Props<TData>): ReactElement | null {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <BaseTable {...props} classes={classes} />
    </div>
  );
}

const RoundedTable1 = memo(
  RoundedTable1Component,
) as typeof RoundedTable1Component & ComponentType<any>;
RoundedTable1.displayName = 'RoundedTable1';
export default RoundedTable1;

export interface RoundedTable1Props<TData extends Record<string, any>>
  extends BaseTableProps<TData> {}
