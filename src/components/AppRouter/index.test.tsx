import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import appRoutes from 'utils/routes/appRoutes';
import AppRouter from '.';

describe(`AppRouter`, () => {
  test(`renders without crashing`, () => {
    const wrapper = shallow(<AppRouter routes={appRoutes} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
