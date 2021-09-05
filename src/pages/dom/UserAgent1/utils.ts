import { usePromise } from 'cb-hooks';
import backendService from 'services/backendService';

export const useBackendUaResult = () =>
  usePromise(() =>
    backendService
      .get<UAParser.IResult>('/user-agent')
      .then(({ data }) => data),
  );
