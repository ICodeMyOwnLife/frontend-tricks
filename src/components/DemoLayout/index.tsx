import { FC, memo, ReactElement } from 'react';
import { useTitle } from 'cb-hooks';
import { APP_NAME } from 'constants/common';

export const DemoLayoutComponent: FC<DemoLayoutProps> = ({
  title,
  children,
}) => {
  useTitle(`${title} - Demo - ${APP_NAME}`);
  return children;
};

const DemoLayout = memo(DemoLayoutComponent);
DemoLayout.displayName = 'DemoLayout';
export default DemoLayout;

export interface DemoLayoutProps {
  title: string;
  children: ReactElement;
}
