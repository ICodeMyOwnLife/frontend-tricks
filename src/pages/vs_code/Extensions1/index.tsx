import React, { FC, memo } from 'react';
import PageLayout from 'components/PageLayout';
import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import Section from 'components/Section';
import References from 'components/References';
import { extensions, references } from './utils';

export const Extensions1Component: FC = () => (
  <PageLayout title="Extensions 1">
    <Section title="Extensions">
      <List dense>
        {extensions.map(({ name, author }) => (
          <ListItem key={`${name}-${author}`}>
            <ListItemText primary={name} secondary={author} />
          </ListItem>
        ))}
      </List>
      <References references={references} />
    </Section>

    <Section title="Fonts">
      <Link href="https://github.com/tonsky/FiraCode">Fira Code</Link>
    </Section>
  </PageLayout>
);

const Extensions1 = memo(Extensions1Component);
Extensions1.displayName = 'Extensions1';
export default Extensions1;
