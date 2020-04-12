import { createBeforeLeaveHook } from 'cb-hooks';
import history from 'utils/history';

const useBeforeLeave = createBeforeLeaveHook(history);

export default useBeforeLeave;
