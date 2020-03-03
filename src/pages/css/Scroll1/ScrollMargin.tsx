import React, { FC, memo, Fragment } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export const ScrollMarginComponent: FC = () => {
  const headingCount = 6;

  const classes = useStyles();

  return (
    <Box className={classes.scrollMargin}>
      <Box className={classes.scrollHeader}>
        <Typography color="textPrimary" variant="h4">
          HEADER
        </Typography>
      </Box>
      {Array.from({ length: headingCount }, (_, index) => (
        <Fragment key={index}>
          <div className={classes.scrollPadding} />
          <Typography
            className={classes.scrollHeading}
            color="primary"
            id={`heading-${index + 1}`}
            variant="h4"
          >
            Heading {index + 1}
          </Typography>
        </Fragment>
      ))}
      <div className={classes.scrollPadding} />
      <Box className={classes.scrollLinkBar}>
        {Array.from({ length: headingCount }, (_, index) => (
          <Link
            className={classes.scrollLink}
            color="secondary"
            href={`#heading-${index + 1}`}
            key={index}
          >
            Heading {index + 1}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const ScrollMargin = memo(ScrollMarginComponent);
ScrollMargin.displayName = 'ScrollMargin';
export default ScrollMargin;
