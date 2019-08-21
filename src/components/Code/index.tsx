import React, { FC, memo } from 'react';
import classnames from 'classnames';
import 'prismjs/themes/prism.css';
import { usePrism } from './hooks';

export const CodeImpl: FC<CodeProps> = ({ className, children, language }) => {
  const ref = usePrism();

  return (
    <pre className={classnames(className, `language-${language}`)} ref={ref}>
      <code>{children}</code>
    </pre>
  );
};

const Code = memo(CodeImpl);
Code.displayName = 'Code';
export default Code;

export interface CodeProps {
  className?: string;
  children: string;
  language: string;
}
