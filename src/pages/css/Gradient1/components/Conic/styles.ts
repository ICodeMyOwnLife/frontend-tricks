import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  yellow,
  red,
  purple,
  indigo,
  green,
  orange,
} from '@material-ui/core/colors';

const diameter = 240;

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${diameter}px, 1fr))`,
      gridGap: spacing(3),
    },
    circle: {
      width: diameter,
      height: diameter,
      borderRadius: '50%',
    },
    '@keyframes rotate': {
      from: {
        transform: `rotate(0deg)`,
      },
      to: {
        transform: `rotate(360deg)`,
      },
    },
    conic1: {
      backgroundImage: `conic-gradient(from 40deg, white, black, white)`,
    },
    conic2: {
      backgroundImage: `conic-gradient(
        #f00,
        #ff0,
        #0f0,
        #0ff,
        #00f,
        #f0f,
        #f00)`,
      animation: `$rotate 4s linear infinite`,
    },
    conic3: {
      backgroundImage: `conic-gradient(
        ${red.A200} 0 50deg,
        ${yellow.A200} 0 70deg,
        ${purple.A200} 0 102deg,
        ${green.A200} 0 192deg,
        ${orange.A200} 0 224deg,
        ${indigo.A200} 0 360deg)`,
    },
  });

const useStyles = makeStyles(styles, { name: 'Conic' });

export default useStyles;
