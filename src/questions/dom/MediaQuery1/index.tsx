import React, { FC, memo } from 'react';
import { useTheme, Table, TableBody, TextField } from '@material-ui/core';
import json2mq, { QueryObject } from 'json2mq';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import useTextField from 'hooks/useTextField';
import questions from './questions';
import UseMediaQuery from './UseMediaQuery';
import UseMedia from './UseMedia';

const queries: (string | QueryObject)[] = [
  { resolution: '1dppx' },
  { resolution: '96dpi' },
  { maxResolution: '160dpi' },
  { minResolution: '80dpi' },
  { minResolution: '92dpi', maxResolution: '128dpi' },
  { width: 1000 },
  { maxWidth: 800 },
  { minWidth: 1200 },
  { minWidth: 600, maxWidth: 900 },
  { height: 480 },
  { maxHeight: 400 },
  { minHeight: 720 },
  { minHeight: 320, maxHeight: 640 },
  { aspectRatio: '5/3' },
  { maxAspectRatio: '3/2' },
  { minAspectRatio: '2/1' },
  { minAspectRatio: '4/3', maxAspectRatio: '16/9' },
  { color: 24 },
  { maxColor: 12 },
  { minColor: 32 },
  { minColor: 16, maxColor: 36 },
  { colorGamut: 'srgb' },
  { colorGamut: 'p3' },
  { colorGamut: 'rec2020' },
  { colorIndex: 1 },
  { minColorIndex: 0 },
  { maxColorIndex: 2 },
  { monochrome: true },
  { monochrome: '0' },
  { grid: '0' },
  { grid: '1' },
  { orientation: 'landscape' },
  { orientation: 'portrait' },
  { prefersColorScheme: 'no-preference' },
  { prefersColorScheme: 'light' },
  { prefersColorScheme: 'dark' },
  { prefersReducedMotion: 'no-preference' },
  { prefersReducedMotion: 'reduce' },
  { scan: 'interlace' },
  { scan: 'progressive' },
  { pointer: 'none' },
  { pointer: 'coarse' },
  { pointer: 'fine' },
  { anyPointer: 'none' },
  { anyPointer: 'coarse' },
  { anyPointer: 'fine' },
  { hover: 'hover' },
  { hover: 'none' },
  { anyHover: 'hover' },
  { anyHover: 'none' },
  { displayMode: 'fullscreen' },
  { displayMode: 'standalone' },
  { displayMode: 'minimal-ui' },
  { displayMode: 'browser' },
];

export const MediaQuery1Component: FC = () => {
  const theme = useTheme();
  const [query, handleChangeQuery] = useTextField('');

  return (
    <QuestionPage title="Media Query 1" questions={questions}>
      <Section title="Use Media Query">
        <Table>
          <TableBody>
            <UseMediaQuery query="(min-width:600px)" />
            <UseMediaQuery query={theme.breakpoints.between('md', 'lg')} />
            <UseMediaQuery query={json2mq({ maxWidth: 900 })} />
          </TableBody>
        </Table>
      </Section>

      <Section title="Use Media">
        <Table>
          <TableBody>
            {queries.map(q => (
              <UseMedia key={JSON.stringify(q)} query={q} />
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section title="Dynamic Query">
        <TextField label="Query" value={query} onChange={handleChangeQuery} />
        <Table>
          <TableBody>
            <UseMedia query={query} />
          </TableBody>
        </Table>
      </Section>
    </QuestionPage>
  );
};

const MediaQuery1 = memo(MediaQuery1Component);
MediaQuery1.displayName = 'MediaQuery1';
export default MediaQuery1;
