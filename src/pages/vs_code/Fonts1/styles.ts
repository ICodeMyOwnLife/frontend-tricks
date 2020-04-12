import { makeStyles, createStyles, Theme } from '@material-ui/core';

const ligaSettings =
  '"liga", "calt", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "zero", "onum"';

const nonLigaSettings = '"liga" off, "calt" off';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
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
    firaTexts: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
      gridGap: spacing(3),
    },
    firaTextGroup: {
      display: `flex`,
      flexDirection: 'column',
      alignItems: 'center',
    },
    firaText: {
      fontFamily: 'Fira Code',
      textAlign: 'center',
      lineHeight: `24px`,
      whiteSpace: 'pre',
    },
    ligature: {
      fontFeatureSettings: ligaSettings,
      MozFontFeatureSettings: ligaSettings,
      WebkitFontFeatureSettings: ligaSettings,
      WebKitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    },
    nonLigature: {
      fontFeatureSettings: nonLigaSettings,
      MozFontFeatureSettings: nonLigaSettings,
      WebkitFontFeatureSettings: nonLigaSettings,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Fonts1' });

export default useStyles;
