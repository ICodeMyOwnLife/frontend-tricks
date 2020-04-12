import React, { FC, memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Button, Typography } from '@material-ui/core';
import useBeforeLeave from 'hooks/useBeforeLeave';
import appRoutes from 'utils/routes/appRoutes';
import { useInput } from './utils';
import useStyles from './styles';

export const BeforeLeaveComponent: FC = () => {
  const classes = useStyles();
  const { currentText, handleChangeText, handleSave, savedText } = useInput();
  useBeforeLeave(
    savedText !== currentText,
    `Are you sure you want to leave this page?`,
  );
  const { goBack } = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.inputGroup}>
        <Input fullWidth onChange={handleChangeText} value={currentText} />
        <Button color="primary" onClick={handleSave} variant="contained">
          SAVE
        </Button>
      </div>
      <Typography>Saved Text: {savedText}</Typography>
      <div className={classes.linkGroup}>
        <Link className={classes.link} to="/">
          Go Home
        </Link>
        <Link
          className={classes.link}
          replace
          to={appRoutes[0].childRoutes![0].path}
        >
          Go Somewhere
        </Link>
        <button className={classes.link} onClick={goBack} type="button">
          Go Back
        </button>
        <a className={classes.link} href="https://google.com">
          Go Out
        </a>
      </div>
    </div>
  );
};

const BeforeLeave = memo(BeforeLeaveComponent);
BeforeLeave.displayName = 'BeforeLeave';
export default BeforeLeave;
