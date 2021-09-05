import { FC, memo } from 'react';
import { ItemData } from '../types';
import useStyles from './styles';

export const ItemDataViewerComponent: FC<ItemDataViewerProps> = ({
  name,
  itemData: { kind, type, dataFile, dataString },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.title}>{name}</h4>
      <p className={classes.content}>
        <b>Kind:</b> {kind}
      </p>
      <p className={classes.content}>
        <b>Type:</b> {type}
      </p>
      {kind === 'string' ? (
        <p className={classes.content}>
          <b>String:</b> {dataString}
        </p>
      ) : (
        <p className={classes.content}>
          <b>File:</b> {dataFile!.name} - {dataFile!.size} - {dataFile!.type}
        </p>
      )}
    </div>
  );
};

const ItemDataViewer = memo(ItemDataViewerComponent);
ItemDataViewer.displayName = 'ItemDataViewer';
export default ItemDataViewer;

export interface ItemDataViewerProps {
  name: string;
  itemData: ItemData;
}
