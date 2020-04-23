/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {
      width: 400,
      height: 400,
      margin: '0 auto',
    },
    heading: {},
    content: {},
  });

const PlaygroundStyleName = 'Playground';
const useStyles = makeStyles(styles, {
  name: PlaygroundStyleName,
});

export default useStyles;
