import { FC, memo } from 'react';
import RegExpExperiment from '../RegExpExperiment';

const defaultString = `0432 0x2ab50c 235
0b101101 520 155`;

export const NegativeLookbehindComponent: FC = () => (
  <RegExpExperiment
    defaultFlags="g"
    defaultPattern="(?<!O[xb]?)\d+"
    defaultString={defaultString}
  />
);

const NegativeLookbehind = memo(NegativeLookbehindComponent);
NegativeLookbehind.displayName = 'NegativeLookbehind';
export default NegativeLookbehind;
