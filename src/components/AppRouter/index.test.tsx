import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ROUTES from 'helpers/routes';
import AppRouter from '.';

describe(`AppRouter`, () => {
  test(`renders without crashing`, () => {
    const wrapper = shallow(<AppRouter routes={ROUTES} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
