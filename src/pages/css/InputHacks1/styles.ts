import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    boxLabel: {
      display: 'inline-flex',
      alignItems: 'center',

      '&::before': {
        marginRight: spacing(0.5),
        fontFamily: "'Material Icons'",
        fontSize: '1.5rem',
        fontFeatureSettings: "'liga'",
        lineHeight: 1,
      },
    },
    checkbox: {
      display: 'none',

      '& + $boxLabel::before': {
        content: "'check_box_outline_blank'",
      },

      '&:checked + $boxLabel::before': {
        content: "'check_box'",
      },
    },
    radio: {
      display: 'none',

      '& + $boxLabel::before': {
        content: "'radio_button_unchecked'",
      },

      '&:checked + $boxLabel::before': {
        content: "'radio_button_checked'",
      },
    },
    searchInputGroup: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',

      '& label': {
        width: 60,
        marginRight: spacing(1),
      },

      '&:focus-within label': {
        fontWeight: 'bold',
      },
    },
    searchButton: {
      position: 'absolute',
      display: 'none',
      width: 30,
      height: 30,
      right: 4,
      padding: 0,
      fontFamily: "'Material Icons'",
      fontSize: '1.25rem',
      fontFeatureSettings: "'liga'",
      lineHeight: 1,
      color: '#888888',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: '50%',
      cursor: 'pointer',

      '&:hover, &:focus': {
        backgroundColor: '#ededed',
      },

      '&:active': {
        backgroundColor: '#dcdcdc',
      },

      '&:focus, &:active': {
        outline: 'none',
        boxShadow: 'none',
      },
    },
    searchInput: {
      flexGrow: 1,
      padding: spacing(0, 5, 0, 1.5),
      lineHeight: '36px',
      border: '1px solid #dcdcdc',

      '&::placeholder': {
        color: '#676767',
      },

      '&:not(:placeholder-shown) + $searchButton': {
        display: 'block',
      },

      '&:focus': {
        borderColor: '#929292',
        outline: 'none',
        boxShadow: 'none',
      },
    },
  });

const useStyles = makeStyles(styles, { name: 'InputHacks1' });

export default useStyles;
