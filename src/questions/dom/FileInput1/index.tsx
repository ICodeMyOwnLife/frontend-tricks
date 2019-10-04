import React, { FC, memo, useState } from 'react';
import Question from 'components/Question';
import Checkbox from 'components/Checkbox';
import {
  ButtonFileInput,
  LabelFileInput,
  DataUrlImageInput,
  ObjectUrlImageInput,
  CommonInput,
} from 'components/FileInput';
import Section from 'components/Section';
import questions from './questions';

export const FileInput1Impl: FC = () => {
  const [buttonFiles, setButtonFiles] = useState<FileList | null>();
  const [buttonDraggable, setButtonDraggable] = useState(false);
  const [labelFiles, setLabelFiles] = useState<FileList | null>();
  const [labelDraggable, setLabelDraggable] = useState(false);
  const [dataUrlFiles, setDataUrlFiles] = useState<FileList | null>();
  const [objectUrlFiles, setObjectUrlFiles] = useState<FileList | null>();
  const [pdfFiles, setPdfFiles] = useState<FileList | null>();
  const [videoFiles, setVideoFiles] = useState<FileList | null>();

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

      <Section title="PDF Input">
        <CommonInput
          id="pdfInput"
          title="PDF Input"
          draggable
          files={pdfFiles}
          onChange={setPdfFiles}
          accept="application/pdf,.pdf"
        />
      </Section>

      <Section title="Video Input">
        <CommonInput
          id="videoInput"
          title="Video Input"
          draggable
          files={videoFiles}
          onChange={setVideoFiles}
          accept="video/*,.mp4,.flv,.mov,.avi,.wmv,.3pg"
        />
      </Section>
    </Question>
  );
};

const FileInput1 = memo(FileInput1Impl);
FileInput1.displayName = 'FileInput1';
export default FileInput1;
