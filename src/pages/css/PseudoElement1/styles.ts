import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { cyan, red, grey, deepPurple, purple } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    text: {},
    fullScreenTarget: {
      '&:fullscreen': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing(6),
      },
      '&::backdrop': {
        backgroundImage: `conic-gradient(from 50deg, ${grey[500]}, black, ${grey[500]})`,
      },
    },
    actions: {
      width: 'fit-content',
      margin: `${spacing(2)}px auto`,
    },
    button: {
      position: 'relative',
      padding: spacing(1.5, 4),
      fontSize: 16,
      color: cyan.A200,
      backgroundColor: 'transparent',
      border: `none`,
      cursor: 'pointer',
      transition: '250ms ease',
      transitionProperty: 'padding, opacity',

      '&::before, &::after': {
        position: 'absolute',
        top: 8,
        fontSize: 40,
        lineHeight: '20px',
      },

      '&::before': {
        content: '"»"',
        left: 0,
      },

      '&::after': {
        content: '"«"',
        right: 0,
      },

      '&:hover': {
        opacity: 0.7,
      },

      '&:active, &:focus': {
        boxShadow: 'none',
        outline: 'none',
      },

      '&:active': {
        padding: spacing(1.5, 3.5),
      },
    },
    paragraphs: {
      '& ::selection': {
        color: cyan[900],
        backgroundColor: cyan.A200,
      },

      '& ::first-line': {
        fontWeight: 'bold',
        fontStyle: 'italic',
      },

      '& ::first-letter': {
        position: 'absolute',
        fontSize: 48,
        lineHeight: 0.85,
        color: red[400],
      },
    },
    lists: {
      '& li': {
        paddingLeft: spacing(2),
      },

      '& ::marker': {
        content: '"😃 "',
        color: cyan[400],
      },
    },
    inputs: {
      display: 'grid',
      gridGap: spacing(2, 0),
      gridAutoFlow: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: spacing(3),

      '& ::placeholder': {
        fontSize: 'italic',
        color: red.A100,
      },
    },
    input: {
      minWidth: 300,
      padding: spacing(0.75, 1.5),
      color: 'white',
      background: 'transparent',
      caretColor: purple.A100,
      border: `1px solid ${grey[100]}`,
      borderRadius: 4,
    },
    textarea: {
      padding: spacing(1.5),
      resize: 'none',
    },
    video: {
      display: 'block',
      margin: `${spacing(3)}px auto 0`,

      '&::backdrop': {
        backgroundImage: `linear-gradient(to right, black, ${deepPurple[900]}, black)`,
      },
    },
    dialog: {
      position: 'fixed',
      display: 'none',
      top: '50%',
      padding: 0,
      border: 'none',
      borderRadius: 8,
      transform: `translateY(-50%)`,

      '&[open]': {
        display: 'block',
      },

      '&::backdrop': {
        backgroundImage: `radial-gradient(${fade(grey[900], 0.8)}, ${
          grey[900]
        })`,
      },
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 280,
      minHeight: 160,
      padding: spacing(3),
      backgroundColor: 'white',
      borderRadius: 8,
    },
    modalButtons: {
      display: 'grid',
      gridGap: spacing(0, 3),
      gridAutoFlow: 'column',
    },
  });

const useStyles = makeStyles(styles, { name: 'PseudoElement1' });

export default useStyles;
