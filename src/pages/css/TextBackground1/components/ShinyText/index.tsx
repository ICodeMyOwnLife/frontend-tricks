import { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const ShinyTextComponent: FC<ShinyTextProps> = ({
  children = 'SHINY TEXT',
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={clsx(classes.text)}>{children}</span>
    </div>
  );
};

const ShinyText = memo(ShinyTextComponent);
ShinyText.displayName = 'ShinyText';
export default ShinyText;

export interface ShinyTextProps {
  children?: string;
}
