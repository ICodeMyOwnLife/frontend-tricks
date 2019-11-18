/* eslint-disable no-eval */
import { useCallback } from 'react';

export const useHandleExecute = ({
  code,
  functionName,
  setResultString,
}: {
  code: string;
  functionName: string;
  setResultString: (resultString: string) => void;
}) =>
  useCallback(() => {
    const statement = `${code}\n;${functionName}()`;
    const result = eval(statement);
    // console.log('statement', statement, 'result', result);
    setResultString(JSON.stringify(result, null, 2));
  }, [code, functionName, setResultString]);
