import { makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const borderColor = grey[300];

const useStyles = makeStyles((theme: Theme) => ({
  IframePreview: {
    maxWidth: '100%',
    marginTop: theme.spacing(1),

    '& iframe': {
      width: '100%',
      height: 320,
      padding: theme.spacing(1.5),
      borderWidth: 1,
      borderColor,
      boxSizing: 'border-box',
      objectFit: 'contain',
      objectPosition: 'center',
    },
  },
}));

export default useStyles;
