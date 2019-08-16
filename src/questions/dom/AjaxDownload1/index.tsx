import React, { FC, memo } from 'react';
import Question, { QuestionInfo } from 'components/Question';
import { download } from './hooks';

const questions: QuestionInfo[] = [];

export const AjaxDownload1Impl: FC = () => (
  <Question title="AJAX Download 1" questions={questions}>
    <div>
      <button
        type="button"
        onClick={() =>
          download(
            'http://10.4.71.63:5000/report?appName=GO&location=HCM&from=2019-08-09&to=2019-09-10',
          )
        }
      >
        Download
      </button>
    </div>
  </Question>
);

const AjaxDownload1 = memo(AjaxDownload1Impl);
AjaxDownload1.displayName = 'AjaxDownload1';
export default AjaxDownload1;
