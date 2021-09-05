import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to detect the device?`,
    answer: (
      <CodeViewer language="tsx">
        {`import MobileDetect from 'mobile-detect';

const mobileDetect = new MobileDetect(navigator.userAgent);
const status = {
  mobile: mobileDetect.mobile(),
  phone: mobileDetect.phone(),
  tablet: mobileDetect.tablet(),
  userAgent: mobileDetect.userAgent(),
  userAgents: mobileDetect.userAgents(),
  os: mobileDetect.os(),
  mobileGrade: mobileDetect.mobileGrade(),
};`}
      </CodeViewer>
    ),
    references: [
      {
        name: `[GitHub] mobile-detect.js`,
        url: `https://github.com/hgoebl/mobile-detect.js`,
      },
    ],
  },
];

export default questions;
