import React from 'react';
import ProgressBar from './ProgressBar';
import { shallow } from 'enzyme';

it('renders', () => {
  const completed = 50;
  const limit = 60;
  const wrapper = shallow(<ProgressBar completed={completed} limit={limit} />);
  expect(wrapper.find('span').text()).toEqual('50%');
});

it('renders', () => {
  const completed = 0;
  const limit = 0;
  const wrapper = shallow(<ProgressBar completed={completed} limit={limit} />);
  expect(wrapper.find('span').text()).toEqual('0%');
});