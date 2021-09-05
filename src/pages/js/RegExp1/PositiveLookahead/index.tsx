import { FC, memo } from 'react';
import RegExpExperiment from '../RegExpExperiment';

const defaultString = `abc@def.com
support@xyz.net`;

export const PositiveLookaheadComponent: FC = () => (
  <RegExpExperiment
    defaultFlags="g"
    defaultPattern="\w+(?=@\w+\.\w+)"
    defaultString={defaultString}
  />
);

const PositiveLookahead = memo(PositiveLookaheadComponent);
PositiveLookahead.displayName = 'PositiveLookahead';
export default PositiveLookahead;
