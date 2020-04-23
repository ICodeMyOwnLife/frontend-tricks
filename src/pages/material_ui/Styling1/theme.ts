import { createMuiTheme, fade } from '@material-ui/core';
import { blueGrey, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: purple[600],
        color: blueGrey[100],
      },
    },
    MyCard: {
      root: {
        border: `1px solid ${blueGrey[400]}`,
        color: blueGrey[100],
        backgroundColor: fade(blueGrey[700], 0.7),
      },
      heading: {
        borderBottomColor: blueGrey[400],
      },
    },
  },
});

export default theme;
