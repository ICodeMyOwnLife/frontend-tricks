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
import useForceUpdate from 'hooks/useForceUpdate';
import useMutationObserver from 'hooks/useMutationObserver';

const CLASS_SELECTED = 'selected';

const mutationObserverOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

const isIterable = <T>(
  o: T | null | Iterable<T | null>,
): o is Iterable<T | null> => !!o && 'length' in o;

const selectElements = (
  elements: Element | null | Iterable<Element | null>,
) => {
  document
    .querySelectorAll(`.${CLASS_SELECTED}`)
    .forEach(ele => ele.classList?.remove(CLASS_SELECTED));

  const list = isIterable(elements) ? elements : [elements];
  for (const ele of list) {
    // eslint-disable-next-line no-unused-expressions
    ele?.classList?.add(CLASS_SELECTED);
  }
};

export const queryInfos: QueryInfo[] = [
  {
    example: `1 or 2`,
    func: (_container, text) => document.getElementById(text),
    name: `getElementById`,
  },
  {
    example: `A or B`,
    name: `getElementsByName`,
    func: (_container, text) => document.getElementsByName(text),
  },
  {
    example: `div or section`,
    name: `getElementsByTagName`,
    func: (container, text) => container.getElementsByTagName(text),
  },
  {
    example: `a or b`,
    name: `getElementsByClassName`,
    func: (container, text) => container.getElementsByClassName(text),
  },
  {
    example: `#2 or [name=B]`,
    name: `querySelector`,
    func: (container, text) => container.querySelector(text),
  },
  {
    example: `.b or div>section`,
    name: `querySelectorAll`,
    func: (container, text) => container.querySelectorAll(text),
  },
  {
    example: `.//p[contains(., 'Example')] or .//span[text()="Hello World"]`,
    name: `XPath`,
    func: (container, text) => {
      const nodes: Node[] = [];
      let node: Node | null;
      const result = document.evaluate(
        text,
        container,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      );
      // eslint-disable-next-line no-cond-assign
      while ((node = result.iterateNext())) {
        nodes.push(node);
      }
      return nodes;
    },
  },
  {
    example: ``,
    name: `children`,
    func: container => container.children,
  },
  {
    example: ``,
    name: `childNodes`,
    func: container => container.childNodes,
  },
  {
    example: `div or .b`,
    name: `closest`,
    func: (container, text) =>
      container.querySelector<Element>('#childNode')?.closest(text),
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
      if (anchorRef.current?.contains(e.target as Node)) {
        return;
      }

      setDropDownVisible(false);
    },
    [anchorRef, setDropDownVisible],
  );

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

export const useUpdateDisplay = ({
  displayRef,
  html,
  queryResult,
}: {
  displayRef: RefObject<HTMLDivElement>;
  html: string;
  queryResult: any;
}) =>
  useCallback(() => {
    if (!displayRef.current) return;

    displayRef.current.innerHTML = html;
    selectElements(queryResult);
  }, [displayRef, html, queryResult]);

export const useUpdateResultOnMutated = ({
  displayRef,
}: {
  displayRef: RefObject<Node>;
}) => {
  const [, forceUpdate] = useForceUpdate();
  useMutationObserver(displayRef, forceUpdate, mutationObserverOptions);
};

export type QueryFunction = TypedFunction<[HTMLDivElement, string], any>;

export interface QueryInfo {
  example: string;
  func: QueryFunction;
  name: string;
}
