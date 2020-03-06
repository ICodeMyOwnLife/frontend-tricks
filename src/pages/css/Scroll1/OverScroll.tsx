import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const overscrollBehaviorOptions = ['auto', 'contain', 'none'] as const;

export const OverScrollComponent: FC = () => {
  const classes = useStyles();
  const [overscrollBehaviorY, , handleChangeOverscrollBehaviorY] = useMuiSelect<
    OverscrollBehavior
  >();

  return (
    <Box>
      <Box className={classes.overScrollInputs}>
        <SelectFormControl
          label="overscroll-behavior-y"
          onChange={handleChangeOverscrollBehaviorY}
          options={overscrollBehaviorOptions}
          value={overscrollBehaviorY}
        />
      </Box>
      <Box className={classes.overScroll} style={{ overscrollBehaviorY }}>
        <div className={classes.overScrollContent} />
        <Box
          className={classes.overScrollDialog}
          style={{ overscrollBehaviorY }}
        >
          <div className={classes.overScrollDialogContent} />
        </Box>
      </Box>
    </Box>
  );
};

const OverScroll = memo(OverScrollComponent);
OverScroll.displayName = 'OverScroll';
export default OverScroll;

type OverscrollBehavior = typeof overscrollBehaviorOptions[number];
