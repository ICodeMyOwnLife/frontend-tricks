import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to make an element draggable?`,
    answer: (
      <div>
        <ol>
          <li>
            Set the <code>draggable=&quote;true&quote;</code> on the element
            that you wish to make draggable.
          </li>
          <li>
            Add a listener for the <code>dragstart</code> event.
          </li>
          <li>Set the drag data in the above listener.</li>
        </ol>

        <Code language="tsx">
          {`const handleDragStart = (e: DragEvent<HTMLElement>) => {
  e.dataTransfer.setData('text/plain', e.currentTarget.outerHTML);
};

/* ... */

<p draggable onDragStart={handleDragStart}>
  This is text
</p>`}
        </Code>

        <p>
          A listener for the <code>dragenter</code> and <code>dragover</code>{' '}
          events are used to indicate valid drop targets, that is, places where
          dragged items may be dropped.
        </p>

        <Code language="tsx">
          {`const getItemData = (item: DataTransferItem) =>
  new Promise<ItemData>(resolve => {
    const { kind, type } = item;

    if (item.kind === 'file') {
      resolve({ kind, type, dataFile: item.getAsFile()! });
    } else {
      item.getAsString(dataString => resolve({ kind, type, dataString }));
    }
  });

const getDragData = async (dataTransfer: DataTransfer) => {
  const { dropEffect, effectAllowed } = dataTransfer;

  const data = await Promise.all(
    Array.from(dataTransfer.items).map(getItemData),
  );
  const dragData: DragData = { data, dropEffect, effectAllowed };
  return dragData;
};

export const DropTargetImpl: FC<DropTargetProps> = ({ onDrop }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = useCallback((e: DragEvent<Node>) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<Node>) => {
    e.preventDefault();
    setDragging(false);
  }, []);

  const handleDrop = useCallback(
    async (e: DragEvent<Node>) => {
      e.preventDefault();
      const data = await getDragData(e.dataTransfer);
      onDrop(data);
      setDragging(false);
    },
    [onDrop],
  );

  return (
    <div
      className={classnames(classes.DropTarget, {
        [classes.dragging]: dragging,
      })}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
};`}
        </Code>
      </div>
    ),
  },
];

export default questions;
