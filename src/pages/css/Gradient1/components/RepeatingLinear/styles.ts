import { makeStyles, createStyles, fade } from '@material-ui/core';
import { lime } from '@material-ui/core/colors';

const styles = () =>
  createStyles({
    root: {},
    rectangle: {
      height: 40,
    },
    '@keyframes progress1': {
      from: {
        backgroundPositionX: '100%',
      },
      to: {
        backgroundPositionX: '0%',
      },
    },
    repeatingLinear1: {
      backgroundImage: `repeating-linear-gradient(
        -60deg,
        ${fade(lime.A400, 0.7)} 0%,
        ${fade(lime.A400, 0.7)} 2%,
        ${lime.A400} 2%,
        ${lime.A400} 4%)`,
      backgroundSize: `200% 100%`,
      animation: `$progress1 8s linear infinite`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'RepeatingLinear' });

export default useStyles;
