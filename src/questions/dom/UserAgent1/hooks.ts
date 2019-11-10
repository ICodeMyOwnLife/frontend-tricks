import usePromise from 'hooks/usePromise';
import backendService from 'services/backendService';

export const useBackendUaResult = () =>
  usePromise(() =>
    backendService
      .get<IUAParser.IResult>('/user-agent')
      .then(({ data }) => data),
  );
