import React, { FC, memo, RefObject } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useUpdateResultOnMutated } from './utils';

const getType = (o: any) => o?.constructor?.name;

const getLength = (o: any) => o?.length;

export const ResultComponent: FC<ResultProps> = ({ displayRef, result }) => {
  const classes = useStyles();
  useUpdateResultOnMutated({ displayRef });

  return (
    <Box className={classes.result}>
      <Typography>Type: {getType(result)}</Typography>
      <Typography>Length: {getLength(result)}</Typography>
    </Box>
  );
};

const Result = memo(ResultComponent);
Result.displayName = 'Result';
export default Result;

export interface ResultProps {
  result: any;
  displayRef: RefObject<Node>;
}
