/* eslint-disable no-restricted-syntax */
import { useCallback, SetStateAction, Dispatch } from 'react';

const CLASS_SELECTED = 'selected';

const selectElements = (elements: Iterable<Element | null>) => {
  document
    .querySelectorAll(`.${CLASS_SELECTED}`)
    .forEach(ele => ele.classList.remove(CLASS_SELECTED));

  for (const ele of elements) {
    if (ele) ele.classList.add(CLASS_SELECTED);
  }
};

export const useGetElementByIdPlayground = ({
  openPlayground,
  setQueryHandler,
}: {
  openPlayground: VoidFunction;
  setQueryHandler: Dispatch<
    SetStateAction<TypedFunction<[HTMLDivElement, string]>>
  >;
}) => {
  const handleQuery = useCallback((_div: HTMLDivElement, queryText: string) => {
    const element = document.getElementById(queryText);
    selectElements([element]);
  }, []);

  return useCallback(() => {
    setQueryHandler(handleQuery);
    openPlayground();
  }, [handleQuery, openPlayground, setQueryHandler]);
};

export const name = '';
