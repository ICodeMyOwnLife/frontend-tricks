/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import Question from 'components/Question';
import Request from './Request';
import questions from './questions';
import { useXMLHttpRequest, useFetch, useAxios } from './hooks';

export const CancelRequest1Impl: FC = () => {
  const xmlHttpRequest = useXMLHttpRequest();
  const fetchRequest = useFetch();
  const axiosRequest = useAxios();

  return (
    <Question title="Cancel Request 1" questions={questions}>
      <Request name="XMLHttpRequest" {...xmlHttpRequest} />
      <Request name="Fetch" {...fetchRequest} />
      <Request name="Axios" {...axiosRequest} />
    </Question>
  );
};

const CancelRequest1 = memo(CancelRequest1Impl);
CancelRequest1.displayName = 'CancelRequest1';
export default CancelRequest1;
