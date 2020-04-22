import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
    colorPicker: {
      borderRadius: '50%',
    },
    colorPickerPalette: {
      cursor: 'pointer',
    },
  });

const useStyles = makeStyles(styles, {
  name: 'CircularColorPicker',
});

export default useStyles;
