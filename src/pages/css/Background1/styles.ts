import { makeStyles, createStyles, Theme } from '@material-ui/core';
import src1 from './1.png';
import src2 from './2.png';
import src3 from './3.png';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    rectangle: {
      height: spacing(60),
    },
    multiLayer1: {
      background: `#ffc63e url(${src1})`,
    },
    multiLayer2: {
      background: `linear-gradient(to bottom, #00000000 0%, #000000ff 100%), linear-gradient(to right, #ffffff 0%, #ff00a5 100%)`,
    },
    multiLayer3: {
      background: `url(${src2}) center/contain no-repeat, url(${src3}) center/cover no-repeat, linear-gradient(to right, rgb(36, 218, 168) 0%, rgb(124, 179, 17) 100%)`,
    },
  });

const useStyles = makeStyles(styles, { name: 'Background1' });

export default useStyles;
