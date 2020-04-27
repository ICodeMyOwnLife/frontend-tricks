import React, { FC, memo } from 'react';
import TipPage from 'components/TipPage';
import markdownSrc from './yarnScripts.md';

export const YarnScripts1Component: FC = () => (
  <TipPage markdownUrl={markdownSrc} title="Tools: Yarn Scripts 1" />
);

const YarnScripts1 = memo(YarnScripts1Component);
YarnScripts1.displayName = 'YarnScripts1';
export default YarnScripts1;
