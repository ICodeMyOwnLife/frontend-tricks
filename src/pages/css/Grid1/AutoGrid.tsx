import { FC, memo } from 'react';
import clsx from 'clsx';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const directions = ['horizontal', 'vertical'] as const;
const itemSizes: number[] = [120, 160, 100, 90, 140];

export function getGridArea(
  direction: typeof directions[number] | undefined,
  index: number,
) {
  switch (direction) {
    case 'horizontal':
      return `1 / ${index + 1}`;

    case 'vertical':
      return `${index + 1} / 1`;

    default:
      return `${index + 1} / 1`;
  }
}

export const AutoGridComponent: FC = () => {
  const classes = useStyles();
  const [direction, , handleChangeDirection] = useMuiSelect<
    typeof directions[number]
  >();

  return (
    <div>
      <div className={classes.inputGrid}>
        <SelectFormControl
          label="Direction"
          onChange={handleChangeDirection}
          options={directions}
          value={direction}
        />
      </div>

      <div className={clsx(classes.autoGrid, direction)}>
        {itemSizes.map(size => (
          <div
            className={clsx(classes.gridCell, classes.autoGridCell)}
            key={size}
            style={{ width: size, height: size }}
          />
        ))}
        {itemSizes.map((size, index) => (
          <div
            className={clsx(
              classes.autoGridBackLayerCell,
              classes.backLayerCell,
            )}
            key={size}
            style={{ gridArea: getGridArea(direction, index) }}
          />
        ))}
      </div>
    </div>
  );
};

const AutoGrid = memo(AutoGridComponent);
AutoGrid.displayName = 'AutoGrid';
export default AutoGrid;
