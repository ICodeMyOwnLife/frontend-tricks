import { useCallback, Reducer, useReducer } from 'react';
import { ValueTargetEvent } from 'cb-hooks/dist/types/common';

const reducer: Reducer<InputState, InputAction> = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, currentText: action.payload };

    case 'SAVE':
      return { ...state, savedText: state.currentText };

    default:
      return state;
  }
};

export const useInput = () => {
  const [{ currentText, savedText }, dispatch] = useReducer(reducer, {
    currentText: '',
    savedText: '',
  });
  const handleChangeText = useCallback(
    ({ target: { value } }: ValueTargetEvent<string>) =>
      dispatch({ type: 'INPUT', payload: value }),
    [],
  );
  const handleSave = useCallback(() => dispatch({ type: 'SAVE' }), []);
  return {
    currentText,
    handleChangeText,
    handleSave,
    savedText,
  };
};

export interface InputState {
  currentText: string;
  savedText: string;
}

type InputAction = { type: 'INPUT'; payload: string } | { type: 'SAVE' };
