import { FC, memo } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { useLazyLoad } from 'cb-hooks';
import src1 from './1.jpg';
import src2 from './2.jpg';
import src3 from './3.jpg';
import src4 from './4.jpg';
import src5 from './5.jpg';
import src6 from './6.jpg';
import src7 from './7.jpg';
import useStyles from './styles';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: { min: 8, max: 20 },
  wordsPerSentence: { min: 8, max: 20 },
});

export const LazyLoadComponent: FC = () => {
  const classes = useStyles();
  const register = useLazyLoad();

  return (
    <div className={classes.root}>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 1"
          className={classes.img}
          data-src={src1}
          height={480}
          ref={register}
          width={648}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 2"
          className={classes.img}
          data-src={src2}
          height={400}
          ref={register}
          width={504}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 3"
          className={classes.img}
          data-src={src3}
          height={520}
          ref={register}
          width={350}
        />
        <img
          alt="Food 4"
          className={classes.img}
          data-src={src4}
          height={520}
          ref={register}
          width={330}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 5"
          className={classes.img}
          data-src={src5}
          height={460}
          ref={register}
          width={832}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 6"
          className={classes.img}
          data-src={src6}
          height={540}
          ref={register}
          width={364}
        />
        <img
          alt="Food 7"
          className={classes.img}
          data-src={src7}
          height={540}
          ref={register}
          width={409}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
    </div>
  );
};

const LazyLoad = memo(LazyLoadComponent);
LazyLoad.displayName = 'LazyLoad';
export default LazyLoad;
