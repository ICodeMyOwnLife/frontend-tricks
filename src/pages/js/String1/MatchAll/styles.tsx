import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
    inputGroup: { gridColumn: 'span 3' },
  });

const useStyles = makeStyles(styles, { name: 'MatchAll' });

export default useStyles;
