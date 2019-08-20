import React, { FC, memo, useState } from 'react';
import Question, { QuestionInfo } from 'components/Question';
import Checkbox from 'components/Checkbox';
import {
  ButtonFileInput,
  LabelFileInput,
  DataUrlImageInput,
  ObjectUrlImageInput,
} from 'components/FileInput';

const questions: QuestionInfo[] = [
  {
    question: `How to create a custom file input?`,
    answer: (
      <div>
        <p>
          Using a <code>button</code> to trigger the <code>click()</code> method
          of a hidden file input
        </p>
        <pre>
          <code>
            {`<div
  className={classnames(classes.FileInput, className)}
  ref={containerRef}
>
  <button
    className={classes.Button}
    type="button"
    onClick={triggerInputClick}
  >
    {children}
  </button>
  <input
    className={classnames(classes.Input, classes.displayNone)}
    ref={inputRef}
    type="file"
    onChange={handleInputChange}
    {...props}
  />
  {filename && (
    <span className={classes.Filename} title={filename}>
      {filename}
    </span>
  )}
</div>`}
          </code>
        </pre>

        <p>
          Using a <code>label</code> to trigger a hidden file input
        </p>
        <pre>
          <code>
            {`<div
  className={classnames(classes.FileInput, className)}
  ref={containerRef}
>
  <label className={classes.Button} htmlFor={id}>
    {children}
  </label>
  <input
    className={classnames(classes.Input, classes.visuallyHidden)}
    id={id}
    type="file"
    onChange={handleInputChange}
    {...props}
  />
  {filename && (
    <span className={classes.Filename} title={filename}>
      {filename}
    </span>
  )}
</div>`}
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[MDN] Using hidden file input elements using the click() method`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click()_method`,
      },
      {
        name: `[MDN] Using a label element to trigger a hidden file input element`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Using_a_label_element_to_trigger_a_hidden_file_input_element`,
      },
    ],
  },
  {
    question: `How to select file(s) using drag and drop?`,
    answer: (
      <div>
        <p>
          Using the <b>Drag and Drop API</b>
        </p>
        <pre>
          <code>
            {`export const useDragDrop = ({
  onChange,
  draggable,
}: {
  onChange: FilesChangeListener | undefined;
  draggable: boolean | undefined;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef<FilesChangeListener>();

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !draggable) return undefined;

    const highlight = () => container.classList.add(classes.dragging);

    const unhighlight = () => container.classList.remove(classes.dragging);

    const handleDragEnter = (e: Event) => {
      preventDefaults(e);
      highlight();
    };

    const handleDragLeave = (e: Event) => {
      preventDefaults(e);
      unhighlight();
    };

    const handleDrop = (e: DragEvent) => {
      preventDefaults(e);
      unhighlight();
      if (onChangeRef.current)
        onChangeRef.current(e.dataTransfer && e.dataTransfer.files);
    };

    container.addEventListener('dragenter', handleDragEnter);
    container.addEventListener('dragover', handleDragEnter);
    container.addEventListener('dragleave', handleDragLeave);
    container.addEventListener('drop', handleDrop);

    return () => {
      container.removeEventListener('dragenter', handleDragEnter);
      container.removeEventListener('dragover', handleDragEnter);
      container.removeEventListener('dragleave', handleDragLeave);
      container.removeEventListener('drop', handleDrop);
    };
  }, [draggable]);

  return containerRef;
};`}
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[MDN] Selecting files using drag and drop`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Selecting_files_using_drag_and_drop`,
      },
      {
        name: `[MDN] File drag and drop`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop`,
      },
      {
        name: `[MDN] HTML Drag and Drop API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API`,
      },
      {
        name: `[CSS-TRICKS] Drag and Drop File Uploading`,
        url: `https://css-tricks.com/drag-and-drop-file-uploading/`,
      },
      {
        name: `[Smashing Magazine] How To Make A Drag-and-Drop File Uploader With Vanilla JavaScript`,
        url: `https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/`,
      },
    ],
  },
  {
    question: `How to preview`,
    answer: null,
    references: [
      {
        name: `[MDN] URL.createObjectURL()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL`,
      },
      {
        name: `[MDN] URL.revokeObjectURL()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL`,
      },
    ],
  },
];

export const FileInput1Impl: FC = () => {
  const [buttonFiles, setButtonFiles] = useState<FileList | null>();
  const [buttonDraggable, setButtonDraggable] = useState(false);
  const [labelFiles, setLabelFiles] = useState<FileList | null>();
  const [labelDraggable, setLabelDraggable] = useState(false);
  const [dataUrlFiles, setDataUrlFiles] = useState<FileList | null>();
  const [objectUrlFiles, setObjectUrlFiles] = useState<FileList | null>();

  return (
    <Question title="File Input 1" questions={questions}>
      <div className="mb-5">
        <h5>Button File Input</h5>
        <Checkbox
          label="Draggable?"
          id="buttonDraggable"
          checked={buttonDraggable}
          onChange={setButtonDraggable}
        />
        <ButtonFileInput
          id="buttonFileInput"
          multiple
          draggable={buttonDraggable}
          files={buttonFiles}
          onChange={setButtonFiles}
        />
      </div>

      <div className="mb-5">
        <h5>Label File Input</h5>
        <Checkbox
          label="Draggable?"
          id="labelDraggable"
          checked={labelDraggable}
          onChange={setLabelDraggable}
        />
        <LabelFileInput
          id="labelFileInput"
          multiple
          draggable={labelDraggable}
          files={labelFiles}
          onChange={setLabelFiles}
        />
      </div>

      <div className="mb-5">
        <h5>Data URL Image Input</h5>
        <DataUrlImageInput
          id="dataUrlImageInput"
          draggable
          files={dataUrlFiles}
          onChange={setDataUrlFiles}
        />
      </div>

      <div className="mb-5">
        <h5>Object URL Image Input</h5>
        <ObjectUrlImageInput
          id="objectUrlImageInput"
          draggable
          files={objectUrlFiles}
          onChange={setObjectUrlFiles}
        />
      </div>
    </Question>
  );
};

const FileInput1 = memo(FileInput1Impl);
FileInput1.displayName = 'FileInput1';
export default FileInput1;
