import React, {
  FC,
  memo,
  CSSProperties,
  useState,
  ReactElement,
  cloneElement,
} from 'react';
import {
  Select,
  Slider,
  Typography,
  Box,
  MenuItem,
  Card,
  Paper,
  CardHeader,
  CardContent,
  Grid,
} from '@material-ui/core';
import useStyles from './styles';

const objectFitOptions: CSSProperties['objectFit'][] = [
  'contain',
  'cover',
  'fill',
  'revert',
  'scale-down',
  'none',
  'unset',
  'inherit',
  'initial',
];

const objectPositionOptions: CSSProperties['objectPosition'][] = [
  'center',
  'left',
  'right',
  'top',
  'bottom',
  'left top',
  'left bottom',
  'right top',
  'right bottom',
];

export const FrameComponent: FC<FrameProps> = ({ name, element }) => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(320);
  const [objectFit, setObjectFit] = useState<CSSProperties['objectFit']>(
    'inherit',
  );
  const [objectPosition, setObjectPosition] = useState<
    CSSProperties['objectPosition']
  >('center');
  const classes = useStyles();

  return (
    <Card className={classes.FrameContainer} elevation={0}>
      <CardHeader title={name} />

      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Width</Typography>
            <Slider
              value={width}
              onChange={(_, newValue) => setWidth(newValue as number)}
              min={0}
              max={2000}
              step={10}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Height</Typography>
            <Slider
              value={height}
              onChange={(_, newValue) => setHeight(newValue as number)}
              min={40}
              max={2000}
              step={10}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Size</Typography>
            <Select
              className={classes.Select}
              value={objectFit}
              onChange={e =>
                setObjectFit(e.target.value as CSSProperties['objectFit'])
              }
            >
              {objectFitOptions.map(v => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Position</Typography>
            <Select
              className={classes.Select}
              value={objectPosition}
              onChange={e =>
                setObjectPosition(e.target
                  .value as CSSProperties['objectPosition'])
              }
            >
              {objectPositionOptions.map(v => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>

        <Box className={classes.CardContainer}>
          <Paper className={classes.Card}>
            {cloneElement(element, {
              style: {
                width: width || '100%',
                height,
                objectFit,
                objectPosition,
              },
            })}
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
};

const Frame = memo(FrameComponent);
Frame.displayName = 'Frame';
export default Frame;

export interface FrameProps {
  name: string;
  element: ReactElement<ElementProps>;
}

export interface ElementProps {
  style?: CSSProperties;
}
