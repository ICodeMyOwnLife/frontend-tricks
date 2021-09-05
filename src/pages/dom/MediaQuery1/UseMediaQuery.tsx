import { FC, memo } from 'react';
import { useMediaQuery } from '@material-ui/core';
import Result from './Result';

export const UseMediaQueryComponent: FC<UseMediaQueryProps> = ({ query }) => {
  const matches = useMediaQuery(query);
  return <Result media={query} matches={matches} />;
};

const UseMediaQuery = memo(UseMediaQueryComponent);
UseMediaQuery.displayName = 'UseMediaQuery';
export default UseMediaQuery;

export interface UseMediaQueryProps {
  query: string;
}
