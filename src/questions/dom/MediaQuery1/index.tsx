import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import {
  useMediaQuery,
  Theme,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import useMedia from 'hooks/useMedia';
import Section from 'components/Section';
import useTextField from 'hooks/useTextField';
import questions from './questions';

const querySuggestions = ['(resolution: 1ddpx)'];

export const MediaQuery1Component: FC = () => {
  const minWidth600Matches = useMediaQuery('(min-width:600px)');
  const betweenMdLgMatches = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.between('md', 'lg'),
  );
  const maxWidth900Matches = useMedia({ maxWidth: 900 });
  const [query, handleChangeQuery] = useTextField(querySuggestions[0]);
  const matches = useMediaQuery(query);

  return (
    <QuestionPage title="Media Query 1" questions={questions}>
      <Section title="Static Queries">
        <Typography>
          Min width 600px: {minWidth600Matches ? 'true' : 'false'}
        </Typography>
        <Typography>
          Between Md - Lg: {betweenMdLgMatches ? 'true' : 'false'}
        </Typography>
        <Typography>
          Max width 900px: {maxWidth900Matches ? 'true' : 'false'}
        </Typography>
      </Section>

      <Section title="Dynamic Query">
        <TextField
          variant="outlined"
          label="Query"
          value={query}
          onChange={handleChangeQuery}
        />
        <FormControl variant="outlined">
          <InputLabel>Suggestion</InputLabel>
          <Select value={query} onChange={handleChangeQuery}>
            {querySuggestions.map(suggestion => (
              <MenuItem key={suggestion} value={suggestion}>
                {suggestion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography>Matches: {matches ? 'true' : 'false'}</Typography>
      </Section>
    </QuestionPage>
  );
};

const MediaQuery1 = memo(MediaQuery1Component);
MediaQuery1.displayName = 'MediaQuery1';
export default MediaQuery1;
