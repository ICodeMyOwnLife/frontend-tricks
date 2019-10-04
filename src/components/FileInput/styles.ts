import { makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const border = `1px solid ${grey[300]}`;

const useStyles = makeStyles((theme: Theme) => ({
  PreviewContainer: {
    maxWidth: '100%',
    marginTop: theme.spacing(1),
  },
  Preview: {
    width: '100%',
    height: 320,
    padding: theme.spacing(1.5),
    borderWidth: 1,
    border,
    objectFit: 'contain',
    objectPosition: 'center',
  },
  FileInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'stretch',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: 'white',
    border,

    '&.dragging': {
      backgroundColor: grey[100],
      borderColor: grey[600],
      borderStyle: 'dotted',
    },
  },
  HiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)',
  },
  Filename: {
    flex: 1,
    marginLeft: theme.spacing(2),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default useStyles;
