import React, { FC, memo, ReactNode } from 'react';
import useStyles from './styles';

export const MyCardComponent: FC<MyCardProps> = ({ content, heading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>{heading}</div>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

const MyCard = memo(MyCardComponent);
MyCard.displayName = 'MyCard';
export default MyCard;

export interface MyCardProps {
  content: ReactNode;
  heading: ReactNode;
}
