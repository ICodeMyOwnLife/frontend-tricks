/* eslint-disable react/no-array-index-key */
import React, { FC, memo, CSSProperties, useMemo } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const placeSelfOptions = ['start', 'end', 'center', 'stretch'];

const placeItemsOptions = [...placeSelfOptions];

const placeContentOptions = [
  ...placeItemsOptions,
  'space-around',
  'space-between',
  'space-evenly',
];

export const PropsGridComponent: FC = () => {
  const classes = useStyles();
  const [justifyContent, , handleChangeJustifyContent] = useMuiSelect();
  const [alignContent, , handleChangeAlignContent] = useMuiSelect();
  const [justifyItems, , handleChangeJustifyItems] = useMuiSelect();
  const [alignItems, , handleChangeAlignItems] = useMuiSelect();
  const [justifySelf, , handleChangeJustifySelf] = useMuiSelect();
  const [alignSelf, , handleChangeAlignSelf] = useMuiSelect();
  const backLayerStyle = useMemo<CSSProperties>(
    () => ({ justifyContent, alignContent }),
    [alignContent, justifyContent],
  );
  const gridStyle = useMemo<CSSProperties>(
    () => ({ justifyItems, alignItems, justifyContent, alignContent }),
    [alignContent, alignItems, justifyContent, justifyItems],
  );
  const childStyles: CSSProperties[] = [
    { width: '120px', height: '64px' },
    { width: '200px', height: '80px', justifySelf, alignSelf },
    { width: '160px', height: '60px' },
    { width: '120px', height: '60px' },
    { width: '100px', height: '52px' },
    { width: '180px', height: '72px' },
  ];

  return (
    <Box>
      <Box className={classes.inputGrid}>
        <SelectFormControl
          label="justify-content"
          onChange={handleChangeJustifyContent}
          options={placeContentOptions}
          value={justifyContent}
        />
        <SelectFormControl
          label="justify-items"
          onChange={handleChangeJustifyItems}
          options={placeItemsOptions}
          value={justifyItems}
        />
        <SelectFormControl
          label="justify-self"
          onChange={handleChangeJustifySelf}
          options={placeSelfOptions}
          value={justifySelf}
        />
        <SelectFormControl
          label="align-content"
          onChange={handleChangeAlignContent}
          options={placeContentOptions}
          value={alignContent}
        />
        <SelectFormControl
          label="align-items"
          onChange={handleChangeAlignItems}
          options={placeItemsOptions}
          value={alignItems}
        />
        <SelectFormControl
          label="align-self"
          onChange={handleChangeAlignSelf}
          options={placeSelfOptions}
          value={alignSelf}
        />
      </Box>

      <Box className={classes.propsGridWrapper}>
        <Box
          className={clsx(classes.propsGrid, classes.backLayer)}
          style={backLayerStyle}
        >
          {childStyles.map((_, index) => (
            <div className={classes.backLayerCell} key={index} />
          ))}
        </Box>
        <Box className={classes.propsGrid} style={gridStyle}>
          {childStyles.map((style, index) => (
            <div className={classes.gridCell} key={index} style={style} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const PropsGrid = memo(PropsGridComponent);
PropsGrid.displayName = 'PropsGrid';
export default PropsGrid;
