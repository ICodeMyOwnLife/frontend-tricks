import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      maxHeight: 400,
    },
    contentContainer: {
      flex: 1,
      paddingRight: spacing(3),
      overflowY: 'auto',
      scrollBehavior: 'smooth',
    },
    heading: {
      margin: spacing(2, 0, 1),

      '&:first-of-type': {
        marginTop: 0,
      },
    },
    paragraph: {
      marginBottom: spacing(1),
      textAlign: 'justify',
    },
    navContainer: {
      width: 160,
      borderLeft: `1px solid ${fade(blue[200], 0.8)}`,
      overflowY: 'auto',
    },
    navLink: {
      '&.active': {
        fontWeight: 'bold',
        backgroundColor: fade(blue[200], 0.3),
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'ScrollSpy' });

export default useStyles;
