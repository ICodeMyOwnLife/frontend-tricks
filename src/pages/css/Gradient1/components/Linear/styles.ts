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
        ${blue[400]} 20%,
        ${blue[900]} 20%,
        ${blue[900]} 23%,
        ${blue[400]} 23%,
        ${blue[400]} 24%,
        ${blue[900]} 24%,
        ${blue[900]} 25%,
        ${blue[400]} 25%,
        ${blue[400]} 26%,
        ${blue[900]} 26%,
        ${blue[900]} 27%,
        ${blue[400]} 27%,
        ${blue[400]} 28%,
        ${blue[900]} 28%,
        ${blue[900]} 29%,
        ${blue[400]} 29%)`,
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
      backgroundImage: `linear-gradient(-45deg, ${deepOrange[400]}, ${pink[500]}, ${cyan[600]}, ${green.A700})`,
      backgroundSize: '200% 200%',
      animation: `$background1 16s ease infinite`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Linear' });

export default useStyles;
