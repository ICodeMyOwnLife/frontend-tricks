/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to make an element draggable?`,
    answer: (
      <div>
        <ol>
          <li>
            Set the <code>draggable="true"</code> attribute on the element.
          </li>
          <li>
            Handle <code>dragstart</code> event to set the drag data.
          </li>
        </ol>

        <p>
          <b>Notice:</b> Links and images are draggable by default. To disable,
          explicitly set <code>draggable="false"</code>
        </p>

        <CodeViewer language="typescript">
          {`export const handleDragStart: DragEventHandler = e =>
  e.dataTransfer.setData('text/plain', e.currentTarget.outerHTML);`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`{/* div is not draggable by default, set draggable="true" to enable it */}
<div className={classes.text} draggable onDragStart={handleDragStart}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  mollis risus eget suscipit.
</div>`}
        </CodeViewer>

        <p>
          We can also set custom data type by calling <code>setData()</code> and
          set <code>effectAllowed</code> in <code>dragstart</code> event.
        </p>

        <CodeViewer language="typescript">
          {`export const useHandleDragStart = ({
  effectAllowed,
  size,
  value,
}: {
  effectAllowed: EffectAllowed;
  size: CustomItemData['size'];
  value: number;
}) =>
  useCallback<DragEventHandler>(
    e => {
      e.dataTransfer.setData(CUSTOM_DROP_TYPE, JSON.stringify({ size, value }));
      e.dataTransfer.effectAllowed = effectAllowed;
    },
    [effectAllowed, size, value],
  );`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const CustomDraggableComponent: FC<CustomDraggableProps> = ({
  effectAllowed,
  size,
  value,
  ...props
}) => {
  const handleDragStart = useHandleDragStart({ effectAllowed, size, value });

  return (
    <CustomElement
      {...props}
      draggable
      onDragStart={handleDragStart}
      size={size}
      value={value}
    />
  );
};`}
        </CodeViewer>
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
        name: `[MDN] DataTransfer.effectAllowed`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed`,
      },
      {
        name: `[MDN] DataTransfer.setData()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData`,
      },
      {
        name: `[MDN] Recommended Drag Types`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types`,
      },
    ],
  },
  {
    question: `How to create a drop target?`,
    answer: (
      <div>
        <p>
          By default, the browser prevents anything from happening when dropping
          something onto most HTML elements. To change that behavior so that an
          element becomes a drop zone or is droppable, the element must have
          both <code>ondragover</code> and <code>ondrop</code> event handled.
        </p>

        <p>
          We should call preventDefault() in those event handlers to prevent
          additional event processing for this event (such as touch events or
          pointer events).
        </p>

        <p>
          The handler for the <code>drop</code> event is free to process the
          drag data in an application-specific way. Typically, an application
          uses the <code>getData()</code> method to retrieve drag items and then
          process them accordingly.
        </p>

        <CodeViewer language="typescript">
          {`export const useGeneralDropTarget = ({
  onDrop,
}: {
  onDrop: (data: DragData) => void;
}) => {
  const [receivingDrag, setReceivingDrag] = useState(false);

  const handleDragLeave = useCallback(() => setReceivingDrag(false), []);

  const handleDragOver = useCallback<DragEventHandler>(e => {
    e.preventDefault();
    setReceivingDrag(true);
  }, []);

  const handleDrop = useCallback<DragEventHandler>(
    async e => {
      e.preventDefault();
      const dragData = await getDragData(e.dataTransfer);
      onDrop(dragData);
      setReceivingDrag(false);
    },
    [onDrop],
  );

  return { handleDragLeave, handleDragOver, handleDrop, receivingDrag };
};`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const GeneralDropTargetComponent: FC<GeneralDropTargetProps> = ({
  onDrop,
}) => {
  const classes = useStyles();
  const {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    receivingDrag,
  } = useGeneralDropTarget({ onDrop });

  return (
    <div
      className={clsx(classes.root, {
        [classes.receivingDrag]: receivingDrag,
      })}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h4 className={classes.title}>DRAG AND DROP HERE</h4>
      <p className={classes.subtitle}>
        Receives everything (text, link, image, file, ...)
      </p>
    </div>
  );
};`}
        </CodeViewer>

        <p>
          Additionally, application semantics may differ depending on the value
          of the <code>dropEffect</code> and/or the state of modifier keys.
        </p>

        <CodeViewer language="typescript">
          {`export const useCustomDropTarget = ({
  dropEffect,
  dropType,
  onDrop,
}: {
  dropEffect: DropEffect;
  dropType: string;
  onDrop: (dataText: string) => void;
}) => {
  const [receivingDrag, setReceivingDrag] = useState(false);

  const handleDragLeave = useCallback(() => setReceivingDrag(false), []);

  const handleDragOver = useCallback<DragEventHandler>(
    e => {
      if (
        Array.from(e.dataTransfer.items).some(
          ({ kind, type }) => kind === 'string' && type === dropType,
        )
      ) {
        e.dataTransfer.dropEffect = dropEffect;
        e.preventDefault();
        setReceivingDrag(true);
      }
    },
    [dropEffect, dropType],
  );

  const handleDrop = useCallback<DragEventHandler>(
    e => {
      const dataText = e.dataTransfer.getData(dropType);
      onDrop(dataText);
      setReceivingDrag(false);
    },
    [dropType, onDrop],
  );

  return {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    receivingDrag,
  };
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] HTML Drag and Drop API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API`,
      },
      {
        name: `[MDN] Drag Operations`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations`,
      },
      {
        name: `[MDN] DataTransfer.dropEffect`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect`,
      },
      {
        name: `[MDN] DataTransfer.getData()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData`,
      },
      {
        name: `[CodePen] Native Drag and Drop - the effectAllowed and the DropEffect properties`,
        url: `https://codepen.io/SitePoint/pen/epQPNP`,
      },
    ],
  },
];

export default questions;
