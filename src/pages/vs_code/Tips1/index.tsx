import React, { FC, memo } from 'react';
import TipPage from 'components/TipPage';
import markdownUrl from './tips.md';

export const Tips1Component: FC = () => (
  <TipPage markdownUrl={markdownUrl} title="VS Code: Tips 1" />
);

const Tips1 = memo(Tips1Component);
Tips1.displayName = 'Tips1';
export default Tips1;
