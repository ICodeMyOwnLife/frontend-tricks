import React, { FC, memo } from 'react';
import json2mq, { QueryObject } from 'json2mq';
import { useMediaQuery } from 'cb-hooks';
import Result, { ResultProps } from './Result';

export const UseMediaComponent: FC<UseMediaProps> = ({ query, view }) => {
  const { media, matches } = useMediaQuery(
    typeof query === 'string' ? query : json2mq(query),
  );
  return <Result media={media} matches={matches} view={view} />;
};

const UseMedia = memo(UseMediaComponent);
UseMedia.displayName = 'UseMedia';
export default UseMedia;

export interface UseMediaProps {
  query: string | QueryObject;
  view?: ResultProps['view'];
}
