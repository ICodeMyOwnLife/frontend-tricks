import React, { FC, memo } from 'react';
import { TableRow, TableCell, Checkbox } from '@material-ui/core';

export const ResultComponent: FC<Result> = ({ media, matches }) => (
  <TableRow>
    <TableCell>{media}</TableCell>
    <TableCell>
      <Checkbox checked={matches} readOnly />
    </TableCell>
  </TableRow>
);

const Result = memo(ResultComponent);
Result.displayName = 'Result';
export default Result;

export interface Result {
  media: string;
  matches: boolean;
}
