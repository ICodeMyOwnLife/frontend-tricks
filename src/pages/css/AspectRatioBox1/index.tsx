import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';

export const AspectRatioBox1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Aspect Ratio Box 1"
    >
      <Section title="Text">
        <div className={classes.textContainer}>
          <div className={classes.text}>Aspect Ratio Box</div>
        </div>
      </Section>
      <Section title="YouTube">
        <div className={classes.youtubeContainer}>
          <iframe
            className={classes.youtube}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="2"
            src="https://www.youtube.com/embed/ASDtcilyC98"
            title="Pirates of the Caribbean Theme - Metal Guitar Cover by Kfir Ochaion"
          />
        </div>
      </Section>
    </QuestionPage>
  );
};

const AspectRatioBox1 = memo(AspectRatioBox1Component);
AspectRatioBox1.displayName = 'AspectRatioBox1';
export default AspectRatioBox1;
