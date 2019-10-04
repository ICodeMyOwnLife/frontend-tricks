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
  <Button
    type="button"
    variant="contained"
    color="primary"
    size="small"
    onClick={triggerInputClick}
  >
    {children}
  </Button>

  <input
    ref={inputRef}
    type="file"
    onChange={handleInputChange}
    hidden
    {...props}
  />

  {filename && (
    <Typography
      className={classes.Filename}
      title={filename}
      variant="body1"
    >
      {filename}
    </Typography>
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
  <Button
    variant="contained"
    color="primary"
    size="small"
    component="label"
    htmlFor={id}
  >
    {children}
  </Button>

  <input
    className={classnames(classes.HiddenInput)}
    id={id}
    type="file"
    onChange={handleInputChange}
    {...props}
  />

  {filename && (
    <Typography
      className={classes.Filename}
      title={filename}
      variant="body1"
    >
      {filename}
    </Typography>
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
  const draggingClass = 'dragging';
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef<FilesChangeListener>();

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !draggable) return undefined;

    const highlight = () => container.classList.add(draggingClass);

    const unhighlight = () => container.classList.remove(draggingClass);

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
    question: `How to view user-selected files?`,
    answer: (
      <div>
        <p>Using data URL</p>
        <Code language="tsx">
          {`export const useDataUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | null | undefined;
  supportedFileTypes?: string[];
}) => {
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const file = files && files[0];

    if (!file) return;

    if (supportedFileTypes && !supportedFileTypes.includes(file.type)) {
      setError('Unsupported file type');
      setSrc(undefined);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const dataUrl = fileReader.result as string;
      setSrc(dataUrl);
    };
    fileReader.onerror = () => {
      if (fileReader.error) setError(fileReader.error.message);
    };
    fileReader.readAsDataURL(file);
  }, [files, supportedFileTypes]);

  return { src, error };
};`}
        </Code>

        <p>Using object URL</p>
        <Code language="tsx">
          {`export const useObjectUrl = ({
  files,
  supportedFileTypes,
}: {
  files: FileList | undefined | null;
  supportedFileTypes?: string[];
}) => {
  const [src, setSrc] = useState<string>();
  const [error, setError] = useState<string>();
  const cleanupRef = useRef<VoidFunction>();
  const cleanupCallback = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
    }
  }, []);

  useEffect(() => {
    const file = files && files[0];

    if (!file) {
      setSrc(undefined);
      return undefined;
    }

    if (supportedFileTypes && !supportedFileTypes.includes(file.type)) {
      setError('Unsupported file type');
      setSrc(undefined);
      return undefined;
    }

    let objectUrl: string | undefined;

    try {
      objectUrl = URL.createObjectURL(file);
      setSrc(objectUrl);
    } catch (e) {
      setError(e);
    }

    const cleanup = () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
    cleanupRef.current = cleanup;
    return cleanup;
  }, [files, supportedFileTypes]);

  return { src, error, cleanupCallback };
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
        name: `[MDN] Using object URLs to display PDF`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_PDF`,
      },
      {
        name: `[MDN] Using object URLs with other file types`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_with_other_file_types`,
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
