/* eslint-disable react/no-array-index-key */
import { FC, memo } from 'react';
import GeneralDropTarget from '../GeneralDropTarget';
import CustomDrop from '../CustomDrop';
import ItemDataViewer from '../ItemDataView';
import CustomDraggable from '../CustomDraggable';
import { useBasicDragDrop, handleDragStart } from './utils';
import { CustomItemData } from '../types';
import imgSrc from './1.png';
import useStyles from './styles';
import { EFFECTS_ALLOWED } from '../constants';

const customItems: CustomItemData[] = [
  { size: 'medium', value: 6 },
  { size: 'small', value: 3 },
  { size: 'large', value: 9 },
];

export const BasicDragDropComponent: FC = () => {
  const classes = useStyles();
  const { dragData, handleDrop } = useBasicDragDrop();

  return (
    <div className={classes.root}>
      {/* div is not draggable by default, set draggable="true" to enable it */}
      <div className={classes.text} draggable onDragStart={handleDragStart}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
        mollis risus eget suscipit.
      </div>

      {/* Images and links are draggable by default, set draggable="false" to disable it */}
      <img className={classes.image} src={imgSrc} alt="Bee" />

      <GeneralDropTarget onDrop={handleDrop} />

      {dragData && (
        <div>
          <p>
            <b>Drop Effect:</b> {dragData.dropEffect}
          </p>
          <p>
            <b>Effect Allowed:</b> {dragData.effectAllowed}
          </p>
          {dragData.data.map((itemData, index) => (
            <ItemDataViewer
              key={index}
              itemData={itemData}
              name={`Item ${index}`}
            />
          ))}
        </div>
      )}

      <div className={classes.effectAllowedGroup}>
        {EFFECTS_ALLOWED.map(effectAllowed => (
          <div className={classes.effectAllowedItem} key={effectAllowed}>
            <p>Effect Allowed:</p>
            <h5>{effectAllowed}</h5>
            <div className={classes.customDraggableGroup}>
              {customItems.map((item, index) => (
                <CustomDraggable
                  {...item}
                  className={classes.customDraggable}
                  effectAllowed={effectAllowed}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <CustomDrop />
    </div>
  );
};

const BasicDragDrop = memo(BasicDragDropComponent);
BasicDragDrop.displayName = 'BasicDragDrop';
export default BasicDragDrop;
