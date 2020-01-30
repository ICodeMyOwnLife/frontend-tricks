import React, { FC, memo } from 'react';
import RegExpExperiment from '../RegExpExperiment';

const defaultString = `{
    "id": "12345",
    "name": "ABC",
    "valid": "true",
}`;

export const NamedCaptureGroupComponent: FC = () => (
  <RegExpExperiment
    defaultFlags="g"
    defaultPattern={`"(?<key>\\w+)": "(?<value>\\w+)"`}
    defaultString={defaultString}
  />
);

const NamedCaptureGroup = memo(NamedCaptureGroupComponent);
NamedCaptureGroup.displayName = 'NamedCaptureGroup';
export default NamedCaptureGroup;
