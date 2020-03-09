import React, { FC, memo } from 'react';
import { Box, Button } from '@material-ui/core';
import { useReCaptchaV3 } from './utils';

export const ReCaptchaV3Component: FC = () => {
  const { verify, verifyResponse } = useReCaptchaV3();

  return (
    <Box>
      <Box>
        <Button color="primary" onClick={verify} variant="contained">
          Verify
        </Button>
      </Box>
      {verifyResponse && (
        <pre>{JSON.stringify(verifyResponse, undefined, 2)}</pre>
      )}
    </Box>
  );
};

const ReCaptchaV3 = memo(ReCaptchaV3Component);
ReCaptchaV3.displayName = 'ReCaptchaV3';
export default ReCaptchaV3;
