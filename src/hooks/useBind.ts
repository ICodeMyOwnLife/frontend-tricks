/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';

const useBind: UseBind = (
  func: (...args: any[]) => any,
  thisArg: any,
  ...firstArgs: any[]
) =>
  useMemo(() => func.bind(thisArg, ...firstArgs), [
    func,
    thisArg,
    ...firstArgs,
  ]);

export default useBind;

export interface UseBind {
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
