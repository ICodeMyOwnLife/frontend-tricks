/* eslint-disable no-console */
import { BaseSyntheticEvent, useCallback, ChangeEvent, useEffect } from 'react';

const getEventInfo = ({
  currentTarget,
  target,
  eventPhase,
  bubbles,
  type,
}: Event | BaseSyntheticEvent) => ({
  currentTarget: currentTarget && currentTarget.toString(),
  target: target && target.toString(),
  eventPhase,
  bubbles,
  type,
});

const updateEventInfo = (
  e: BaseSyntheticEvent,
  setEventInfo: (eventInfo: any) => void,
) => {
  const nativeEvent =
    e.nativeEvent instanceof Event ? getEventInfo(e.nativeEvent) : {};
  const eventInfo = { nativeEvent, ...getEventInfo(e) };
  setEventInfo(eventInfo);
};

export const useClickSyncHandler = (setEventInfo: (eventInfo: any) => void) =>
  useCallback(
    (e: BaseSyntheticEvent) => {
      updateEventInfo(e, setEventInfo);
    },
    [setEventInfo],
  );

export const useClickAsyncHandler = (setEventInfo: (eventInfo: any) => void) =>
  useCallback(
    (e: BaseSyntheticEvent) => {
      setTimeout(() => {
        updateEventInfo(e, setEventInfo);
      }, 0);
    },
    [setEventInfo],
  );

export const useClickAsyncPersistedHandler = (
  setEventInfo: (eventInfo: any) => void,
) =>
  useCallback(
    (e: BaseSyntheticEvent) => {
      e.persist();

      setTimeout(() => {
        updateEventInfo(e, setEventInfo);
      }, 0);
    },
    [setEventInfo],
  );

export const useChangeTextSyncHandler = (
  setText: (text: string) => void,
  setEventInfo: (eventInfo: any) => void,
) =>
  useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target) setText(e.target.value);
      updateEventInfo(e, setEventInfo);
    },
    [setEventInfo, setText],
  );

export const useChangeTextAsyncHandler = (
  setText: (text: string) => void,
  setEventInfo: (eventInfo: any) => void,
) =>
  useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTimeout(() => {
        if (e.target) setText(e.target.value);
        updateEventInfo(e, setEventInfo);
      }, 0);
    },
    [setEventInfo, setText],
  );

export const useChangeTextAsyncPersistedHandler = (
  setText: (text: string) => void,
  setEventInfo: (eventInfo: any) => void,
) =>
  useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();

      setTimeout(() => {
        if (e.target) setText(e.target.value);
        updateEventInfo(e, setEventInfo);
      }, 0);
    },
    [setEventInfo, setText],
  );

export const handleNotStopPropagationClick = () => {
  console.log(`Not Stop Propagation Click`);
};

export const handleReactStopPropagationClick = (e: BaseSyntheticEvent) => {
  console.log(`Stop Propagation Click`);
  e.stopPropagation();
};

export const handleNativeStopPropagationClick = (
  e: BaseSyntheticEvent<Event>,
) => {
  console.log(`Native Stop Propagation Click`);
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

export const handleReactParentClick = () => console.log(`[React] Parent Click`);

export const handleDomParentClick = () => console.log(`[DOM] Parent Click`);

const handleDomStopPropagationClick = (e: Event) => {
  console.log(`Dom Stop Propagation Click`);
  e.stopPropagation();
};

const handleDocumentClick = () => console.log(`Document Click`);

export const useClickEvents = () =>
  useEffect(() => {
    const domClickElement = document.getElementById('domClick')!;
    const parentClickElement = document.getElementById('parentClick')!;
    domClickElement.addEventListener('click', handleDomStopPropagationClick);
    parentClickElement.addEventListener('click', handleDomParentClick);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      domClickElement.removeEventListener(
        'click',
        handleDomStopPropagationClick,
      );
      parentClickElement.removeEventListener('click', handleDomParentClick);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
