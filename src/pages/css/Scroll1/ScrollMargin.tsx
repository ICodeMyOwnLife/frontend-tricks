import { FC, memo, Fragment } from 'react';
import { Typography, Link } from '@material-ui/core';
import ViewDemo from 'components/ViewDemo';
import demoRoutes from 'utils/routes/demoRoutes';
import useStyles from './styles';

export const ScrollMarginComponent: FC = () => {
  const headingCount = 6;

  const classes = useStyles();

  return (
    <div className={classes.scrollMargin}>
      <div className={classes.scrollHeader}>
        <Typography color="textPrimary" variant="h4">
          HEADER
        </Typography>
      </div>
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
      <div className={classes.scrollLinkBar}>
        <div className={classes.scrollLinks}>
          {Array.from({ length: headingCount }, (_, index) => (
            <Link color="secondary" href={`#heading-${index + 1}`} key={index}>
              Heading {index + 1}
            </Link>
          ))}
        </div>
        <div>
          <ViewDemo
            route={demoRoutes.scrollTarget}
            urlInfo={{ hash: 'post_5' }}
          />
        </div>
      </div>
    </div>
  );
};

const ScrollMargin = memo(ScrollMarginComponent);
ScrollMargin.displayName = 'ScrollMargin';
export default ScrollMargin;
