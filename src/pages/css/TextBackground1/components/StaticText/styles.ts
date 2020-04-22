import { makeStyles, createStyles } from '@material-ui/core';
import {
  orange,
  teal,
  yellow,
  purple,
  red,
  pink,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  green,
  lightGreen,
  lime,
  amber,
  deepOrange,
} from '@material-ui/core/colors';
import imageSrc from './1.jpg';
import { backgroundClipCss } from '../styles';

const styles = () =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    text: {
      ...backgroundClipCss,
      fontSize: 120,
      fontWeight: 'bold',
      lineHeight: 1.2,
      backgroundColor: orange[400],
    },
    linear: {
      backgroundImage: `linear-gradient(
        to bottom,
        ${teal[900]} 0%,
        ${yellow[400]} 50%,
        ${teal[900]} 100%
      )`,
    },
    radial: {
      backgroundImage: `radial-gradient(
        ellipse at center,
        ${purple[300]} 0%,
        rgba(0, 0, 0, 1) 100%
      )`,
    },
    conic: {
      backgroundImage: `conic-gradient(
        from 65deg,
        ${red[500]},
        ${pink[500]},
        ${purple[500]},
        ${deepPurple[500]},
        ${indigo[500]},
        ${blue[500]},
        ${lightBlue[500]},
        ${cyan[500]},
        ${teal[500]},
        ${green[500]},
        ${lightGreen[500]},
        ${lime[500]},
        ${yellow[500]},
        ${amber[500]},
        ${orange[500]},
        ${deepOrange[500]},
        ${red[500]})`,
    },
    image: {
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  });

const useStyles = makeStyles(styles, { name: 'StaticText' });

export default useStyles;
