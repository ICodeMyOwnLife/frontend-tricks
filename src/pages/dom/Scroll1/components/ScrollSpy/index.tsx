import React, { FC, memo, Fragment, useRef, useLayoutEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { LoremIpsum } from 'lorem-ipsum';
import { useScrollSpy } from 'cb-hooks';
import useStyles from './styles';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: { min: 2, max: 5 },
  wordsPerSentence: { min: 8, max: 12 },
});

const sections = Array.from({ length: 23 }, (_, index) => ({
  id: `heading_${index + 1}`,
  heading: `Heading ${index + 1}`,
  paragraphs: Array.from({ length: Math.round(Math.random() * 3 + 1) }, () =>
    loremIpsum.generateParagraphs(1),
  ),
}));

const createLinkId = (targetId: string) => `link_to_${targetId}`;

export const ScrollSpyComponent: FC = () => {
  const classes = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);
  const [targetId, register] = useScrollSpy({
    root: () => contentRef.current,
  });

  useLayoutEffect(() => {
    if (targetId) {
      const element = document.getElementById(createLinkId(targetId));
      element?.scrollIntoView({
        // behavior: 'smooth', // There is currently a bug in Chrome, scrollIntoView won't work when adding this line
        block: 'nearest',
      });
    }
  }, [targetId]);

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer} ref={contentRef}>
        {sections.map(({ paragraphs, heading, id }) => (
          <Fragment key={id}>
            <Typography
              className={classes.heading}
              id={id}
              innerRef={register}
              onClick={() =>
                setTimeout(() => {
                  document
                    .getElementById(createLinkId(id))
                    ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 10)
              }
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
              className={clsx(classes.navLink, {
                active: targetId === id,
              })}
              component="a"
              href={`#${id}`}
              id={createLinkId(id)}
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
