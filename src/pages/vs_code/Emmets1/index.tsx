import React, { FC, memo } from 'react';
import TipPage from 'components/TipPage';
import markdownUrl from './emmets.md';

export const Emmets1Component: FC = () => (
  <TipPage markdownUrl={markdownUrl} title="VS Code: Emmets 1" />
);

const Emmets1 = memo(Emmets1Component);
Emmets1.displayName = 'Emmets1';
export default Emmets1;
