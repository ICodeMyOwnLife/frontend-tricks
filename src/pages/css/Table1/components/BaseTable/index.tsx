import clsx from 'clsx';
import React, {
  memo,
  ReactElement,
  ComponentType,
  TableHTMLAttributes,
} from 'react';
import { HaveClasses } from 'types/app-common';
import useStyles from './styles';

export function BaseTableComponent<TData extends Record<string, any>>({
  className,
  classes: propClasses = {},
  dataList,
  ...props
}: BaseTableProps<TData>): ReactElement | null {
  const classes = useStyles();
  const dataKeys = Object.keys(dataList[0]);

  return (
    <table {...props} className={clsx(className, propClasses.root)}>
      <thead className={clsx(classes.head, propClasses.head)}>
        <tr>
          {dataKeys.map(k => (
            <th key={k}>{k}</th>
          ))}
        </tr>
      </thead>
      <tbody className={propClasses.body}>
        {dataList.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={idx}>
            {dataKeys.map(k => (
              <td key={k}>{item[k]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const BaseTable = memo(BaseTableComponent) as typeof BaseTableComponent &
  ComponentType<any>;
BaseTable.displayName = 'BaseTable';
export default BaseTable;

export interface BaseTableProps<TData extends Record<string, any>>
  extends TableHTMLAttributes<HTMLTableElement>,
    HaveClasses<'root' | 'head' | 'body'> {
  dataList: TData[];
}
