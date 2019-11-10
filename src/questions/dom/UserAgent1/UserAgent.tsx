import React, { FC, memo } from 'react';
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

export const UserAgentComponent: FC<UserAgentProps> = ({ uaResult }) => {
  if (!uaResult) return <Typography>Loading...</Typography>;

  const { browser, cpu, device, engine, os, ua } = uaResult;
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography>{ua}</Typography>
      </Grid>
      <Grid item>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Browser</TableCell>
              <TableCell>{JSON.stringify(browser)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CPU</TableCell>
              <TableCell>{JSON.stringify(cpu)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Device</TableCell>
              <TableCell>{JSON.stringify(device)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Engine</TableCell>
              <TableCell>{JSON.stringify(engine)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>OS</TableCell>
              <TableCell>{JSON.stringify(os)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

const UserAgent = memo(UserAgentComponent);
UserAgent.displayName = 'UserAgent';
export default UserAgent;

export interface UserAgentProps {
  uaResult?: IUAParser.IResult;
}
