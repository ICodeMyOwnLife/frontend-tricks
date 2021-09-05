import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Frame from './Frame';
import questions from './questions';
import imgSrc from './1.png';
import vidSrc from './1.mp4';
import classes from './styles.module.scss';

const image = <img className={classes.Image} src={imgSrc} alt="1" />;
const video = (
  <video src={vidSrc} controls loop>
    <track kind="captions" src={vidSrc} />
  </video>
);

export const ReplacedElements1Component: FC = () => (
  <QuestionPage title="Replaced Elements 1" questions={questions}>
    <Frame name="IMAGE" element={image} />
    <Frame name="VIDEO" element={video} />
  </QuestionPage>
);

const ReplacedElements1 = memo(ReplacedElements1Component);
ReplacedElements1.displayName = 'ReplacedElements1';
export default ReplacedElements1;
