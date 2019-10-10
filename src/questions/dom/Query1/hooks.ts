/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import {
  useCallback,
  RefObject,
  FormEventHandler,
  Dispatch,
  SetStateAction,
  MouseEvent,
  useEffect,
} from 'react';

const CLASS_SELECTED = 'selected';

const isIterable = <T>(
  o: T | null | Iterable<T | null>,
): o is Iterable<T | null> => !!o && 'length' in o;

const selectElements = (
  elements: Element | null | Iterable<Element | null>,
) => {
  document
    .querySelectorAll(`.${CLASS_SELECTED}`)
    .forEach(ele => ele.classList.remove(CLASS_SELECTED));

  const list = isIterable(elements) ? elements : [elements];
  for (const ele of list) {
    if (ele) ele.classList.add(CLASS_SELECTED);
  }
};

export const queryInfos: QueryInfo[] = [
  {
    name: `getElementById`,
    func: (_container, text) => document.getElementById(text),
  },
  {
    name: `getElementsByName`,
    func: (_container, text) => document.getElementsByName(text),
  },
  {
    name: `getElementsByTagName`,
    func: (container, text) => container.getElementsByTagName(text),
  },
  {
    name: `getElementsByClassName`,
    func: (container, text) => container.getElementsByClassName(text),
  },
];

export const useClickAwayHandler = ({
  anchorRef,
  setDropDownVisible,
}: {
  anchorRef: RefObject<HTMLDivElement>;
  setDropDownVisible: Dispatch<SetStateAction<boolean>>;
}) =>
  useCallback(
    (e: MouseEvent<Document>) => {
      if (anchorRef.current && anchorRef.current.contains(e.target as Node)) {
        return;
      }

      setDropDownVisible(false);
    },
    [anchorRef, setDropDownVisible],
  );

export const useUpdateDisplay = ({
  displayRef,
  html,
}: {
  displayRef: RefObject<HTMLDivElement>;
  html: string;
}) =>
  useCallback(() => {
    if (displayRef.current) displayRef.current.innerHTML = html;
  }, [displayRef, html]);

export const useShowDisplayEffect = ({
  displayRef,
  sampleHtml,
}: {
  displayRef: RefObject<HTMLDivElement>;
  sampleHtml: string;
}) =>
  useEffect(() => {
    if (displayRef.current) displayRef.current.innerHTML = sampleHtml;
  }, [displayRef, sampleHtml]);

export const useRefresh = ({
  queryResult,
  forceUpdate,
}: {
  queryResult: any;
  forceUpdate: VoidFunction;
}) =>
  useCallback(() => {
    selectElements(queryResult);
    forceUpdate();
  }, [forceUpdate, queryResult]);

export const useQueryHandler = ({
  displayRef,
  setQueryResult,
}: {
  displayRef: RefObject<HTMLDivElement>;
  setQueryResult: Dispatch<SetStateAction<any>>;
}) =>
  useCallback(
    (queryText: string, queryFunction: QueryFunction) => {
      const container = displayRef.current;
      if (container) {
        const queryResult = queryFunction(container, queryText);
        selectElements(queryResult);
        setQueryResult(queryResult);
      }
    },
    [displayRef, setQueryResult],
  );

export const useSubmitHandler = ({
  onQuery,
  queryIndex,
  queryText,
}: {
  onQuery: (queryText: string, queryFunc: QueryFunction) => void;
  queryIndex: number;
  queryText: string;
}) =>
  useCallback<FormEventHandler<HTMLFormElement>>(
    e => {
      e.preventDefault();
      const queryFunction =
        queryInfos[queryIndex] && queryInfos[queryIndex].func;
      if (queryFunction) {
        onQuery(queryText, queryFunction);
      }
    },
    [onQuery, queryIndex, queryText],
  );

export type QueryFunction = TypedFunction<[HTMLDivElement, string], any>;

export interface QueryInfo {
  name: string;
  func: QueryFunction;
}
