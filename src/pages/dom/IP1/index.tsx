import React, { FC, memo } from 'react';
import { Typography } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import { useUserIp } from './utils';

export const IP1Component: FC = () => {
  const ips = useUserIp();

  return (
    <QuestionPage questions={questions} title="DOM: IP 1">
      <Section title="Private IPs">
        {ips.map(ip => (
          <Typography key={ip}>{ip}</Typography>
        ))}
      </Section>
    </QuestionPage>
  );
};

const IP1 = memo(IP1Component);
IP1.displayName = 'IP1';
export default IP1;
