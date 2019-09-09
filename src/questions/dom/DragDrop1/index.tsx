/* eslint-disable react/no-array-index-key */
import React, { FC, memo, DragEvent, useState, useCallback } from 'react';
import Question from 'components/Question';
import questions from './questions';
import DropTarget, { DragData } from './DropTarget';
import ItemDataViewer from './ItemDataViewer';
import classes from './styles.module.scss';
import imgSrc from './1.png';

const handleDragStart = (e: DragEvent<HTMLElement>) => {
  e.dataTransfer.setData('text/plain', e.currentTarget.outerHTML);
};

export const DragDrop1Impl: FC = () => {
  const [dragData, setDragData] = useState<DragData>();

  const handleDrop = useCallback((data: DragData) => {
    setDragData(data);
  }, []);

  return (
    <Question title="Drag Drop 1" questions={questions}>
      <p draggable onDragStart={handleDragStart}>
        This is text
      </p>

      <img src={imgSrc} alt="Bee" />

      <DropTarget onDrop={handleDrop} />

      {dragData && (
        <div className={classes.List}>
          <p>
            <b>Drop Effect:</b> {dragData.dropEffect}
            <b>Effect Allowed:</b> {dragData.effectAllowed}
          </p>

          {dragData.data.map((itemData, itemDataIndex) => (
            <ItemDataViewer
              key={itemDataIndex}
              name={`Item ${itemDataIndex}`}
              itemData={itemData}
            />
          ))}
        </div>
      )}
    </Question>
  );
};

const DragDrop1 = memo(DragDrop1Impl);
DragDrop1.displayName = 'DragDrop1';
export default DragDrop1;
