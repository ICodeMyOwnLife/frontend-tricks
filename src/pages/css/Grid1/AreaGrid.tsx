/* eslint-disable react/no-array-index-key */
import React, { FC, memo, CSSProperties } from 'react';
import { Box } from '@material-ui/core';
import {
  amber,
  blue,
  brown,
  cyan,
  green,
  indigo,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@material-ui/core/colors';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const areas = ['header', 'sidebar', 'main', 'footer'];

const flows = ['row', 'column', 'row dense', 'column dense'];

const childStyles: CSSProperties[] = [
  {
    backgroundColor: amber[200],
  },
  {
    backgroundColor: blue[200],
  },
  {
    backgroundColor: brown[200],
  },
  {
    backgroundColor: cyan[200],
  },
  {
    backgroundColor: green[200],
  },
  {
    backgroundColor: indigo[200],
    gridRow: 'span 2',
    gridColumn: 'span 2',
  },
  {
    backgroundColor: lime[200],
  },
  {
    backgroundColor: orange[200],
  },
  {
    backgroundColor: pink[200],
  },
  {
    backgroundColor: purple[200],
    gridRow: 'span 2',
    gridColumn: 'span 2',
  },
  {
    backgroundColor: red[200],
  },
  {
    backgroundColor: teal[200],
  },
  {
    backgroundColor: yellow[200],
  },
];

export const AreaGridComponent: FC = () => {
  const classes = useStyles();
  const [block1Area, , handleChangeBlock1Area] = useMuiSelect();
  const [block2Area, , handleChangeBlock2Area] = useMuiSelect();
  const [block3Area, , handleChangeBlock3Area] = useMuiSelect();
  const [block4Area, , handleChangeBlock4Area] = useMuiSelect();
  const [block5Area, , handleChangeBlock5Area] = useMuiSelect();
  const [block6Area, , handleChangeBlock6Area] = useMuiSelect();
  const [block7Area, , handleChangeBlock7Area] = useMuiSelect();
  const [block8Area, , handleChangeBlock8Area] = useMuiSelect();
  const [flow, , handleChangeFlow] = useMuiSelect();
  const blockAreas = [
    block1Area,
    block2Area,
    block3Area,
    block4Area,
    block5Area,
    block6Area,
    block7Area,
    block8Area,
  ];

  return (
    <Box>
      <Box className={classes.inputGrid}>
        <SelectFormControl
          label="Block 1"
          onChange={handleChangeBlock1Area}
          options={areas}
          value={block1Area}
        />
        <SelectFormControl
          label="Block 2"
          onChange={handleChangeBlock2Area}
          options={areas}
          value={block2Area}
        />
        <SelectFormControl
          label="Block 3"
          onChange={handleChangeBlock3Area}
          options={areas}
          value={block3Area}
        />
        <SelectFormControl
          label="Block 4"
          onChange={handleChangeBlock4Area}
          options={areas}
          value={block4Area}
        />
        <SelectFormControl
          label="Block 5"
          onChange={handleChangeBlock5Area}
          options={areas}
          value={block5Area}
        />
        <SelectFormControl
          label="Block 6"
          onChange={handleChangeBlock6Area}
          options={areas}
          value={block6Area}
        />
        <SelectFormControl
          label="Block 7"
          onChange={handleChangeBlock7Area}
          options={areas}
          value={block7Area}
        />
        <SelectFormControl
          label="Block 8"
          onChange={handleChangeBlock8Area}
          options={areas}
          value={block8Area}
        />
        <SelectFormControl
          label="grid-auto-flow"
          onChange={handleChangeFlow}
          options={flows}
          value={flow}
        />
      </Box>
      <Box className={classes.areaGrid} style={{ gridAutoFlow: flow }}>
        {childStyles.map((childStyle, index) => {
          let style = childStyle;
          if (blockAreas[index]) {
            style = { ...style, gridArea: blockAreas[index] };
          }
          return (
            <div className={classes.areaGridCell} key={index} style={style}>
              Block {index + 1}
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

const AreaGrid = memo(AreaGridComponent);
AreaGrid.displayName = 'AreaGrid';
export default AreaGrid;
