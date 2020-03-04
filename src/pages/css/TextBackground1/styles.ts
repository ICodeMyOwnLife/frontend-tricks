import { makeStyles, createStyles } from '@material-ui/core';
import { red, yellow, blue } from '@material-ui/core/colors';
import imageSrc from './1.jpg';

const styles = () =>
  createStyles({
    root: {},
    text: {
      fontSize: 140,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'transparent',
      WebkitTextFillColor: 'transparent',
      backgroundColor: red[100],
      backgroundClip: 'text',
      MozBackgroundClip: 'text',
      WebkitBackgroundClip: 'text',
    },
    linearBackground: {
      backgroundImage: `linear-gradient(
        45deg,
        rgba(0, 128, 0, 1) 0%,
        rgba(255, 255, 0, 1) 50%,
        rgba(0, 128, 0, 1) 100%
      )`,
    },
    radialBackground: {
      backgroundImage: `radial-gradient(
        ellipse at center,
        rgba(235, 196, 255, 1) 0%,
        rgba(0, 0, 0, 1) 100%
      )`,
    },
    conicBackground: {
      backgroundImage: `conic-gradient(
        ${blue[400]},
        ${yellow[400]},
        ${red[400]},
        ${blue[400]})`,
    },
    imageBackground: {
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'TextBackground1' });

export default useStyles;
