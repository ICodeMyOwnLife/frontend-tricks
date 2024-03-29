import { FC, memo } from 'react';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useStyles from './styles';

export const CodeViewerComponent: FC<CodeViewerProps> = ({
  children,
  className,
  language,
  style = okaidia,
  value,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <SyntaxHighlighter language={language} style={style}>
        {value || children}
      </SyntaxHighlighter>
    </div>
  );
};

const CodeViewer = memo(CodeViewerComponent);
CodeViewer.displayName = 'CodeViewer';
export default CodeViewer;

export interface CodeViewerProps {
  children: string;
  className?: string;
  language: CodeViewerLanguage;
  style?: object;
  value?: string;
}

export type CodeViewerLanguage =
  | 'abap'
  | 'actionscript'
  | 'ada'
  | 'apacheconf'
  | 'apl'
  | 'applescript'
  | 'arduino'
  | 'arff'
  | 'asciidoc'
  | 'asm6502'
  | 'aspnet'
  | 'autohotkey'
  | 'autoit'
  | 'bash'
  | 'basic'
  | 'batch'
  | 'bison'
  | 'brainfuck'
  | 'bro'
  | 'c'
  | 'clike'
  | 'clojure'
  | 'coffeescript'
  | 'cpp'
  | 'crystal'
  | 'csharp'
  | 'csp'
  | 'cssExtras'
  | 'css-extras'
  | 'css'
  | 'd'
  | 'dart'
  | 'diff'
  | 'django'
  | 'docker'
  | 'eiffel'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang'
  | 'flow'
  | 'fortran'
  | 'fsharp'
  | 'gedcom'
  | 'gherkin'
  | 'git'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'haxe'
  | 'hpkp'
  | 'hsts'
  | 'http'
  | 'ichigojam'
  | 'icon'
  | 'inform7'
  | 'ini'
  | 'io'
  | 'j'
  | 'java'
  | 'javascript'
  | 'jolie'
  | 'json'
  | 'jsx'
  | 'julia'
  | 'keyman'
  | 'kotlin'
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'lolcode'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'markupTemplating'
  | 'markup-templating'
  | 'markup'
  | 'matlab'
  | 'mel'
  | 'mizar'
  | 'monkey'
  | 'n4js'
  | 'nasm'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  | 'objectivec'
  | 'ocaml'
  | 'opencl'
  | 'oz'
  | 'parigp'
  | 'parser'
  | 'pascal'
  | 'perl'
  | 'phpExtras'
  | 'php-extras'
  | 'php'
  | 'plsql'
  | 'powershell'
  | 'processing'
  | 'prolog'
  | 'properties'
  | 'protobuf'
  | 'pug'
  | 'puppet'
  | 'pure'
  | 'python'
  | 'q'
  | 'qore'
  | 'r'
  | 'reason'
  | 'renpy'
  | 'rest'
  | 'rip'
  | 'roboconf'
  | 'ruby'
  | 'rust'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'smalltalk'
  | 'smarty'
  | 'soy'
  | 'sql'
  | 'stylus'
  | 'swift'
  | 'tap'
  | 'tcl'
  | 'textile'
  | 'tsx'
  | 'tt2'
  | 'twig'
  | 'typescript'
  | 'vbnet'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'visualBasic'
  | 'visual-basic'
  | 'wasm'
  | 'wiki'
  | 'xeora'
  | 'xojo'
  | 'xquery'
  | 'yaml';
