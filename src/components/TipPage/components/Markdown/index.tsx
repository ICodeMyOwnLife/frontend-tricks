import { FC, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { useFetchText } from 'cb-hooks';
import CodeViewer from 'components/CodeViewer';

const renderers = { code: CodeViewer };

export const MarkdownComponent: FC<MarkdownProps> = ({ markdownUrl }) => {
  const { result } = useFetchText(markdownUrl);
  return <ReactMarkdown renderers={renderers} source={result} />;
};

const Markdown = memo(MarkdownComponent);
Markdown.displayName = 'Markdown';
export default Markdown;

export interface MarkdownProps {
  markdownUrl: string;
}
