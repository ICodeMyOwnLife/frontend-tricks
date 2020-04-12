import React, { FC, memo } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import DemoLayout from 'components/DemoLayout';
import demoRoutes from 'utils/routes/demoRoutes';
import useStyles from './styles';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: { max: 20, min: 12 },
  wordsPerSentence: { max: 20, min: 12 },
});

const posts = Array.from({ length: 12 }, () =>
  loremIpsum.generateParagraphs(1),
);

export const ScrollTargetComponent: FC = () => {
  const classes = useStyles();

  return (
    <DemoLayout title={demoRoutes.scrollTarget.name}>
      <div className={classes.root}>
        <div className={classes.header}>
          <h3 className={classes.title}>SCROLL TARGET</h3>
          <nav className={classes.menu}>
            {posts.map((post, index) => (
              <a className={classes.link} href={`#post_${index}`} key={post}>
                {index + 1}
              </a>
            ))}
          </nav>
        </div>

        {posts.map((post, index) => (
          <div className={classes.post} id={`post_${index}`} key={post}>
            <h3 className={classes.postTitle}>Post {index + 1}</h3>
            <p className={classes.postContent}>{post}</p>
          </div>
        ))}
      </div>
    </DemoLayout>
  );
};

const ScrollTarget = memo(ScrollTargetComponent);
ScrollTarget.displayName = 'ScrollTarget';
export default ScrollTarget;
