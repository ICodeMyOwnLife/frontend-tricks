import React, { FC, memo } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { ReCaptchaV3, ReCaptchaCheckbox } from 'cb-react-recaptcha';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import {
  v3SiteKey,
  useReCaptchaV3,
  checkboxSiteKey,
  useReCaptchaCheckbox,
} from './utils';
import useStyles from './styles';

export const ReCaptcha1Component: FC = () => {
  const classes = useStyles();
  const {
    getResponseV3,
    handleVerifyV3,
    refV3,
    responseV3,
    verifyResponseV3,
  } = useReCaptchaV3();

  const {
    getResponseCheckbox,
    handleExpiredCheckbox,
    handleVerifyCheckbox,
    refCheckbox,
    resetCheckbox,
    responseCheckbox,
    verifyResponseCheckbox,
  } = useReCaptchaCheckbox();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="ReCAPTCHA"
    >
      <Section title="ReCAPTCHA v3">
        <Box>
          <ReCaptchaV3
            action="test_v3"
            onVerify={handleVerifyV3}
            ref={refV3}
            siteKey={v3SiteKey}
          />
          <Box className={classes.buttonGrid}>
            <Button color="primary" onClick={getResponseV3} variant="contained">
              Get Response
            </Button>
          </Box>
          <Typography color="textSecondary" noWrap={false} variant="subtitle1">
            Response: {responseV3}
          </Typography>
          <pre>
            {verifyResponseV3 && JSON.stringify(verifyResponseV3, null, 2)}
          </pre>
        </Box>
      </Section>
      <Section title="ReCAPTCHA Checkbox">
        <Box>
          <Box>
            <ReCaptchaCheckbox
              id="1"
              onExpired={handleExpiredCheckbox}
              onVerify={handleVerifyCheckbox}
              ref={refCheckbox}
              siteKey={checkboxSiteKey}
              size="normal"
              theme="dark"
            />
          </Box>
          <Box className={classes.buttonGrid}>
            <Button
              color="primary"
              onClick={getResponseCheckbox}
              variant="contained"
            >
              Get Response
            </Button>
            <Button
              color="secondary"
              onClick={resetCheckbox}
              variant="contained"
            >
              Reset
            </Button>
          </Box>
          <Typography color="textSecondary" noWrap={false} variant="subtitle1">
            Response: {responseCheckbox}
          </Typography>
          <pre>
            {verifyResponseCheckbox &&
              JSON.stringify(verifyResponseCheckbox, null, 2)}
          </pre>
        </Box>
      </Section>
    </QuestionPage>
  );
};

const ReCaptcha1 = memo(ReCaptcha1Component);
ReCaptcha1.displayName = 'ReCaptcha1';
export default ReCaptcha1;
