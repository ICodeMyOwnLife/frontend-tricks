import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
    colorPickerPalette: {
      cursor: 'pointer',
    },
  });

const useStyles = makeStyles(styles, {
  classNamePrefix: 'RectangularColorPicker',
});

export default useStyles;
