import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Favicons from './Favicons';
import StyleSheets from './StyleSheets';
import questions from './questions';
import useStyles from './styles';

export const LinkTags1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Link Tags 1"
    >
      <Section title="Favicons">
        <Favicons />
      </Section>

      <Section title="Styles">
        <StyleSheets />
      </Section>
    </QuestionPage>
  );
};

const LinkTags1 = memo(LinkTags1Component);
LinkTags1.displayName = 'LinkTags1';
export default LinkTags1;
