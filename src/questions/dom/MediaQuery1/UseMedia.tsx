import React, { FC, memo } from 'react';
import useMedia from 'hooks/useMedia';
import { QueryObject } from 'json2mq';
import Result from './Result';

export const UseMediaComponent: FC<UseMediaProps> = ({ query }) => {
  const { media, matches } = useMedia(query);
  return <Result media={media} matches={matches} />;
};

const UseMedia = memo(UseMediaComponent);
UseMedia.displayName = 'UseMedia';
export default UseMedia;

export interface UseMediaProps {
  query: string | QueryObject;
}
