/* eslint-disable react/no-unescaped-entities */
import React, { FC, memo } from 'react';
import { Typography, Button, Link } from '@material-ui/core';
import { BASE_URL } from 'constants/common';
import { useOpener, useReferrer } from './utils';
import useStyles from './styles';

const referrerUrl = `${BASE_URL}/with-referrer?redirect=${window.location.href}`;

export const OpenerReferrerComponent: FC = () => {
  const classes = useStyles();
  const { handleNavigate, opener } = useOpener();
  const referrer = useReferrer();

  return (
    <div className={classes.root}>
      {(opener || referrer) && (
        <div className={classes.opener}>
          {opener && (
            <Typography>
              Opener is {Object.getPrototypeOf(opener).constructor.name}, from{' '}
              {opener.location.href}
            </Typography>
          )}

          {referrer && (
            <div>
              <Typography>Referrer is {referrer}</Typography>
            </div>
          )}

          {handleNavigate && (
            <Button
              color="secondary"
              onClick={handleNavigate}
              variant="contained"
            >
              Navigate the opener
            </Button>
          )}
        </div>
      )}

      {!opener && !referrer && (
        <div className={classes.links}>
          <Typography>There is no opener and referrer</Typography>

          <Link href={referrerUrl} target="_blank">
            Open in new tab
          </Link>

          <Link href={referrerUrl} rel="noopener" target="_blank">
            Open with rel="noopener"
          </Link>

          <Link href={referrerUrl} rel="noreferrer" target="_blank">
            Open with rel="noreferrer"
          </Link>
        </div>
      )}
    </div>
  );
};

const OpenerReferrer = memo(OpenerReferrerComponent);
OpenerReferrer.displayName = 'OpenerReferrer';
export default OpenerReferrer;
