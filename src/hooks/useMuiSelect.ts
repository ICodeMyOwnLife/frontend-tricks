import { Dispatch, SetStateAction } from 'react';
import { useTextInput } from 'cb-hooks';
import {
  InitialState,
  ValueTargetEventHandler,
} from 'cb-hooks/dist/types/common';

const useMuiSelect = useTextInput as <TValue extends string>(
  initialValue?: InitialState<TValue>,
) => readonly [
  TValue,
  Dispatch<SetStateAction<TValue>>,
  ValueTargetEventHandler<unknown>,
];

export default useMuiSelect;
