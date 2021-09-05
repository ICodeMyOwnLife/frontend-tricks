import { FC, memo } from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

export const SpinnerComponent: FC<SpinnerProps> = ({ loading }) => {
  const classes = useStyles();

  return loading ? (
    <div className={classes.root}>
      <CircularProgress size={32} />
    </div>
  ) : null;
};

const Spinner = memo(SpinnerComponent);
Spinner.displayName = 'Spinner';
export default Spinner;

export interface SpinnerProps {
  loading: boolean;
}
