import { FC, memo, ReactNode } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const FlipCardComponent: FC<FlipCardProps> = ({
  backContent,
  frontContent,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} tabIndex={-1}>
      <div className={classes.body}>
        <div className={clsx(classes.content, classes.front)}>
          {frontContent}
        </div>
        <div className={clsx(classes.content, classes.back)}>{backContent}</div>
      </div>
    </div>
  );
};

const FlipCard = memo(FlipCardComponent);
FlipCard.displayName = 'FlipCard';
export default FlipCard;

export interface FlipCardProps {
  frontContent?: ReactNode;
  backContent?: ReactNode;
}
