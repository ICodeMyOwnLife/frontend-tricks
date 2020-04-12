import { makeStyles, createStyles } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';

const diameter = 240;

const styles = () =>
  createStyles({
    root: {},
    circle: {
      width: diameter,
      height: diameter,
      borderRadius: '50%',
    },
    '@keyframes background1': {
      from: {
        backgroundSize: '100% 100%',
      },
      to: {
        backgroundSize: '200% 200%',
      },
    },
    repeatingRadial1: {
      backgroundImage: `repeating-radial-gradient(
        transparent 0 2%,
        ${amber.A400} 0 4%,
        transparent 4%
      )`,
      backgroundPosition: 'center',
      animation: `$background1 4s linear infinite`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'RepeatingRadial' });

export default useStyles;
