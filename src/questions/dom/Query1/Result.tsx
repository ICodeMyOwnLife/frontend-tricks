import React, { FC, memo } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

const getType = (o: any) =>
  JSON.stringify(o && o.constructor && o.constructor.name);

const getLength = (o: any) => JSON.stringify(o && o.length);

export const ResultComponent: FC<ResultProps> = ({ result }) => {
  const classes = useStyles();

  return (
    <Box className={classes.Result}>
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
  updateToken: any;
}
