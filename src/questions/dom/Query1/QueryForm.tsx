/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, useState, useRef } from 'react';
import {
  TextField,
  ButtonGroup,
  Button,
  Grow,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useTextField from 'hooks/useTextField';
import useToggle from 'hooks/useToggle';
import useStyles from './styles';
import {
  queryInfos,
  useClickAwayHandler,
  useSubmitHandler,
  QueryFunction,
} from './hooks';

export const QueryFormComponent: FC<QueryFormProps> = ({ onQuery }) => {
  const classes = useStyles();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [queryIndex, setQueryIndex] = useState(0);
  const [queryText, handleChangeQueryText] = useTextField('');
  const [
    dropDownVisible,
    toggleDropDownVisible,
    setDropDownVisible,
  ] = useToggle(false);
  const handleClickAway = useClickAwayHandler({
    anchorRef,
    setDropDownVisible,
  });
  const handleSubmit = useSubmitHandler({
    onQuery,
    queryIndex,
    queryText,
  });

  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Query"
        value={queryText}
        onChange={handleChangeQueryText}
      />
      <ButtonGroup
        className={classes.Button}
        variant="contained"
        color="primary"
        ref={anchorRef}
      >
        <Button type="submit">{queryInfos[queryIndex].name}</Button>
        <Button color="primary" onClick={toggleDropDownVisible}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={dropDownVisible}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper elevation={2}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <MenuList>
                  {queryInfos.map(({ name }, index) => (
                    <MenuItem
                      key={name}
                      selected={queryIndex === index}
                      onClick={() => setQueryIndex(index)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </form>
  );
};

const QueryForm = memo(QueryFormComponent);
QueryForm.displayName = 'QueryForm';
export default QueryForm;

export interface QueryFormProps {
  onQuery: (queryText: string, queryFunc: QueryFunction) => void;
}
