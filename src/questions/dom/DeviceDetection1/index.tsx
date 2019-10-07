import React, { FC, memo, useState, useEffect } from 'react';
import MobileDetect from 'mobile-detect';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const DeviceDetection1Component: FC = () => {
  const [status, setStatus] = useState<DeviceDetectionStatus>();

  useEffect(() => {
    const mobileDetect = new MobileDetect(navigator.userAgent);

    setStatus({
      mobile: mobileDetect.mobile(),
      phone: mobileDetect.phone(),
      tablet: mobileDetect.tablet(),
      userAgent: mobileDetect.userAgent(),
      userAgents: mobileDetect.userAgents(),
      os: mobileDetect.os(),
      mobileGrade: mobileDetect.mobileGrade(),
    });
  }, []);

  return (
    <QuestionPage title="Device Detection 1" questions={questions}>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </QuestionPage>
  );
};

const DeviceDetection1 = memo(DeviceDetection1Component);
export default DeviceDetection1;

export interface DeviceDetectionStatus {
  mobile: string | null;
  phone: string | null;
  tablet: string | null;
  userAgent: string | null;
  userAgents: string[];
  os: string | null;
  mobileGrade: string | null;
}
