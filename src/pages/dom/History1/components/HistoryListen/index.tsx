/* eslint-disable react/no-array-index-key */
import { FC, memo } from 'react';
import { useHistory, Route, useRouteMatch } from 'react-router';
import { Typography, Button } from '@material-ui/core';
import { useHistories } from './utils';
import useStyles from './styles';

export const HistoryListenComponent: FC = () => {
  const classes = useStyles();
  const { push, replace } = useHistory();
  const { path } = useRouteMatch();
  const histories = useHistories();

  return (
    <div className={classes.root}>
      <Route path={`${path}/abc`}>
        <Typography className={classes.childRoute} variant="h4">
          ABC
        </Typography>
      </Route>
      <Route path={`${path}/xyz`}>
        <Typography className={classes.childRoute} variant="h4">
          XYZ
        </Typography>
      </Route>

      <div className={classes.buttons}>
        <Button
          color="default"
          onClick={() => push(`${path}/abc`)}
          type="button"
          variant="outlined"
        >
          Go ABC
        </Button>
        <Button
          color="default"
          onClick={() => replace(`${path}/xyz`)}
          type="button"
          variant="outlined"
        >
          Go XYZ
        </Button>
        <Button
          color="default"
          onClick={() => push({ search: 'a=1&b=2&c=3' })}
          type="button"
          variant="outlined"
        >
          Search abc
        </Button>
        <Button
          color="default"
          onClick={() => replace({ search: 'x=true&y=false&z=undefined' })}
          type="button"
          variant="outlined"
        >
          Search xyz
        </Button>
      </div>

      <div>
        <Typography color="secondary">Histories:</Typography>
        {histories.map(({ action, location: loc }, index) => (
          <Typography className={classes.history} key={index}>
            {action} {JSON.stringify(loc)}
          </Typography>
        ))}
      </div>
    </div>
  );
};

const HistoryListen = memo(HistoryListenComponent);
HistoryListen.displayName = 'HistoryListen';
export default HistoryListen;
