import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    inputGroup: {
      display: 'grid',
      gridTemplateRows: 'repeat(2, auto)',
      gridGap: spacing(2, 0),
      justifyItems: 'end',
      marginBottom: spacing(3),
    },
    linkGroup: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(2),
      justifyContent: 'center',
      marginTop: spacing(3),
    },
    link: {
      padding: 0,
      fontSize: 14,
      fontWeight: 500,
      color: orange[400],
      background: 'transparent',
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',

      '&:active, &:hover, &:focus': {
        textDecoration: 'none',
        outline: 'none',
        boxShadow: 'none',
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'BeforeLeave' });

export default useStyles;
