import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    roundedTableGrid: {
      display: 'grid',
      gridAutoFlow: 'row',
      gridGap: spacing(3),
    },
    roundedTable: {
      width: '100%',

      '& th,td': {
        padding: spacing(1.5),
        textAlign: 'center',
      },
    },
    stickyTableWrapper: {
      maxHeight: 320,
      overflowY: 'auto',
    },
  });

const useStyles = makeStyles(styles, { name: 'Table1' });

export default useStyles;
