import { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

const itemHeights = [
  128,
  160,
  192,
  64,
  48,
  180,
  120,
  84,
  184,
  144,
  100,
  200,
  80,
  60,
  72,
  188,
  88,
  92,
  152,
  132,
  88,
  92,
  152,
  132,
];

export const MasonryComponent: FC<MasonryProps> = ({
  className,
  itemClassName,
  itemPanelClassName,
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(className, classes.root)}>
      {itemHeights.map((height, index) => (
        <div
          className={clsx(itemPanelClassName, classes.itemPanel)}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          <div
            className={clsx(itemClassName, classes.item)}
            style={{ height: `${height}px` }}
          />
        </div>
      ))}
    </Box>
  );
};

const Masonry = memo(MasonryComponent);
Masonry.displayName = 'Masonry';
export default Masonry;

export interface MasonryProps {
  className?: string;
  itemClassName?: string;
  itemPanelClassName?: string;
}
