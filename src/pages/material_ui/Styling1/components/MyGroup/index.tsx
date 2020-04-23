import React, { FC, memo } from 'react';
import { Button } from '@material-ui/core';
import MyCard from '../MyCard';
import useStyles from './styles';

export const MyGroupComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyCard heading="Awesome Card" content="The content of Awesome Card" />
      <Button className={classes.button} color="primary" variant="contained">
        Awesome Button
      </Button>
    </div>
  );
};

const MyGroup = memo(MyGroupComponent);
MyGroup.displayName = 'MyGroup';
export default MyGroup;
