import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  deepPurple,
  indigo,
  deepOrange,
  yellow,
  blue,
  grey,
  pink,
  cyan,
  green,
  red,
  amber,
  lime,
} from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridAutoFlow: 'row',
      gridGap: spacing(2, 0),
    },
    rectangle: {
      height: 120,
    },
    linear1: {
      backgroundImage: `linear-gradient(
        to right top,
        ${deepPurple[700]},
        ${indigo.A100})`,
    },
    linear2: {
      backgroundImage: `linear-gradient(
        -90deg,
        #f00,
        #ff0,
        #0f0,
        #0ff,
        #00f,
        #f0f,
        #f00)`,
    },
    linear3: {
      backgroundImage: `linear-gradient(
        to bottom right,
        ${deepOrange[600]} 30%,
        ${yellow[500]},
        ${deepOrange[600]} 70%)`,
    },
    linear4: {
      backgroundImage: `linear-gradient(
        to bottom,
        ${grey[100]},
        ${grey[500]} 50%,
        ${grey[100]} 50%,
        ${grey[500]})`,
    },
    linear5: {
      backgroundImage: `linear-gradient(
        140deg,
        ${blue[400]} 0 20%,
        ${blue[900]} 0 23%,
        ${blue[400]} 0 24%,
        ${blue[900]} 0 25%,
        ${blue[400]} 0 26%,
        ${blue[900]} 0 27%,
        ${blue[400]} 0 28%,
        ${blue[900]} 0 29%,
        ${blue[400]} 0 100%)`,
    },
    '@keyframes background1': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
    linear6: {
      backgroundImage: `linear-gradient(
        -45deg,
        ${deepOrange[400]},
        ${pink[500]},
        ${cyan[600]},
        ${green.A700})`,
      backgroundSize: '200% 200%',
      animation: `$background1 16s ease infinite`,
    },
    linear7: {
      backgroundImage: `linear-gradient(
        90deg,
        ${indigo[500]} 0 calc(100% / 8),
        ${deepPurple[400]} 0 calc(200% / 8),
        ${red[500]} 0 calc(300% / 8),
        ${deepOrange[400]} 0 calc(400% / 8),
        ${amber[600]} 0 calc(500% / 8),
        ${lime[500]} 0 calc(600% / 8),
        ${green.A700} 0 calc(700% / 8),
        ${cyan.A400} 0 calc(800% / 8)
      )`,
    },
  });

const useStyles = makeStyles(styles, { name: 'Linear' });

export default useStyles;
