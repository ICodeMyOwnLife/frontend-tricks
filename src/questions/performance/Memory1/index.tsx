import React, { FC, memo, useState, useCallback } from 'react';
import QuestionPage from 'components/QuestionPage';
import NumberInput from 'components/NumberInput';
import Button from 'components/Button';
import backendService from 'services/backendService';
import questions from './questions';
import classes from './styles.module.scss';

export const Performance1Component: FC = () => {
  const [length, setLength] = useState(1000000);
  const [browserMemory, setBrowserMemory] = useState<MemoryInfo>();
  const [serverMemory, setServerMemory] = useState<NodeJS.MemoryUsage>();

  const getBrowserMemory = useCallback(() => {
    setBrowserMemory(undefined);

    setTimeout(() => {
      const array = Array.from({ length }, () => length);
      array.reverse();
      const {
        totalJSHeapSize,
        jsHeapSizeLimit,
        usedJSHeapSize,
      } = performance.memory;

      setBrowserMemory({ totalJSHeapSize, jsHeapSizeLimit, usedJSHeapSize });
    }, 0);
  }, [length]);

  const getServerMemory = useCallback(async () => {
    setServerMemory(undefined);

    const {
      data: { memoryUsage },
    } = await backendService.get<{
      memoryUsage: NodeJS.MemoryUsage;
    }>('memory-usage', { params: { length } });

    setServerMemory(memoryUsage);
  }, [length]);

  return (
    <QuestionPage title="Performance 1" questions={questions}>
      <div>
        <NumberInput label="Length:" value={length} onChange={setLength} />
      </div>

      <table className={classes.MemoryTable}>
        <tbody>
          <tr>
            <td>
              <Button className="mr-2" onClick={getBrowserMemory}>
                Get Browser Memory Usage
              </Button>
            </td>
            <td>
              <Button className="mr-2" onClick={getServerMemory}>
                Get Server Memory Usage
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={classes.Result}>
                {browserMemory && (
                  <pre>{JSON.stringify(browserMemory, null, 2)}</pre>
                )}
              </div>
            </td>

            <td>
              <div className={classes.Result}>
                {serverMemory && (
                  <pre>{JSON.stringify(serverMemory, null, 2)}</pre>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </QuestionPage>
  );
};

const Performance1 = memo(Performance1Component);
Performance1.displayName = 'Performance1';
export default Performance1;
