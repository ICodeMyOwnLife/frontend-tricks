import React, { FC, memo } from 'react';
import PageLayout, { PageLayoutProps } from 'components/PageLayout';
import Markdown from './components/Markdown';

export const TipPageComponent: FC<TipPageProps> = ({
  children,
  markdownUrl,
  ...props
}) => (
  <PageLayout {...props}>
    {markdownUrl && <Markdown markdownUrl={markdownUrl} />}
    {children}
  </PageLayout>
);

const TipPage = memo(TipPageComponent);
TipPage.displayName = 'TipPage';
export default TipPage;

export interface TipPageProps extends PageLayoutProps {
  markdownUrl?: string;
}
