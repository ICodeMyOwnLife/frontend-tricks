import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const thumbSize = 12;
const borderColor = grey[400];
const shadowColor = grey[600];

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'inline-grid',
      gridTemplateColumns: `auto auto`,
      gridGap: spacing(1, 1),
      padding: spacing(2),
    },
    colorPicker: {
      position: 'relative',
      overflow: 'hidden',
    },
    colorPickerThumb: {
      position: 'absolute',
      width: thumbSize,
      height: thumbSize,
      marginTop: -thumbSize / 2,
      marginLeft: -thumbSize / 2,
      border: `1px solid ${borderColor}`,
      borderRadius: '50%',
      boxShadow: `0 0 2px 1px ${shadowColor}`,
    },
    colorTable: {
      display: 'table',
      borderCollapse: 'collapse',
    },
    colorRow: {
      display: 'table-row',
    },
    colorCell: {
      display: 'table-cell',
      height: 20,
      border: `1px solid ${borderColor}`,
    },
    canvas: {
      gridColumn: 1,
    },
  });

const useStyles = makeStyles(styles, {
  classNamePrefix: 'ColorPicker',
});

export default useStyles;
