import { FC, memo } from 'react';
import { TableRow, TableCell, Checkbox, Box } from '@material-ui/core';

export const ResultComponent: FC<ResultProps> = ({
  media,
  matches,
  view = 'table',
}) =>
  view === 'table' ? (
    <TableRow>
      <TableCell>{media}</TableCell>
      <TableCell>
        <Checkbox checked={matches} readOnly />
      </TableCell>
    </TableRow>
  ) : (
    <Box marginTop={2}>
      <b>{media}:</b> {matches ? 'true' : 'false'}
    </Box>
  );

const Result = memo(ResultComponent);
Result.displayName = 'Result';
export default Result;

export interface ResultProps {
  media: string;
  matches: boolean;
  view?: 'table' | 'text';
}
