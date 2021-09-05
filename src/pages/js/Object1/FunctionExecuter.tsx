import { FC, memo, useState } from 'react';
import CodeExecutor from 'components/CodeExecutor';

export const FunctionExecuterComponent: FC<FunctionExecuterProps> = ({
  func,
}) => {
  const [code, setCode] = useState(func.toString());
  return (
    <CodeExecutor functionName={func.name} code={code} onCodeChange={setCode} />
  );
};

const FunctionExecuter = memo(FunctionExecuterComponent);
FunctionExecuter.displayName = 'FunctionExecuter';
export default FunctionExecuter;

export interface FunctionExecuterProps {
  func: VoidFunction;
}
