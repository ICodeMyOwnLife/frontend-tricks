import React, { FC, memo } from 'react';
import {
  useTheme,
  Table,
  TableBody,
  TextField,
  Typography,
} from '@material-ui/core';
import json2mq from 'json2mq';
import Media from 'react-media';
import { useTextInput } from 'cb-hooks';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import { mediaQueries } from 'constants/mediaQueries';
import questions from './questions';
import UseMediaQuery from './UseMediaQuery';
import UseMedia from './UseMedia';

export const MediaQuery1Component: FC = () => {
  const theme = useTheme();
  const [query, , handleChangeQuery] = useTextInput('');

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
            {mediaQueries.map(q => (
              <UseMedia key={JSON.stringify(q)} query={q} />
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section title="Dynamic Query">
        <TextField label="Query" value={query} onChange={handleChangeQuery} />
        <UseMedia query={query} view="text" />
      </Section>

      <Section title="React Media">
        <Media
          queries={{
            small: { maxWidth: 599.95 },
            medium: { minWidth: 600, maxWidth: 1199.95 },
            large: { minWidth: 1200 },
          }}
        >
          {matches => (
            <Typography>
              {matches.small && 'small'}
              {matches.medium && 'medium'}
              {matches.large && 'large'}
            </Typography>
          )}
        </Media>
        <Media query={{ maxWidth: 599.95 }}>
          {matches => matches && <Typography>small</Typography>}
        </Media>
        <Media query={{ minWidth: 600, maxWidth: 1199.95 }}>
          {matches => matches && <Typography>medium</Typography>}
        </Media>
        <Media query={{ minWidth: 1200 }}>
          {matches => matches && <Typography>large</Typography>}
        </Media>
      </Section>
    </QuestionPage>
  );
};

const MediaQuery1 = memo(MediaQuery1Component);
MediaQuery1.displayName = 'MediaQuery1';
export default MediaQuery1;
