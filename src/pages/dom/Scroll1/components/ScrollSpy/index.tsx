import React, { FC, memo, Fragment } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { LoremIpsum } from 'lorem-ipsum';
import { useScrollSpy } from 'cb-hooks';
import useStyles from './styles';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: { min: 6, max: 16 },
  wordsPerSentence: { min: 8, max: 20 },
});

const sections = Array.from({ length: 7 }, (_, index) => ({
  id: `heading${index + 1}`,
  heading: `Heading ${index + 1}`,
  paragraphs: Array.from({ length: Math.round(Math.random() * 3 + 1) }, () =>
    loremIpsum.generateParagraphs(1),
  ),
}));

export const ScrollSpyComponent: FC = () => {
  const classes = useStyles();
  const [scrollId, register] = useScrollSpy();

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        {sections.map(({ paragraphs, heading, id }) => (
          <Fragment key={id}>
            <Typography
              className={classes.heading}
              id={id}
              innerRef={register}
              variant="h4"
            >
              {heading}
            </Typography>
            {paragraphs.map(paragraph => (
              <Typography className={classes.paragraph} key={paragraph}>
                {paragraph}
              </Typography>
            ))}
          </Fragment>
        ))}
      </div>
      <div className={classes.navContainer}>
        <List component="nav">
          {sections.map(({ heading, id }) => (
            <ListItem
              button
              className={clsx(classes.navLink, { active: scrollId === id })}
              component="a"
              href={`#${id}`}
              key={id}
            >
              <ListItemText primary={heading} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

const ScrollSpy = memo(ScrollSpyComponent);
ScrollSpy.displayName = 'ScrollSpy';
export default ScrollSpy;
