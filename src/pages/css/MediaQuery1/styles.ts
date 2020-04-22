import { makeStyles, createStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { mediaQueries } from 'constants/mediaQueries';
import json2mq from 'json2mq';

export const getMediaItemClassKey = (index: number) => `mediaItem${index}`;

export const queries = mediaQueries.map(query =>
  typeof query === 'string' ? query : json2mq(query),
);

const queryStyles = Object.fromEntries(
  queries.map<[string, CSSProperties]>((query, index) => [
    `@media ${query}`,
    { [getMediaItemClassKey(index)]: { visibility: 'visible' } },
  ]),
);

const styles = () =>
  createStyles<string, {}>({
    root: {},
    mediaItem: {
      visibility: 'collapse',
    },
    ...queryStyles,
  });

const useStyles = makeStyles(styles, { name: 'MediaQuery1' });

export default useStyles;
