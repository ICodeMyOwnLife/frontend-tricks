import { makeStyles, createStyles } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

const styles = () =>
  createStyles({
    root: {},
    circle: {
      width: 240,
      height: 240,
      borderRadius: '50%',
    },
    fan: {
      backgroundImage: `repeating-conic-gradient(
        from calc(-0.5turn / 6),
        ${orange.A400} 0 calc(1turn / 6),
        transparent 0 calc(2turn / 6))`,
    },
    animation: {
      animation: '3s linear infinite paused',

      '&:hover': {
        animationPlayState: 'running',
      },
    },
    '@keyframes rotate': {
      to: {
        transform: `rotate(360deg)`,
      },
    },
    animation1: {
      animationName: '$rotate',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'PlayState' });

export default useStyles;
