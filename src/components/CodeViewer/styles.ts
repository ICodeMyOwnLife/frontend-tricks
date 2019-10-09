import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  CodeViewer: {
    '& pre': {
      margin: '0 !important',
      borderRadius: 6,
    },
  },
}));

export default useStyles;
