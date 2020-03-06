import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { grey, green } from '@material-ui/core/colors';

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
      marginRight: spacing(1.5),
      transition: '200ms ease',

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
      position: 'relative',
      width: 32,
      height: 32,
      border: `2px solid`,
      borderColor: grey[600],

      '&::after': {
        content: '""',
        position: 'absolute',
        opacity: 0,
        transition: '200ms ease',
      },

      '&:checked': {
        backgroundColor: green[600],
        borderColor: green[100],

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
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Input1' });

export default useStyles;
