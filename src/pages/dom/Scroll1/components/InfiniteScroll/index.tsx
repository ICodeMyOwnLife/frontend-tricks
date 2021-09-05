import { FC, memo, useReducer, Reducer, useRef } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import { useInfiniteScroll, usePromiseCallback } from 'cb-hooks';
import { Product, load } from 'services/productService';
import FontIcon from 'components/FontIcon';
import useStyles from './styles';

const reducer: Reducer<Product[], ProductAction> = (
  state,
  { type, payload },
) => {
  switch (type) {
    case 'loadDone':
      return [...state, ...payload];

    default:
      return state;
  }
};

export const InfiniteScrollComponent: FC = () => {
  const classes = useStyles();
  const [products, dispatch] = useReducer(reducer, []);
  const [{ loading }, loadMore] = usePromiseCallback(() =>
    load(20).then(moreProducts =>
      dispatch({ type: 'loadDone', payload: moreProducts }),
    ),
  );
  const targetRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(targetRef, loadMore, loading);

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {products.map(({ id, name, description }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>
                <FontIcon type="image" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={id}
              secondary={
                <>
                  <Typography
                    className={classes.listItemText}
                    color="textPrimary"
                    component="span"
                    variant="body2"
                  >
                    {name}
                  </Typography>{' '}
                  - {description}
                </>
              }
            />
          </ListItem>
        ))}
        <div className={classes.loadMore} ref={targetRef}>
          {loading && (
            <div>
              <Typography>Loading more</Typography>
              <LinearProgress className={classes.progress} />
            </div>
          )}
        </div>
      </List>
    </div>
  );
};

const InfiniteScroll = memo(InfiniteScrollComponent);
InfiniteScroll.displayName = 'InfiniteScroll';
export default InfiniteScroll;

type ProductAction = { type: 'loadDone'; payload: Product[] };
