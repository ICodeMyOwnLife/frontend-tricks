import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    infos: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: spacing(3),
      marginTop: spacing(3),
    },
    eventLog: {
      height: 240,
      padding: spacing(1.5),
      border: `1px solid`,
      borderRadius: 4,
      overflowY: 'auto',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'ChangeEvent1' });

export default useStyles;
