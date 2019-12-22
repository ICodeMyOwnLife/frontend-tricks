import React, { FC, memo, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const SearchInputComponent: FC<SearchInputProps> = ({
  label = 'Search',
  id,
  className,
  placeholder = 'Type something to search',
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.searchInputGroup}>
      <label htmlFor={id}>{label}:</label>
      <input
        className={clsx(classes.searchInput, className)}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      <button className={classes.searchButton} type="button" tabIndex={0}>
        search
      </button>
    </div>
  );
};

const SearchInput = memo(SearchInputComponent);
SearchInput.displayName = 'SearchInput';
export default SearchInput;

export interface SearchInputProps
  extends OmitFrom<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string;
  id: string;
}
