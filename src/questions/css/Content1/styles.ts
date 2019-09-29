import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  Section: {
    marginBottom: theme.spacing(4),
  },
  SectionLink: {
    '& a': {
      display: 'block',

      '&:visited:before': {
        content: 'ok',
      },
    },
  },
}));

export default useStyles;
