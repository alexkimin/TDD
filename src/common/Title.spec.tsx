import React from 'react';
import { mount } from 'enzyme';
import Title from './Title';

describe('<Title />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Title title={'test'} name={'alex'} />);
    expect(wrapper).toMatchSnapshot();
  });
});