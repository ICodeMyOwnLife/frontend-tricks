import { RefObject, useCallback, useState } from 'react';
import { useEvent, useArray } from 'cb-hooks';

const useLogs = () => {
  const [eventCurrentTarget, setEventCurrentTarget] = useState<string>();
  const [eventType, setEventType] = useState<string>();
  const [logs, , prependLogs] = useArray<InputEventLog>();
  const handleAddLogs = useCallback(
    (e: InputEvent) => {
      const { currentTarget, nativeEvent, target, timeStamp, type } = e;
      const eCurrentTarget = nativeEvent?.currentTarget ?? currentTarget;
      const eType = nativeEvent?.type ?? type;
      if (eCurrentTarget) {
        setEventCurrentTarget(
          Object.getPrototypeOf(eCurrentTarget).constructor.name,
        );
      }
      setEventType(eType);
      if (target instanceof HTMLInputElement) {
        const { checked, value } = target;
        prependLogs({ checked, timeStamp, value });
      }
    },
    [prependLogs],
  );
  return { eventCurrentTarget, eventType, handleAddLogs, logs };
};

export const useEventHandler = (
  inputRef: RefObject<HTMLInputElement>,
  eventName: keyof HTMLElementEventMap,
) => {
  const { eventCurrentTarget, eventType, logs, handleAddLogs } = useLogs();
  useEvent(() => inputRef.current, eventName, handleAddLogs);
  return { eventCurrentTarget, eventType, logs };
};

export const useChangeEvent = (inputRef: RefObject<HTMLInputElement>) =>
  useEventHandler(inputRef, 'change');

export const useInputEvent = (inputRef: RefObject<HTMLInputElement>) =>
  useEventHandler(inputRef, 'input');

export const useOnChange = useLogs;

export interface InputEventLog {
  checked: boolean;
  timeStamp: number;
  value: string;
}

export interface InputEvent {
  currentTarget?: EventTarget | null;
  nativeEvent?: { currentTarget: EventTarget | null; type: string };
  target: unknown;
  timeStamp: number;
  type?: string;
}
