/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';

const useCurry: UseCurry = (
  fn: GeneralFunction,
  thisArg: any = null,
  ...args: any[]
) =>
  useCallback(
    (...restArgs: any[]) => fn && fn.apply(thisArg, [...args, ...restArgs]),
    [fn, ...args],
  );

export default useCurry;

interface UseCurry {
  <TFirstArg, TRestArgs extends any[], TReturn>(
    func: (firstArg: TFirstArg, ...restArgs: TRestArgs) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
  ): (...args: TRestArgs) => TReturn;
  <TFirstArg, TSecondArg, TRestArgs extends any[], TReturn>(
    func: (
      firstArg: TFirstArg,
      secondArg: TSecondArg,
      ...restArgs: TRestArgs
    ) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
    secondArg: TSecondArg,
  ): (...args: TRestArgs) => TReturn;
  <TFirstArg, TSecondArg, TThirdArg, TRestArgs extends any[], TReturn>(
    func: (
      firstArg: TFirstArg,
      secondArg: TSecondArg,
      thirdArg: TThirdArg,
      ...restArgs: TRestArgs
    ) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
    secondArg: TSecondArg,
    thirdArg: TThirdArg,
  ): (...args: TRestArgs) => TReturn;
}
