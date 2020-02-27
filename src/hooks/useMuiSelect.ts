import { Dispatch, SetStateAction } from 'react';
import { useTextInput } from 'cb-hooks';
import {
  InitialState,
  ValueTargetEventHandler,
} from 'cb-hooks/dist/types/common';

const useMuiSelect = useTextInput as (
  initialValue?: InitialState<string>,
) => readonly [
  string,
  Dispatch<SetStateAction<string>>,
  ValueTargetEventHandler<unknown>,
];

export default useMuiSelect;
