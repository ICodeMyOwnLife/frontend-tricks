import React, { FC, memo } from 'react';
import { Button, Input } from '@material-ui/core';
import { useCommunication } from './utils';
import useStyles from './styles';

export const CommunicationComponent: FC<CommunicationProps> = ({
  communicationMessage,
  sendMessage,
}) => {
  const classes = useStyles();
  const { handleChangeMessage, handleClick, message } = useCommunication({
    sendMessage,
  });

  return (
    <div className={classes.root}>
      <Input fullWidth onChange={handleChangeMessage} value={message} />
      <Button
        className={classes.button}
        color="primary"
        onClick={handleClick}
        variant="contained"
      >
        Send Message
      </Button>
      <Input fullWidth readOnly value={communicationMessage} />
    </div>
  );
};

const Communication = memo(CommunicationComponent);
Communication.displayName = 'Communication';
export default Communication;

export interface CommunicationProps {
  communicationMessage: string;
  sendMessage: (message: string) => void;
}
