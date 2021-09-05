import { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const justifyContentOptions = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'start',
  'end',
  'left',
  'right',
];

const alignItemsOptions = [
  'stretch',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'first baseline',
  'last baseline',
  'start',
  'end',
  'self-start',
  'self-end',
];

const alignContentOptions = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'start',
  'end',
  'baseline',
  'first baseline',
  'last baseline',
];

const alignSelfOptions = [
  'auto',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
];

export const PropsFlexComponent: FC = () => {
  const classes = useStyles();
  const [justifyContent, , handleChangeJustifyContent] = useMuiSelect();
  const [alignItems, , handleChangeAlignItems] = useMuiSelect();
  const [alignContent, , handleChangeAlignContent] = useMuiSelect();
  const [alignSelf, , handleChangeAlignSelf] = useMuiSelect();

  return (
    <Box>
      <Box className={classes.inputGrid}>
        <SelectFormControl
          label="justify-content"
          onChange={handleChangeJustifyContent}
          options={justifyContentOptions}
          value={justifyContent}
        />
        <SelectFormControl
          label="align-items"
          onChange={handleChangeAlignItems}
          options={alignItemsOptions}
          value={alignItems}
        />
        <SelectFormControl
          label="align-content"
          onChange={handleChangeAlignContent}
          options={alignContentOptions}
          value={alignContent}
        />
        <SelectFormControl
          label="align-self"
          onChange={handleChangeAlignSelf}
          options={alignSelfOptions}
          value={alignSelf}
        />
      </Box>

      <Box className={classes.flexGroup}>
        <Box
          className={classes.propsFlex}
          style={{
            justifyContent,
            alignItems,
            alignContent,
            minHeight: '200px',
          }}
        >
          <div className={classes.item} style={{ height: '64px' }} />
          <div className={classes.item} style={{ height: '40px', alignSelf }} />
          <div className={classes.item} style={{ height: '96px' }} />
          <div className={classes.item} style={{ height: '48px' }} />
          <div className={classes.item} style={{ height: '120px' }} />
        </Box>

        <Box
          className={classes.propsFlex}
          style={{
            justifyContent,
            alignItems,
            alignContent,
            minHeight: '420px',
          }}
        >
          <div className={classes.item} style={{ height: '64px' }} />
          <div className={classes.item} style={{ height: '40px', alignSelf }} />
          <div className={classes.item} style={{ height: '96px' }} />
          <div className={classes.item} style={{ height: '48px' }} />
          <div className={classes.item} style={{ height: '120px' }} />
          <div className={classes.item} style={{ height: '56px' }} />
          <div className={classes.item} style={{ height: '80px' }} />
          <div className={classes.item} style={{ height: '60px' }} />
          <div className={classes.item} style={{ height: '88px' }} />
          <div className={classes.item} style={{ height: '100px' }} />
        </Box>
      </Box>
    </Box>
  );
};

const PropsFlex = memo(PropsFlexComponent);
PropsFlex.displayName = 'PropsFlex';
export default PropsFlex;
