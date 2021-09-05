import { FC, memo } from 'react';
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { useCheckInput } from 'cb-hooks';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import FlipCard from './components/FlipCard';
import Cube from './components/Cube';
import questions from './questions';
import useStyles from './styles';

const glossaries: Glossary[] = [
  {
    word: 'articulate',
    meanings: [
      'able to express your thoughts, arguments, and ideas clearly and effectively',
      'articulate writing or speech is clear and easy to understand',
      'an articulate animal has joints (=parts of the body where two bones meet)',
    ],
  },
  {
    word: 'obvious',
    meanings: [
      'clear to almost anyone',
      'expressing or lacking imagination',
      'behaving in a way that clearly shows that you want something from someone or from a situation',
      'natural and reasonable in a particular situation',
    ],
  },
];

export const Transform1Component: FC = () => {
  const classes = useStyles();
  const [backfaceHidden, , handleChangeBackfaceHidden] = useCheckInput(false);

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Transform 1"
    >
      <Section title="Flip Cards">
        <div className={classes.flipCards}>
          {glossaries.map(({ word, meanings }) => (
            <FlipCard
              frontContent={<Typography variant="h5">{word}</Typography>}
              backContent={
                <ol>
                  {meanings.map(meaning => (
                    <li key={meaning}>{meaning}</li>
                  ))}
                </ol>
              }
              key={word}
            />
          ))}
        </div>
      </Section>

      <Section title="Cubes">
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={backfaceHidden}
                onChange={handleChangeBackfaceHidden}
              />
            }
            label="Hide backface"
          />
        </div>
        <div className={classes.cubes}>
          <Cube className={classes.cube} backfaceHidden={backfaceHidden} />
        </div>
      </Section>
    </QuestionPage>
  );
};

const Transform1 = memo(Transform1Component);
Transform1.displayName = 'Transform1';
export default Transform1;

interface Glossary {
  word: string;
  meanings: string[];
}
