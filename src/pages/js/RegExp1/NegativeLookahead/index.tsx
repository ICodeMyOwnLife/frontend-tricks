import { FC, memo } from 'react';
import RegExpExperiment from '../RegExpExperiment';

const defaultString = `200A 723B 920C 736D
624C 023A 239D 092B
734D 762B 255A 824C`;

export const NegativeLookaheadComponent: FC = () => (
  <RegExpExperiment
    defaultFlags="g"
    defaultPattern="\d{3}(?!B|C)"
    defaultString={defaultString}
  />
);

const NegativeLookahead = memo(NegativeLookaheadComponent);
NegativeLookahead.displayName = 'NegativeLookahead';
export default NegativeLookahead;
