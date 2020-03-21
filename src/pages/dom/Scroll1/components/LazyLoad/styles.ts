import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import placeholderSrc from './placeholder.jpg';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      maxHeight: 600,
      overflowY: 'auto',
    },
    paragraph: {
      marginBottom: spacing(3),
    },
    imgContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: spacing(3, 0),
    },
    img: {
      background: `
        linear-gradient(
          to bottom,
          ${fade(pink.A100, 0.2)},
          ${fade(pink.A100, 0.3)}
        ),
        url(${placeholderSrc})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      border: `2px solid white`,
      borderRadius: 4,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'LazyLoad' });

export default useStyles;
