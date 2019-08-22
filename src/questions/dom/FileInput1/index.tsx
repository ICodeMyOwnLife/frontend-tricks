import React, { FC, memo, useState } from 'react';
import Question from 'components/Question';
import Checkbox from 'components/Checkbox';
import {
  ButtonFileInput,
  LabelFileInput,
  DataUrlImageInput,
  ObjectUrlImageInput,
  PdfInput,
} from 'components/FileInput';
import questions from './questions';

export const FileInput1Impl: FC = () => {
  const [buttonFiles, setButtonFiles] = useState<FileList | null>();
  const [buttonDraggable, setButtonDraggable] = useState(false);
  const [labelFiles, setLabelFiles] = useState<FileList | null>();
  const [labelDraggable, setLabelDraggable] = useState(false);
  const [dataUrlFiles, setDataUrlFiles] = useState<FileList | null>();
  const [objectUrlFiles, setObjectUrlFiles] = useState<FileList | null>();
  const [pdfFiles, setPdfFiles] = useState<FileList | null>();

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

      <div className="mb-5">
        <h5>PDF Input</h5>
        <PdfInput
          id="pdfInput"
          draggable
          files={pdfFiles}
          onChange={setPdfFiles}
        />
      </div>
    </Question>
  );
};

const FileInput1 = memo(FileInput1Impl);
FileInput1.displayName = 'FileInput1';
export default FileInput1;
