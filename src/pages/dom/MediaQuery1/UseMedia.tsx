import React, { FC, memo } from 'react';
import useMedia from 'hooks/useMedia';
import { QueryObject } from 'json2mq';
import Result, { ResultProps } from './Result';

export const UseMediaComponent: FC<UseMediaProps> = ({ query, view }) => {
  const { media, matches } = useMedia(query);
  return <Result media={media} matches={matches} view={view} />;
};

const UseMedia = memo(UseMediaComponent);
UseMedia.displayName = 'UseMedia';
export default UseMedia;

export interface UseMediaProps {
  query: string | QueryObject;
  view?: ResultProps['view'];
}
