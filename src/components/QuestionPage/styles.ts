import { Theme, makeStyles, createStyles } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    questions: {
      marginTop: spacing(4),
      '& code': {
        fontFamily: `'Courier New', Courier, monospace`,
        fontSize: 14,
        fontWeight: 600,
        color: `rgb(219, 104, 27)`,
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'QuestionPage' });

export default useStyles;
