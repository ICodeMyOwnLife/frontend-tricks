import React, { FC, memo, ReactNode } from 'react';
import clsx from 'clsx';
import { Paper, Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import useStyles from './styles';

export const SectionComponent: FC<SectionProps> = ({
  className,
  title,
  titleVariant = 'h6',
  titleClassName,
  children,
}) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.Section, className)} elevation={0}>
      <Typography
        className={clsx(classes.Title, titleClassName)}
        variant={titleVariant}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

const Section = memo(SectionComponent);
Section.displayName = 'Section';
export default Section;

export interface SectionProps {
  children?: ReactNode;
  className?: string;
  title: ReactNode;
  titleClassName?: string;
  titleVariant?: TypographyProps['variant'];
}
