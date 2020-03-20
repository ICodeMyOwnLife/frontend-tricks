import { makeStyles, createStyles } from '@material-ui/core';
import { yellow, orange } from '@material-ui/core/colors';
import { backgroundClipCss } from '../styles';

const mainColor = orange[600];
const highlightColor = yellow.A200;
const highlightLinear = `linear-gradient(to right, ${highlightColor}, ${mainColor}, ${highlightColor})`;

const styles = () =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    text: {
      position: 'relative',
      display: 'inline-block',
      fontSize: 80,
      fontWeight: 'bold',
    },
    horizontal: {
      ...backgroundClipCss,
      backgroundImage: `linear-gradient(to right, ${highlightColor}, ${mainColor} 25%, ${highlightColor} 50%, ${mainColor} 50%)`,
      backgroundSize: `200% 100%`,
      backgroundPositionX: `100%`,
      transition: `background-position-x 500ms ease`,

      '&:hover': {
        backgroundPositionX: 0,
      },
    },
    vertical: {
      color: mainColor,

      '&::after': {
        ...backgroundClipCss,
        content: `attr(data-text)`,
        position: 'absolute',
        top: 0,
        left: 0,
        height: 0,
        backgroundImage: highlightLinear,
        overflow: 'hidden',
        transition: `height 500ms ease`,
      },

      '&:hover::after': {
        height: '100%',
      },
    },
    diagonal: {
      color: mainColor,

      '&::after': {
        ...backgroundClipCss,
        content: `attr(data-text)`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: highlightLinear,
        clipPath: `polygon(0 0, 0 0, 0 0, 0 0)`, // one point at the top left
        transition: `clip-path 500ms ease`,
      },

      '&:hover::after': {
        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`, // totally fill the bounding rect
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'HoverText' });

export default useStyles;
