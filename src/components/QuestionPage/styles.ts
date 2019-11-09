import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  ({ spacing }: Theme) => ({
    Container: {
      marginTop: spacing(4),
    },
    Content: {
      marginTop: spacing(2.5),
    },
    Questions: {
      marginTop: spacing(4),

      '& code': {
        fontFamily: `'Courier New', Courier, monospace`,
        fontSize: 14,
        fontWeight: 600,
        color: `rgb(219, 104, 27)`,
      },
    },
  }),
  { classNamePrefix: 'QuestionPage' },
);

export default useStyles;
