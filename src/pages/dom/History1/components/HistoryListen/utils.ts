/* eslint-disable import/no-extraneous-dependencies */
import { useArray } from 'cb-hooks';
import { Location } from 'history';
import useHistoryListen from 'hooks/useHistoryListen';

export const useHistories = () => {
  const [histories, , prepend] = useArray<HistoryInfo>([]);
  useHistoryListen((location, action) => prepend({ action, location }));
  return histories;
};

export interface HistoryInfo {
  action: string;
  location: Location<unknown>;
}
