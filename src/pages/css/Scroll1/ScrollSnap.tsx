import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const itemCount = 47 * 37;

const scrollSnapTypeOptions = [
  'x mandatory',
  'x proximity',
  'y mandatory',
  'y proximity',
  'block mandatory',
  'block proximity',
  'inline mandatory',
  'inline proximity',
  'both mandatory',
  'both proximity',
];

const scrollSnapAlignOptions = ['start', 'end', 'center'];

export const ScrollSnapComponent: FC = () => {
  const classes = useStyles();
  const [scrollSnapType, , handleChangeScrollSnapType] = useMuiSelect(
    'both mandatory',
  );
  const [scrollSnapAlign, , handleChangeScrollSnapAlign] = useMuiSelect(
    'start',
  );

  return (
    <Box className={classes.scrollSnap}>
      <Box className={classes.scrollSnapInputs}>
        <SelectFormControl
          label="scroll-snap-type"
          onChange={handleChangeScrollSnapType}
          options={scrollSnapTypeOptions}
          value={scrollSnapType}
        />
        <SelectFormControl
          label="scroll-snap-align"
          onChange={handleChangeScrollSnapAlign}
          options={scrollSnapAlignOptions}
          value={scrollSnapAlign}
        />
      </Box>
      <Box className={classes.scrollSnapGrid} style={{ scrollSnapType }}>
        {Array.from({ length: itemCount }, (_, index) => (
          <div
            className={classes.scrollSnapCell}
            key={index}
            style={{ scrollSnapAlign }}
          />
        ))}
      </Box>
    </Box>
  );
};

const ScrollSnap = memo(ScrollSnapComponent);
ScrollSnap.displayName = 'ScrollSnap';
export default ScrollSnap;
