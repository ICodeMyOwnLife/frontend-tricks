import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    flipCards: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(480px, 1fr))`,
      gridGap: spacing(3),
      gridAutoRows: '1fr',
    },
    cubes: {
      padding: spacing(6),
    },
    cube: {
      animation: `$cube_rotate 12s linear infinite`,
    },
    '@keyframes cube_rotate': {
      '0%': {
        transform: `rotate3D(6, 3, 1, 0deg)`,
      },
      '33.33%': {
        transform: `rotate3D(6, 3, 1, 360deg)`,
      },
      '33.34%': {
        transform: `rotate3D(1, 6, 3, 0deg)`,
      },
      '66.66%': {
        transform: `rotate3D(1, 6, 3, 360deg)`,
      },
      '66.67%': {
        transform: `rotate3D(3, 1, 6, 0deg)`,
      },
      '100%': {
        transform: `rotate3D(3, 1, 6, 360deg)`,
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'Transform1' });

export default useStyles;
