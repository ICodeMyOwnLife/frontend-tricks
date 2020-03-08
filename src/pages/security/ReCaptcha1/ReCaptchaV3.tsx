import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import { useReCaptchaV3 } from './utils';

export const ReCaptchaV3Component: FC = () => {
  const verifyResponse = useReCaptchaV3();

  return (
    <Box>
      {verifyResponse && (
        <pre>{JSON.stringify(verifyResponse, undefined, 2)}</pre>
      )}
    </Box>
  );
};

const ReCaptchaV3 = memo(ReCaptchaV3Component);
ReCaptchaV3.displayName = 'ReCaptchaV3';
export default ReCaptchaV3;
