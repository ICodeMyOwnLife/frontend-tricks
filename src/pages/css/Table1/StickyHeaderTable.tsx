/* eslint-disable react/no-array-index-key */
import { FC, memo } from 'react';
import useStyles from './StickyHeaderTable.styles';

export const StickyHeaderTableComponent: FC<StickyHeaderTableProps> = ({
  cols,
  data,
}) => {
  const classes = useStyles();

  return (
    <table className={classes.root}>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {cols.map(col =>
              i % 20 === 0 ? (
                <th
                  style={{ filter: `hue-rotate(${i * 23}deg)` }}
                  key={row[col]}
                >
                  {row[col]}
                </th>
              ) : (
                <td key={row[col]}>{row[col]}</td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StickyHeaderTable = memo(StickyHeaderTableComponent);
StickyHeaderTable.displayName = 'StickyHeaderTable';
export default StickyHeaderTable;

export interface StickyHeaderTableProps {
  cols: number[];
  data: { [key: number]: any }[];
}
