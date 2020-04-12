import { createHistoryListenHook } from 'cb-hooks';
import history from 'utils/history';

const useHistoryListen = createHistoryListenHook(history);

export default useHistoryListen;
