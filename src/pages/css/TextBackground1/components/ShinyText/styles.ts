import { makeStyles, createStyles } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import { backgroundClipCss } from '../styles';

const styles = () =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    text: {
      ...backgroundClipCss,
      position: 'relative',
      display: 'inline-block',
      fontSize: 80,
      fontWeight: 'bold',
      backgroundImage: `linear-gradient(105deg, transparent 40%, ${cyan.A200} 50%, transparent 60%)`,
      backgroundSize: `500% 100%`,
      backgroundPositionX: `400%`,
      animation: '$shiny 7s linear infinite',
    },
    '@keyframes shiny': {
      from: {
        backgroundPositionX: '400%',
      },
      to: {
        backgroundPositionX: 0,
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'ShinyText' });

export default useStyles;
