import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Section: {
    marginBottom: theme.spacing(3),
  },
  UploadContainer: {
    marginBottom: theme.spacing(3),
  },
  UploadWrapper: {
    position: 'relative',
    display: 'inline-block',
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
  },
  UploadForm: {
    marginBottom: theme.spacing(2),
  },
  FileInput: {
    display: 'block',
    margin: `${theme.spacing(2)}px 0`,
    textAlign: 'right',
  },
  ProgressOverlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: theme.spacing(1),
    top: theme.spacing(1),
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    backgroundColor: 'white',
    opacity: 0.5,
  },
}));

export default useStyles;
