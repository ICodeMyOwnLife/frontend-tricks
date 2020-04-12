import { makeStyles, createStyles, fade, Theme } from '@material-ui/core';
import { lime } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridAutoFlow: 'row',
      gridGap: spacing(2, 0),
    },
    rectangleShort: {
      height: 40,
    },
    rectangleTall: {
      height: 120,
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
        ${fade(lime.A400, 0.7)} 0 2%,
        ${lime.A400} 0 4%)`,
      backgroundSize: `200% 100%`,
      animation: `$progress1 8s linear infinite`,
    },
    repeatingLinear2: {
      backgroundImage: `
      repeating-linear-gradient(45deg, #ffffffaa 0 2px, transparent 0 10px),
      repeating-linear-gradient(-45deg, #ffffffaa 0 2px, transparent 0 12px)`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'RepeatingLinear' });

export default useStyles;
