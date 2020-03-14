import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { grey, green } from '@material-ui/core/colors';

const checkInputHeight = 32;
const checkInputBorderWidth = 2;
const switchWidth = 52;
const switchPadding = 2;
const switchHandleSize =
  checkInputHeight - 2 * checkInputBorderWidth - 2 * switchPadding;
const switchHandleTranslateX = switchWidth - checkInputHeight;

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    checkInputs: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(360px, 1fr))`,
      gridGap: spacing(2, 4),
    },
    checkInputWrapper: {
      display: 'flex',
      alignItems: 'center',
      padding: spacing(1, 0),
    },
    checkInput: {
      position: 'relative',
      height: checkInputHeight,
      marginRight: spacing(1.5),
      border: `${checkInputBorderWidth}px solid`,
      borderColor: grey[600],
      transition: '200ms ease',

      '&::after': {
        content: '""',
        position: 'absolute',
        transition: '200ms ease',
      },

      '&:checked': {
        borderColor: green[100],
        backgroundColor: green[600],
      },

      '&:focus, &:active': {
        outline: 'none',
        boxShadow: 'none',
      },
    },
    '@supports (-webkit-appearance:none) or (-moz-appearance:none)': {
      checkInput: {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
      },
    },
    box: {
      width: 32,

      '&::after': {
        opacity: 0,
      },

      '&:checked': {
        '&::after': {
          opacity: 1,
        },
      },
    },
    checkbox: {
      borderRadius: 4,

      '&::after': {
        width: 20,
        height: 12,
        top: 5,
        left: 5,
        border: `4px solid`,
        borderColor: green[100],
        borderTop: 0,
        borderRight: 0,
        transform: `rotate(-50deg)`,
      },
    },
    radio: {
      borderRadius: '100%',

      '&::after': {
        width: 12,
        height: 12,
        top: '50%',
        left: '50%',
        backgroundColor: green[100],
        borderRadius: '100%',
        transform: `translate(-50%, -50%)`,
      },
    },
    switch: {
      position: 'relative',
      width: switchWidth,
      borderRadius: checkInputHeight / 2,

      '&::after': {
        width: switchHandleSize,
        height: switchHandleSize,
        left: switchPadding,
        top: switchPadding,
        backgroundColor: grey[600],
        borderRadius: '50%',
        transform: `translateX(0)`,
      },

      '&:checked': {
        '&::after': {
          backgroundColor: green[100],
          transform: `translateX(${switchHandleTranslateX}px)`,
        },
      },
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Input1' });

export default useStyles;
