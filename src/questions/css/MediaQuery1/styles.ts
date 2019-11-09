import { makeStyles, createStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { mediaQueries } from 'constants/mediaQueries';
import json2mq from 'json2mq';

export const getMediaItemClassKey = (index: number) => `mediaItem${index}`;

export const queries = mediaQueries.map(query =>
  typeof query === 'string' ? query : json2mq(query),
);

const queryStyles = {} as Record<string, CSSProperties>;

queries.forEach((query, index) => {
  const classKey = getMediaItemClassKey(index);
  queryStyles[`@media ${query}`] = { [classKey]: { visibility: 'visible' } };
});

const styles = () =>
  createStyles<string, {}>({
    root: {},
    mediaItem: {
      visibility: 'collapse',
    },
    ...queryStyles,
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'MediaQuery1' });

export default useStyles;
