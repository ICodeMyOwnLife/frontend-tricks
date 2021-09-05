import { FC, memo } from 'react';
import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles, { queries, getMediaItemClassKey } from './styles';

export const MediaQuery1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      title="Media Query 1"
      questions={questions}
    >
      <Section title="Media Query">
        <Table>
          <TableBody>
            {queries.map((query, index) => (
              <TableRow hover key={query}>
                <TableCell>{query}</TableCell>
                <TableCell>
                  <Typography
                    className={clsx(
                      classes.mediaItem,
                      classes[getMediaItemClassKey(index)],
                    )}
                  >
                    true
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>
    </QuestionPage>
  );
};

const MediaQuery1 = memo(MediaQuery1Component);
MediaQuery1.displayName = 'MediaQuery1';
export default MediaQuery1;
