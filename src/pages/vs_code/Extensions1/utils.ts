import { ReferenceInfo } from 'components/References';

export const extensions: ExtensionInfo[] = [
  { name: 'Auto Rename Tag', author: 'Jun Han' },
  { name: 'Better Comments', author: 'Aaron Bond' },
  { name: 'Bracket Pair Colorizer 2', author: 'CoenraadS' },
  { name: 'change-case', author: 'wmaurer' },
  { name: 'Code Spell Checker', author: 'Street Side Software' },
  { name: 'Color Highlight', author: 'Sergii Naumov' },
  { name: 'CSS Formatter', author: 'Martin Aeschlimann' },
  { name: 'Debugger for Chrome', author: 'Microsoft' },
  { name: 'ES7 React/Redux/React-Native/JS snippets', author: 'dsznajder' },
  { name: 'ESLint', author: 'Dirk Baeumer' },
  { name: 'Fast Open HTML in Default Browser', author: 'D1n910' },
  { name: 'Git History', author: 'Don Jayamanne' },
  { name: 'gitignore', author: 'CodeZombie' },
  { name: 'gitignore', author: 'michelemelluso' },
  { name: 'GitLens - Git supercharged', author: 'Eric Amodio' },
  { name: 'HTML CSS Support', author: 'ecmel' },
  { name: 'Import Cost', author: 'Wix' },
  { name: 'indent-rainbow', author: 'oderwat' },
  { name: 'JS Refactor', author: 'Chris Stead' },
  { name: 'jumpy', author: 'wmaurer' },
  { name: 'Live Server', author: 'Ritwick Dey' },
  { name: 'Live Share', author: 'Microsoft' },
  { name: 'Markdown All in One', author: 'Yu Zhang' },
  { name: 'markdownlint', author: 'David Anson' },
  { name: 'npm', author: 'egamma' },
  { name: 'npm Intellisense', author: 'Christian Kohler' },
  { name: 'Paste JSON as Code', author: 'quicktype' },
  { name: 'Prettier - Code formatter', author: 'Esben Petersen' },
  { name: 'Sass', author: 'Robin Bentley' },
  { name: 'SCSS Formatter', author: 'Sibiraj' },
  { name: 'SCSS IntelliSense', author: 'mrmlnc' },
  { name: 'SVG', author: 'jock' },
  { name: 'SVG Viewer', author: 'cssho' },
  { name: 'TODO Highlight', author: 'Wayou Liu' },
  { name: 'Todo+', author: 'Fabio Spampinato' },
  { name: 'Toggle Quotes', author: 'BriteSnow' },
  { name: 'Visual Studio IntelliCode', author: 'Microsoft' },
  { name: 'VSCode Great Icons', author: 'Emmanuel Béziat' },
  { name: 'vscode-icons', author: 'VSCode Icons Team' },
];

export const references: ReferenceInfo[] = [
  {
    name: '[Medium] The Ultimate VSCode Setup for Front End/JS/React',
    url:
      'https://medium.com/productivity-freak/the-ultimate-vscode-setup-for-js-react-6a4f7bd51a2',
  },
];

interface ExtensionInfo {
  name: string;
  author: string;
}