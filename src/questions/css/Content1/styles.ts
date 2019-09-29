import { makeStyles, Theme } from '@material-ui/core';
import timeSrc from './time.png';
import dateSrc from './date.png';

const useStyles = makeStyles((theme: Theme) => ({
  Section: {
    marginBottom: theme.spacing(4),
  },
  FormGroup: {
    '&.required': {
      '& $FormLabel::after': {
        content: `" *"`,
      },
    },
  },
  FormLabel: {
    display: 'block',
  },
  FormControl: {
    width: '100%',
  },
  ButtonPaint: {
    display: 'inline-block',
    marginLeft: theme.spacing(3),
    '&::after': {
      content: `linear-gradient(red yellow)`,
      width: 40,
      height: 52,
    },
  },
  ButtonTime: {
    display: 'inline-block',
    '&::after': {
      content: `url(${timeSrc})`,
    },
  },
  ButtonDate: {
    display: 'inline-block',
    marginLeft: theme.spacing(3),
    '&::after': {
      content: `url(${dateSrc})`,
    },
  },
  Task: {
    display: 'block',
    '&::before': {
      content: 'attr(data-status)',
    },
  },
}));

export default useStyles;
