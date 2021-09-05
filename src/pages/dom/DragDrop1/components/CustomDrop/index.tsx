/* eslint-disable react/no-array-index-key */
import { FC, memo } from 'react';
import CustomElement from '../CustomElement';
import CustomDropTarget from '../CustomDropTarget';
import { useCustomDrop } from './utils';
import { DROP_EFFECTS, CUSTOM_DROP_TYPE } from '../constants';
import useStyles from './styles';

export const CustomDropComponent: FC = () => {
  const classes = useStyles();
  const { handleDrop, items } = useCustomDrop();

  return (
    <div className={classes.root}>
      <h4 className={classes.title}>DROP CUSTOM ITEM HERE</h4>
      <div className={classes.dropTargetGroup}>
        {DROP_EFFECTS.map(dropEffect => (
          <CustomDropTarget
            dropEffect={dropEffect}
            dropType={CUSTOM_DROP_TYPE}
            key={dropEffect}
            onDrop={handleDrop}
          />
        ))}
      </div>
      <div className={classes.customElementGroup}>
        {items.map((item, index) => (
          <CustomElement
            {...item}
            className={classes.customElement}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const CustomDrop = memo(CustomDropComponent);
CustomDrop.displayName = 'CustomDrop';
export default CustomDrop;
