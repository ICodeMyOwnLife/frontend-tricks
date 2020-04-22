import { makeStyles, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = () =>
  createStyles({
    root: {},
    textContainer: {
      position: 'relative',
      paddingBottom: 'calc(480 / 640 * 100%)',
    },
    text: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      fontSize: '8vw',
      backgroundColor: grey[900],
    },
    youtubeContainer: {
      position: 'relative',
      paddingBottom: 'calc(1080 / 1920 * 100%)',
    },
    youtube: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  });

const useStyles = makeStyles(styles, { name: 'AspectRatioBox1' });

export default useStyles;
