import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      maxHeight: '100vh',
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
    },
    pageGroup: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      maxWidth: '100vw',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollSnapAlign: 'start',
    },
    page: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      color: 'white',
      scrollSnapAlign: 'start',
    },
    title: {
      marginBottom: spacing(4),
      fontWeight: 'bold',
    },
    subtitle: {
      maxWidth: 720,
      padding: spacing(0, 4),
      fontWeight: 'normal',
      textAlign: 'center',
    },
  });

const useStyles = makeStyles(styles, {
  classNamePrefix: 'FullPageScrollSnapping',
});

export default useStyles;
