import React, { FC, memo } from 'react';
import { useFavicon } from 'cb-hooks';
import useMuiSelect from 'hooks/useMuiSelect';
import SelectFormControl from 'components/SelectFormControl';
import useStyles from './styles';

const favicons = Array.from(
  { length: 5 },
  (_, index) => `/dom/LinkTags1/${index + 1}.png`,
);

export const FaviconsComponent: FC = () => {
  const classes = useStyles();
  const [favicon, , handleChangeFavicon] = useMuiSelect();
  useFavicon(favicon);

  return (
    <div>
      <div className={classes.inputs}>
        <SelectFormControl
          label="Favicon"
          onChange={handleChangeFavicon}
          options={favicons}
          value={favicon}
        />
      </div>
      <div>
        <img src={favicon} alt="favicon" />
      </div>
    </div>
  );
};

const Favicons = memo(FaviconsComponent);
Favicons.displayName = 'Favicons';
export default Favicons;
