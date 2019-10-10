import { createUniqueObject } from 'helpers/utils';
import { useReducer } from 'react';

const useForceUpdate = () => {
  const [, dispatch] = useReducer(createUniqueObject, createUniqueObject());
  return dispatch as VoidFunction;
};

export default useForceUpdate;
