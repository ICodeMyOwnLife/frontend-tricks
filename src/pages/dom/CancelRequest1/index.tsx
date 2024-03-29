import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Request from './Request';
import questions from './questions';
import { useXMLHttpRequest, useFetch, useAxios } from './hooks';

export const CancelRequest1Component: FC = () => {
  const xmlHttpRequest = useXMLHttpRequest();
  const fetchRequest = useFetch();
  const axiosRequest = useAxios();

  return (
    <QuestionPage title="Cancel Request 1" questions={questions}>
      <Request name="XMLHttpRequest" {...xmlHttpRequest} />
      <Request name="Fetch" {...fetchRequest} />
      <Request name="Axios" {...axiosRequest} />
    </QuestionPage>
  );
};

const CancelRequest1 = memo(CancelRequest1Component);
CancelRequest1.displayName = 'CancelRequest1';
export default CancelRequest1;
