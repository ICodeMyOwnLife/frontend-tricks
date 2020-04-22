import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    Question: {
      fontWeight: 500,
    },
    HiddenContent: {
      marginBottom: spacing(2),
    },
    Answer: {
      marginTop: spacing(1.5),
      padding: 0,
      fontSize: 14,
      backgroundColor: grey[50],
      border: `1px solid ${grey[400]}`,
      borderRadius: 6,

      '& p': {
        padding: spacing(0, 2.5),
      },

      '& ol,ul': {
        margin: spacing(1.5, 0),

        '& li': {
          margin: spacing(1, 0, 0),
        },
      },

      '& img': {
        maxWidth: '100%',
      },
    },
    BottomBox: {
      paddingBottom: spacing(2),
      borderBottom: `1px solid ${grey[400]}`,

      '& ol,ul': {
        marginTop: spacing(1),
      },

      '& li': {
        fontSize: 14,
        fontWeight: 500,
        marginBottom: spacing(1),
      },
    },
    BottomBoxTitle: {
      margin: spacing(3, 0, 0),
    },
  });

const useStyles = makeStyles(styles, { name: 'QuestionItem' });

export default useStyles;
