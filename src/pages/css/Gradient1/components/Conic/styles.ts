import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  yellow,
  red,
  purple,
  indigo,
  green,
  orange,
  amber,
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
        from -40deg,
        ${amber.A200} 80deg,
        transparent 80deg,
        transparent 120deg,
        ${amber.A200} 120deg,
        ${amber.A200} 200deg,
        transparent 200deg,
        transparent 240deg,
        ${amber.A200} 240deg,
        ${amber.A200} 320deg,
        transparent 320deg
        )`,
      animation: `$rotate 4s linear infinite`,
    },
    conic4: {
      backgroundImage: `conic-gradient(
        ${red.A200},
        ${red.A200} 50deg,
        ${yellow.A200} 50deg,
        ${yellow.A200} 70deg,
        ${purple.A200} 70deg,
        ${purple.A200} 82deg,
        ${green.A200} 82deg,
        ${green.A200} 168deg,
        ${orange.A200} 168deg,
        ${orange.A200} 194deg,
        ${indigo.A200} 194deg,
        ${indigo.A200})`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Conic' });

export default useStyles;
