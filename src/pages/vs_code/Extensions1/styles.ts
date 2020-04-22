import { makeStyles, createStyles } from '@material-ui/core';
import { green, yellow, grey } from '@material-ui/core/colors';

const styles = () =>
  createStyles({
    root: {},
    listIcon: {
      color: green.A400,

      '&.highlyRecommended': {
        color: yellow.A700,
      },
    },
    listPrimaryText: {
      fontSize: '1rem',
      color: grey[900],
    },
  });

const useStyles = makeStyles(styles, { name: 'Extensions1' });

export default useStyles;
