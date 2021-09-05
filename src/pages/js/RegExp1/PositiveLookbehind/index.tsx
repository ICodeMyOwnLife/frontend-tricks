import { FC, memo } from 'react';
import RegExpExperiment from '../RegExpExperiment';

const defaultString = `$199.99 250 $37.50 12
72 €301.25 52.6 33 €0.22
33 £23.10 £4.25
¥2000 ¥250 4000`;

export const PositiveLookbehindComponent: FC = () => (
  <RegExpExperiment
    defaultFlags="g"
    defaultPattern="(?<=[\$€£¥])\d+(?:\.\d+)?"
    defaultString={defaultString}
  />
);

const PositiveLookbehind = memo(PositiveLookbehindComponent);
PositiveLookbehind.displayName = 'PositiveLookbehind';
export default PositiveLookbehind;
