import { makeStyles, createStyles } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const ligaSettings =
  '"liga", "calt", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "zero", "onum"';

const styles = () =>
  createStyles({
    root: {
      '& code': {
        fontFamily: `'Fira Code', 'Courier New', Courier, monospace !important`,
        fontSize: 14,
        color: deepOrange[700],
        fontFeatureSettings: ligaSettings,
        MozFontFeatureSettings: ligaSettings,
        WebkitFontFeatureSettings: ligaSettings,
        WebKitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },

      '& a': {
        fontWeight: 'bolder',
        textDecoration: 'none',
      },
    },
    '@font-face firaCode': {
      fontFamily: 'Fira Code',
      src: `
      url('/vs_code/Fonts1/FiraCode-Medium.woff2') format('woff2'),
      url('/vs_code/Fonts1/FiraCode-Medium.woff') format('woff'),
      url('/vs_code/Fonts1/FiraCode-Medium.ttf') format('truetype')`,
      fontWeight: `normal`,
      fontStyle: `normal`,
    },
  });

const useStyles = makeStyles(styles, { name: 'App' });

export default useStyles;
