import { createUniqueObject } from 'helpers/utils';
import { useReducer } from 'react';

const useForceUpdate = () => {
  const [updateToken, dispatch] = useReducer(
    createUniqueObject,
    createUniqueObject(),
  );
  return [updateToken, dispatch as VoidFunction] as const;
};

export default useForceUpdate;
