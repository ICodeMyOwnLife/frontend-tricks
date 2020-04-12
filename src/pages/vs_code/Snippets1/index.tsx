import React, { FC, memo } from 'react';
import TipPage from 'components/TipPage';
import markdownUrl from './snippets.md';

export const Snippets1Component: FC = () => (
  <TipPage markdownUrl={markdownUrl} title="VS Code: Snippets 1" />
);

const Snippets1 = memo(Snippets1Component);
Snippets1.displayName = 'Snippets1';
export default Snippets1;
