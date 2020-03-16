import { makeStyles, createStyles } from '@material-ui/core';
import {
  red,
  yellow,
  orange,
  purple,
  teal,
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

const styles = () =>
  createStyles({
    root: {},
    backgroundTextContainer: {
      textAlign: 'center',
    },
    backgroundText: {
      fontSize: 140,
      fontWeight: 'bold',
      color: 'transparent',
      WebkitTextFillColor: 'transparent',
      backgroundColor: red[100],
      backgroundClip: 'text',
      MozBackgroundClip: 'text',
      WebkitBackgroundClip: 'text',
    },
    linearBackground: {
      backgroundImage: `linear-gradient(
        to bottom,
        ${teal[900]} 0%,
        ${yellow[400]} 50%,
        ${teal[900]} 100%
      )`,
    },
    radialBackground: {
      backgroundImage: `radial-gradient(
        ellipse at center,
        ${purple[300]} 0%,
        rgba(0, 0, 0, 1) 100%
      )`,
    },
    conicBackground: {
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
    imageBackground: {
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    hoverTextContainer: {
      textAlign: 'center',
    },
    hoverText: {
      position: 'relative',
      display: 'inline-block',
      fontSize: 80,
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    hoverText1: {
      color: 'transparent',
      WebkitTextFillColor: 'transparent',
      backgroundImage: `linear-gradient(to right, ${yellow.A200}, ${orange[600]} 25%, ${yellow.A200} 50%, ${orange[600]} 50%)`,
      backgroundSize: `200% 100%`,
      backgroundPositionX: `100%`,
      backgroundClip: 'text',
      MozBackgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      transition: `background-position-x 500ms ease`,

      '&:hover': {
        backgroundPositionX: 0,
      },
    },
    hoverText2: {
      color: orange[600],

      '&::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        left: 0,
        top: 0,
        height: 0,
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        backgroundImage: `linear-gradient(to right, ${yellow.A200}, ${orange[600]}, ${yellow.A200})`,
        backgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        overflow: 'hidden',
        transition: `height 500ms ease`,
      },

      '&:hover::after': {
        height: '100%',
      },
    },
    hoverText3: {
      color: orange[600],

      '&::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        backgroundImage: `linear-gradient(to right, ${yellow.A200}, ${orange[600]}, ${yellow.A200})`,
        backgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        clipPath: `polygon(0 0, 0 0, 0 0, 0 0)`,
        transition: `clip-path 500ms ease`,
      },

      '&:hover::after': {
        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'TextBackground1' });

export default useStyles;
