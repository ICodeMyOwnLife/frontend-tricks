import { Theme, makeStyles, createStyles } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    questions: {
      marginTop: spacing(4),
    },
  });

const useStyles = makeStyles(styles, { name: 'QuestionPage' });

export default useStyles;
