import React, { FC, memo } from 'react';
import { ItemData } from './DropTarget';
import classes from './styles.module.scss';

export const ItemDataViewerImpl: FC<ItemDataViewerProps> = ({
  name,
  itemData: { kind, type, dataFile, dataString },
}) => (
  <div className={classes.ItemDataViewer}>
    <h4>{name}</h4>
    <p>
      <b>Kind:</b> {kind}
    </p>
    <p>
      <b>Type:</b> {type}
    </p>
    {kind === 'string' ? (
      <p>
        <b>String:</b> {dataString}
      </p>
    ) : (
      <p>
        <b>File:</b> {dataFile!.name} - {dataFile!.size} - {dataFile!.type}
      </p>
    )}
  </div>
);

const ItemDataViewer = memo(ItemDataViewerImpl);
ItemDataViewer.displayName = 'ItemDataViewer';
export default ItemDataViewer;

export interface ItemDataViewerProps {
  name: string;
  itemData: ItemData;
}
