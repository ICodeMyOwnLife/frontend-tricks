import { makeStyles, createStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const diameter = 240;

const styles = () =>
  createStyles({
    root: {},
    circle: {
      width: diameter,
      height: diameter,
      borderRadius: '50%',
    },
    '@keyframes rotate': {
      from: {
        transform: `rotate(0turn)`,
      },
      to: {
        transform: `rotate(1turn)`,
      },
    },
    repeatingConic1: {
      backgroundImage: `repeating-conic-gradient(
        from calc(-1turn / 12),
        ${green[500]} 0 calc(1turn / 6),
        transparent 0 calc(2turn / 6),
        ${green[500]} calc(2turn / 6)
      )`,
      animation: `$rotate 6s linear infinite`,
    },
  });

const useStyles = makeStyles(styles, { name: 'RepeatingConic' });

export default useStyles;
