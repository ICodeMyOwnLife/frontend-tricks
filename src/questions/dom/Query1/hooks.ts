/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import {
  useCallback,
  useRef,
  MutableRefObject,
  useState,
  useEffect,
  RefObject,
  FormEventHandler,
  Dispatch,
  SetStateAction,
  useReducer,
} from 'react';
import useForceUpdate from 'hooks/useForceUpdate';

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
    console.log(ele);
    if (ele) ele.classList.add(CLASS_SELECTED);
  }
};

const sampleHtml = `
<div id="1" class="a" name="A">
  <section id="2" class="b" name="B">
    <nav id="3" class="a" name="C"></nav>
  </section>
  <nav id="4" class="b" name="C">
    <div id="7" class="c" name="C"></div>
  </nav>
  <div id="5" class="d" name="B">
    <section id="6" class="b" name="A">
      <div id="8" class="c" name="C">
        <nav id="9" class="b" name="B"></nav>
      </div>
    </section>
  </div>
</div>`;

export const useInnerHtml = () => {
  const [html, setHtml] = useState(sampleHtml);
  const containerRef = useRef<HTMLDivElement>(null);
  const updateInnerHtml = useCallback(() => {
    if (containerRef.current) containerRef.current.innerHTML = html;
  }, [html]);
  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = sampleHtml;
  }, []);
  return { containerRef, html, setHtml, updateInnerHtml };
};

export const useQueryHandler = () => {
  const handleQueryRef = useRef<QueryFunction>();
  const handleQuery = useCallback<QueryFunction>(
    (div, text) => handleQueryRef.current && handleQueryRef.current(div, text),
    [],
  );
  return { handleQueryRef, handleQuery };
};

const createQueryHook = (query: QueryFunction) => ({
  openPlayground,
  handleQueryRef,
}: {
  openPlayground: VoidFunction;
  handleQueryRef: MutableRefObject<QueryFunction | undefined>;
}) =>
  useCallback(() => {
    handleQueryRef.current = (div: HTMLDivElement, queryText: string) => {
      const element = query(div, queryText);
      selectElements(element);
      return element;
    };
    openPlayground();
  }, [handleQueryRef, openPlayground]);

export const useGetElementById = createQueryHook((_, queryText) =>
  document.getElementById(queryText),
);

export const useGetElementsByName = createQueryHook((_, queryText) =>
  document.getElementsByName(queryText),
);

export const useGetElementsByTagName = createQueryHook((div, queryText) =>
  div.getElementsByTagName(queryText),
);

export const useRefresh = ({ queryResult }: { queryResult: any }) => {
  const forceUpdate = useForceUpdate();

  return useCallback(() => {
    selectElements(queryResult);
    forceUpdate();
  }, [forceUpdate, queryResult]);
};

export const useSubmitHandler = ({
  containerRef,
  onQuery,
  queryText,
  setQueryResult,
}: {
  containerRef: RefObject<HTMLDivElement>;
  onQuery: QueryFunction;
  queryText: string;
  setQueryResult: Dispatch<SetStateAction<any>>;
}) => {
  const [, forceUpdate] = useReducer(() => ({}), {});

  return useCallback<FormEventHandler<HTMLFormElement>>(
    e => {
      e.preventDefault();
      if (containerRef.current) {
        setQueryResult(onQuery(containerRef.current, queryText));
        forceUpdate({});
      }
    },
    [containerRef, onQuery, queryText, setQueryResult],
  );
};
export const name = '';

export type QueryFunction = TypedFunction<[HTMLDivElement, string], any>;
