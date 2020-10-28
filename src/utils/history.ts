// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

const history = createBrowserHistory<any>({
  basename: process.env.PUBLIC_URL,
});

export default history;
