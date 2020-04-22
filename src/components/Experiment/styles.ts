import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {},
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: spacing(3, 6),
      alignItems: 'flex-start',
    },
    submitButton: {
      gridColumn: -2,
      alignSelf: 'flex-end',
    },
    result: {
      marginTop: spacing(4),
      paddingTop: spacing(2),
      fontFamily: 'monospace',
      borderTopColor: palette.grey[500],
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      whiteSpace: 'pre',
    },
  });

const useStyles = makeStyles(styles, { name: 'IntlLayout' });

export default useStyles;
