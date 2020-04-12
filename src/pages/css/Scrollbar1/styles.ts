import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { purple, yellow, green, red, blue } from '@material-ui/core/colors';

const scrollbarColor = purple[400];
const scrollbarTrackColor = 'transparent';
const activeScrollbarTrackColor = fade(purple[100], 0.25);
const scrollbarSize = 8;
const scrollbarMinLength = 24;

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
    wrapper: {
      display: 'grid',
      gridTemplateColumns: '100%',
      gridAutoFlow: 'row',
      gridGap: spacing(3, 0),
    },
    container: {
      maxHeight: 160,
      overflow: 'auto',
      scrollbarColor: `${scrollbarColor} ${scrollbarTrackColor}`,
      scrollbarWidth: 'thin',
    },
    withCustomScrollbar: {
      '& ::-webkit-scrollbar': {
        width: `${scrollbarSize}px !important`,
        height: `${scrollbarSize}px !important`,
      },

      '& ::-webkit-scrollbar-track': {
        backgroundColor: scrollbarTrackColor,
        borderRadius: 4,

        '&:active, &:hover': {
          backgroundColor: activeScrollbarTrackColor,
        },
      },

      '& ::-webkit-scrollbar-thumb': {
        backgroundColor: scrollbarColor,
        borderRadius: 4,

        '&:horizontal': {
          minWidth: scrollbarMinLength,
        },

        '&:vertical': {
          minHeight: scrollbarMinLength,
        },
      },

      '& ::-webkit-scrollbar-corner': {
        backgroundColor: 'transparent',
      },
    },
    content: {
      width: 4000,
      height: 4000,
      backgroundImage: `linear-gradient(
        to bottom right,
        ${red[600]},
        ${yellow[400]},
        ${green.A400},
        ${blue[800]})`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Scrollbar1' });

export default useStyles;
