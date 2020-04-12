import { makeStyles, createStyles } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const ligaSettings =
  '"liga", "calt", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "zero", "onum"';

const styles = () =>
  createStyles({
    root: {
      '& code': {
        fontFamily: `'Fira Code', 'Courier New', Courier, monospace !important`,
        fontSize: 14,
        color: deepOrange.A400,
        fontFeatureSettings: ligaSettings,
        MozFontFeatureSettings: ligaSettings,
        WebkitFontFeatureSettings: ligaSettings,
        WebKitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },
    },
    '@font-face firaCode': {
      fontFamily: 'Fira Code',
      src: `
      url('/vs_code/Fonts1/FiraCode-Retina.otf') format('opentype'),
      url('/vs_code/Fonts1/FiraCode-Retina.woff2') format('woff2'),
      url('/vs_code/Fonts1/FiraCode-Retina.woff') format('woff'),
      url('/vs_code/Fonts1/FiraCode-Retina.ttf') format('truetype')`,
      fontWeight: `normal`,
      fontStyle: `normal`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'App' });

export default useStyles;
