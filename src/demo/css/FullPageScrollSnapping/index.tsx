/* eslint-disable react/no-array-index-key */
import React, { FC, memo } from 'react';
import {
  red,
  deepPurple,
  teal,
  deepOrange,
  indigo,
  brown,
  green,
  pink,
  blueGrey,
} from '@material-ui/core/colors';
import { LoremIpsum } from 'lorem-ipsum';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const loremIpsum = new LoremIpsum({ wordsPerSentence: { min: 4, max: 8 } });
const backgroundColorGroups: string[][] = [
  [red[800], red[700], red[900]],
  [deepPurple[700], deepPurple[900], deepPurple[600], deepPurple[800]],
  [teal[800], teal[600], teal[700]],
  [deepOrange[700], deepOrange[600], deepOrange[800], deepOrange[500]],
  [indigo[500], indigo[800]],
  [brown[700], brown[500], brown[800]],
  [green[900], green[700], green[800]],
  [pink[800], pink[500], pink[700], pink[400], pink[600]],
  [
    blueGrey[600],
    blueGrey[900],
    blueGrey[500],
    blueGrey[800],
    blueGrey[400],
    blueGrey[700],
  ],
];
const pageGroups = backgroundColorGroups.map(
  (backgroundColorGroup, groupIndex) =>
    backgroundColorGroup.map<PageInfo>((backgroundColor, colorIndex) => ({
      backgroundColor,
      subtitle: loremIpsum.generateSentences(2),
      title: `Page ${groupIndex + 1}.${colorIndex + 1}`,
    })),
);

export const FullPageScrollSnappingComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {pageGroups.map((pageGroup, groupIndex) => (
        <div className={classes.pageGroup} key={groupIndex}>
          {pageGroup.map(({ backgroundColor, subtitle, title }) => (
            <div
              className={classes.page}
              key={title}
              style={{ backgroundColor }}
            >
              <Typography className={classes.title} variant="h2">
                {title}
              </Typography>
              <Typography className={classes.subtitle} variant="h6">
                {subtitle}
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const FullPageScrollSnapping = memo(FullPageScrollSnappingComponent);
FullPageScrollSnapping.displayName = 'FullPageScrollSnapping';
export default FullPageScrollSnapping;

interface PageInfo {
  title: string;
  subtitle: string;
  backgroundColor: string;
}
