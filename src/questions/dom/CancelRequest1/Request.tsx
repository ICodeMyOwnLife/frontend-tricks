import React, { FC, memo } from 'react';
import Button from 'components/Button';
import classes from './styles.module.scss';

export const RequestImpl: FC<RequestProps> = ({
  name,
  initialize,
  send,
  cancel,
  result,
}) => (
  <div className={classes.Request}>
    <h4>{name}</h4>

    <div>
      <Button className="mr-4" onClick={initialize}>
        Initialize
      </Button>

      <Button className="mr-4" onClick={send}>
        Send
      </Button>

      <Button className="mr-4" onClick={cancel}>
        Cancel
      </Button>
    </div>

    <h6>Result:</h6>
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </div>
);

const Request = memo(RequestImpl);
Request.displayName = 'Request';
export default Request;

export interface RequestProps {
  name: string;
  initialize: VoidFunction;
  send: VoidFunction;
  cancel: VoidFunction;
  result: any;
}
