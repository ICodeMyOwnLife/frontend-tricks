import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classes from './styles.module.scss';

export const CodeImpl: FC<CodeProps> = ({
  className,
  children,
  style = okaidia,
  language,
}) => (
  <div className={classnames(classes.Code, className)}>
    <SyntaxHighlighter language={language} style={style}>
      {children}
    </SyntaxHighlighter>
  </div>
);

const Code = memo(CodeImpl);
Code.displayName = 'Code';
export default Code;

export interface CodeProps {
  className?: string;
  style?: object;
  children: string;
  language: string;
}
