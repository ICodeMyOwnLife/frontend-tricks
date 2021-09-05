import { FC, memo, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { CustomItemData } from '../types';
import useStyles from './styles';

export const CustomElementComponent: FC<CustomElementProps> = ({
  className,
  size,
  value,
  ...props
}) => {
  const classes = useStyles({ size });

  return (
    <div {...props} className={clsx(classes.root, className)}>
      {value}
    </div>
  );
};

const CustomElement = memo(CustomElementComponent);
CustomElement.displayName = 'CustomElement';
export default CustomElement;

export interface CustomElementProps
  extends CustomItemData,
    OmitFrom<HTMLAttributes<HTMLDivElement>, 'children'> {}
