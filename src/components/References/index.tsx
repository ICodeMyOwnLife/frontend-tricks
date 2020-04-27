import React, { FC, memo } from 'react';
import { Box, Typography } from '@material-ui/core';

export const ReferencesComponent: FC<ReferencesProps> = ({
  className,
  references,
}) => (
  <Box className={className}>
    <Typography variant="h5">References</Typography>
    <ol>
      {references!.map(({ name, url }) => (
        <li key={url}>
          <a href={url}>{name}</a>
        </li>
      ))}
    </ol>
  </Box>
);

const References = memo(ReferencesComponent);
References.displayName = 'References';
export default References;

export interface ReferencesProps {
  className?: string;
  references: ReferenceInfo[];
}

export interface ReferenceInfo {
  name: string;
  url?: string;
}
