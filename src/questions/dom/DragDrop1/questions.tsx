/* eslint-disable react/no-unescaped-entities */
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
            Set the <code>draggable="true"</code> on the element that you wish
            to make draggable.
          </li>
          <li>
            Add a listener for the <code>dragstart</code> event.
          </li>
          <li>Set the drag data in the above listener.</li>
        </ol>

        <p>Links and images are draggable by default.</p>

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

        <p>
          Calling the <code>preventDefault()</code> method during both a
          <code>dragenter</code> and <code>dragover</code> event will indicate
          that a drop is allowed at that location.
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
    >
      <h4>DRAG AND DROP HERE</h4>
      <p>(text, link, image, file, ...)</p>
    </div>
  );
};`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[MDN] draggable`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable`,
      },
      {
        name: `[MDN] HTML Drag and Drop API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API`,
      },
      {
        name: `[MDN] Drag Operations`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations`,
      },
      {
        name: `[MDN] Recommended Drag Types`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types`,
      },
    ],
  },
];

export default questions;
