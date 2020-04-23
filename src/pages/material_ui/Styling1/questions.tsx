import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to make Material UI generate global class names?`,
    answer: (
      <div>
        <p>
          1. Use <code>generateClassName</code> in <code>options</code>{' '}
          parameter of <code>makeStyles</code> or <code>withStyles</code>{' '}
          function
        </p>

        <CodeViewer language="typescript">
          {`const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr',
      backgroundColor: fade(blueGrey[500], 0.7),
    },
    heading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing(2, 3),
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderBottom: \`1px solid $\{blueGrey[800]}\`,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing(2, 3),
    },
  });

const createGenerateClassName = () => {
  let ruleCounter = 0;

  const generateClassName: GenerateClassName = (
    { key },
    { options: { name, theme } },
  ) => {
    ruleCounter += 1;
    const prefix = \`$\{name}-$\{key}\`;
    const nested = theme[Symbol.for('mui.nested')];
    return !nested ? prefix : \`$\{prefix}-$\{ruleCounter}\`;
  };

  return generateClassName;
};

const generateClassName = createGenerateClassName();
const MyCardStyleName = 'MyCard';
const useStyles = makeStyles(styles, {
  // @ts-ignore
  generateClassName,
  name: MyCardStyleName,
});

export default useStyles;

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    [MyCardStyleName]: ClassKey<typeof styles>;
  }
}

declare module '@material-ui/styles/withStyles/withStyles' {
  export interface WithStylesOptions<Theme> {
    // @ts-ignore
    generateClassName?: GenerateClassName;
  }
}

type ClassKey<
  TStyles extends (...args: any[]) => Record<string, any>
> = keyof ReturnType<TStyles>;

type GenerateClassName = (
  rule: Rule,
  sheet: StyleSheet<string> & ExtendedStyleSheet,
) => string;

interface ExtendedStyleSheet<TTheme = any> {
  options: {
    name: string;
    theme: TTheme;
  };
}`}
        </CodeViewer>

        <p>
          2. Use <code>generateClassName</code> prop of{' '}
          <code>StyleProvider</code>
        </p>

        <p>
          3. Define global class names using syntax provided by the preinstalled{' '}
          <a
            href="https://cssinjs.org/jss-plugin-global/"
            rel="noopener noreferrer"
            target="_blank"
          >
            jss-plugin-global
          </a>{' '}
          plugin
        </p>
      </div>
    ),
    references: [
      {
        name: `[GitHub] material-ui-styles: createGenerateClassName.js`,
        url: `https://github.com/mui-org/material-ui/blob/master/packages/material-ui-styles/src/createGenerateClassName/createGenerateClassName.js`,
      },
      {
        name: `[Material-UI] Styles: API`,
        url: `https://material-ui.com/styles/api/#stylesprovider`,
      },
      {
        name: `[Material-UI] Styles: Advanced`,
        url: `https://material-ui.com/styles/advanced/#global-css`,
      },
    ],
  },
  {
    question: `How to override style using theme?`,
    answer: (
      <div>
        <p>
          Set <code>overrides</code> prop in the argument of{' '}
          <code>createMuiTheme</code> function and provide the returned theme to{' '}
          <code>ThemeProvider</code>
        </p>

        <CodeViewer language="typescript">
          {`const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: purple[600],
        color: blueGrey[100],
      },
    },
    MyCard: {
      root: {
        border: \`1px solid $\{blueGrey[400]}\`,
        color: blueGrey[100],
        backgroundColor: fade(blueGrey[700], 0.7),
      },
      heading: {
        borderBottomColor: blueGrey[400],
      },
    },
  },
});`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const Styling1Component: FC = () => (
  <QuestionPage questions={questions} title="Material UI: Styling 1">
    <Section title="Custom Class Name Generator">
      <MyGroup />
    </Section>

    <Section title="Custom Theme Override">
      <ThemeProvider theme={theme}>
        <MyGroup />
      </ThemeProvider>
    </Section>
  </QuestionPage>
);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[Material-UI] theming`,
        url: `https://material-ui.com/customization/theming/`,
      },
      {
        name: `[Material-UI] Customizing Components`,
        url: `https://material-ui.com/customization/components/#global-theme-override`,
      },
    ],
  },
];

export default questions;
