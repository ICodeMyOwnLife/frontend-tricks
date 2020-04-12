import React, { FC, memo } from 'react';
import useMuiSelect from 'hooks/useMuiSelect';
import { useUpdatedLink, useFetchText } from 'cb-hooks';
import SelectFormControl from 'components/SelectFormControl';
import clsx from 'clsx';
import useStyles from './styles';

const styles = ['red', 'green', 'blue'].map(
  color => `/dom/LinkTags1/${color}.css`,
);

const linkId = 'linkTags1';

export const StyleSheetsComponent: FC = () => {
  const classes = useStyles();
  const [style, , handleChangeStyle] = useMuiSelect(styles[0]);
  useUpdatedLink({ href: style, id: linkId, rel: 'stylesheet' }, `#${linkId}`, [
    style,
  ]);
  const { result } = useFetchText(style, undefined, [style]);

  return (
    <div>
      <div className={classes.inputs}>
        <SelectFormControl
          label="Style"
          onChange={handleChangeStyle}
          options={styles}
          value={style}
        />
      </div>
      <div className={classes.styleShow}>
        <pre>
          <code>{result}</code>
        </pre>
        <div className={clsx(classes.lt1Container, 'lt1-container')}>
          LOREM IPSUM
        </div>
      </div>
    </div>
  );
};

const StyleSheets = memo(StyleSheetsComponent);
StyleSheets.displayName = 'StyleSheets';
export default StyleSheets;
