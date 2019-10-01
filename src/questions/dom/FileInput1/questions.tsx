import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to create a custom file input?`,
    answer: (
      <div>
        <p>
          Using a <code>button</code> to trigger the <code>click()</code> method
          of a hidden file input
        </p>
        <Code language="tsx">
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
        </Code>

        <p>
          Using a <code>label</code> to trigger a hidden file input
        </p>
        <Code language="tsx">
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
        </Code>
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
        <Code language="tsx">
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
        </Code>
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
    question: `How to show user-selected images?`,
    answer: (
      <div>
        <p>Using data URL</p>
        <Code language="tsx">
          {`export const useImageDataUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | null | undefined;
  supportedFileTypes: string[];
}) => {
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const file = files && files[0];

    if (!file) return undefined;

    if (!supportedFileTypes.includes(file.type)) {
      return setError('Invalid file type');
    }

    const fileReader = new FileReader();
    const handleLoad = (e: ProgressEvent) => {
      console.log(e);
      const dataUrl = fileReader.result as string;
      setSrc(dataUrl);
    };
    const handleError = (e: ProgressEvent) => {
      console.log(e);
      if (fileReader.error) setError(fileReader.error.message);
    };
    fileReader.addEventListener('load', handleLoad);
    fileReader.addEventListener('error', handleError);
    setSrc(undefined);
    setError(undefined);
    fileReader.readAsDataURL(file);

    return () => {
      fileReader.removeEventListener('load', handleLoad);
      fileReader.removeEventListener('error', handleError);
    };
  }, [files, supportedFileTypes]);

  return { src, error };
};`}
        </Code>

        <p>Using object URL</p>
        <Code language="tsx">
          {`export const useImageObjectUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | null | undefined;
  supportedFileTypes: string[];
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const file = files && files[0];
    const img = imgRef.current;

    if (!file || !img) return undefined;

    if (!supportedFileTypes.includes(file.type)) {
      return setError('Invalid file type');
    }

    const objectUrl = URL.createObjectURL(file);
    const handleLoad = () => URL.revokeObjectURL(objectUrl);
    img.addEventListener('load', handleLoad);
    setSrc(objectUrl);
    setError(undefined);

    return () => {
      img.removeEventListener('load', handleLoad);
      URL.revokeObjectURL(objectUrl);
    };
  }, [files, supportedFileTypes]);

  return { src, error, imgRef };
};`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[MDN] Showing thumbnails of user-selected images`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_thumbnails_of_user-selected_images`,
      },
      {
        name: `[MDN] Using object URLs to display images`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images`,
      },
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

export default questions;
