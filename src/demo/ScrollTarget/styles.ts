import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { yellow, brown, lime } from '@material-ui/core/colors';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      maxHeight: '100vh',
      backgroundColor: brown[700],
      overflowY: 'auto',
      scrollSnapType: 'y proximity',
      scrollBehavior: 'smooth',
    },
    header: {
      position: 'sticky',
      display: 'flex',
      alignItems: 'center',
      top: 0,
      width: '100vw',
      height: 48,
      marginBottom: spacing(2),
      padding: spacing(0, 3),
      backgroundColor: lime[600],
    },
    title: {
      color: 'white',
    },
    menu: {
      marginLeft: spacing(3),
    },
    link: {
      marginRight: spacing(1.5),
      color: lime[900],
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    '@keyframes highlight': {
      from: {
        outlineColor: 'transparent',
        outlineWidth: 0,
      },
      to: {
        backgroundColor: brown[600],
        outlineColor: yellow[600],
        outlineWidth: 2,
      },
    },
    post: {
      margin: spacing(0, 3, 3),
      padding: spacing(2, 3, 3),
      backgroundColor: brown[900],
      border: `1px solid ${brown[600]}`,
      scrollMarginTop: '64px',
      scrollSnapAlign: 'start',

      '&:target': {
        outlineStyle: 'solid',
        outlineWidth: 0,
        animation: `$highlight 1s ease 0.3s alternate 2`,
      },
    },
    postTitle: {
      margin: spacing(0, 0, 1.5),
      color: brown[200],
    },
    postContent: {
      margin: 0,
      color: brown[100],
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'ScrollTarget' });

export default useStyles;
