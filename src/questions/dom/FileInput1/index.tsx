import React, { FC, memo, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
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
    <QuestionPage title="File Input 1" questions={questions}>
      <Section title="Button File Input">
        <FormControlLabel
          label="Draggable?"
          control={
            <Checkbox
              checked={buttonDraggable}
              onChange={e => setButtonDraggable(e.target.checked)}
            />
          }
        />
        <ButtonFileInput
          id="buttonFileInput"
          multiple
          draggable={buttonDraggable}
          files={buttonFiles}
          onChange={setButtonFiles}
        />
      </Section>

      <Section title="Label File Input">
        <FormControlLabel
          label="Draggable?"
          control={
            <Checkbox
              id="labelDraggable"
              checked={labelDraggable}
              onChange={e => setLabelDraggable(e.target.checked)}
            />
          }
        />
        <LabelFileInput
          id="labelFileInput"
          multiple
          draggable={labelDraggable}
          files={labelFiles}
          onChange={setLabelFiles}
        />
      </Section>

      <Section title="Data URL Image Input">
        <DataUrlImageInput
          id="dataUrlImageInput"
          title="Data URL Image Input"
          draggable
          files={dataUrlFiles}
          onChange={setDataUrlFiles}
          accept="image/*"
        />
      </Section>

      <Section title="Object URL Image Input">
        <ObjectUrlImageInput
          id="objectUrlImageInput"
          title="Object URL Image Input"
          draggable
          files={objectUrlFiles}
          onChange={setObjectUrlFiles}
          accept="image/*"
        />
      </Section>

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
    </QuestionPage>
  );
};

const FileInput1 = memo(FileInput1Impl);
FileInput1.displayName = 'FileInput1';
export default FileInput1;
