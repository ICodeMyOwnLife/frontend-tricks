import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { grey, red, blue } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    display: {
      '& *': {
        display: 'block',
        marginBottom: spacing(1),
        padding: spacing(1, 1, 0),
        backgroundColor: grey[50],
        border: `1px solid ${grey[400]}`,

        '&.selected': {
          backgroundColor: red[50],
          borderColor: red[400],
        },

        '&#childNode': {
          backgroundColor: blue[100],
          border: `1px solid ${blue[500]}`,
        },
      },
    },
    button: {
      margin: `${spacing(2)}px auto 0 0`,
      '&, & *': {
        textTransform: 'none',
      },
    },
    codeEditor: {
      marginTop: spacing(2),
    },
    form: {
      marginTop: spacing(2),
    },
    dropDown: {
      zIndex: 10,
    },
    result: {
      marginTop: spacing(2),
    },
  });

const useStyles = makeStyles(styles, { name: 'Query1' });

export default useStyles;
