import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,

      '& td,th': {
        padding: spacing(1),
        textAlign: 'center',
      },

      '& th': {
        position: 'sticky',
        top: 0,
        color: 'white',
        backgroundColor: '#7b0e0e',
        zIndex: 1,
      },

      '& td': {
        position: 'relative',
        borderBottom: `1px solid #bcbcbc`,
      },

      '& tr': {
        '& td:first-of-type,td:last-of-type': {
          borderBottom: 0,
        },

        '& th:first-of-type,td:first-of-type': {
          paddingLeft: spacing(2),
        },

        '& th:last-of-type,td:last-of-type': {
          paddingRight: spacing(2),
        },

        '& td:first-of-type::before,td:last-of-type::before': {
          content: '""',
          position: 'absolute',
          bottom: -1,
          height: 0,
          borderBottom: `1px solid #bcbcbc`,
        },

        '& td:first-of-type::before': {
          left: spacing(2),
          right: 0,
        },

        '& td:last-of-type::before': {
          left: 0,
          right: spacing(2),
        },
      },

      '& tr:not(:first-of-type) th': {
        borderTop: `1px solid #bcbcbc`,
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'StickyHeaderTable' });

export default useStyles;
