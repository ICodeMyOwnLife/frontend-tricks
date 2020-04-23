/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { makeStyles, createStyles, Theme, fade } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { Rule, StyleSheet } from 'jss';

const styles = ({ spacing }: Theme) =>
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
      borderBottom: `1px solid ${blueGrey[800]}`,
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
    const prefix = `${name}-${key}`;
    const nested = theme[Symbol.for('mui.nested')];
    return !nested ? prefix : `${prefix}-${ruleCounter}`;
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
}
