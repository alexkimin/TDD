import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { mount } from 'enzyme';
import Title from './Title';

// emzyme
describe('<Title />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Title title={'test'} name={'alex'} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders title and name', () => {
    const wrapper = mount(<Title title={'test'} name={'alex'} />);
    expect(wrapper.props().title).toBe('test');
    expect(wrapper.props().name).toBe('alex');

    // Dom
    const boldEle = wrapper.find('b');
    expect(boldEle.contains('test')).toBe(true);

    const wrapperComponent = wrapper.find('TitleWrapper');
    expect((wrapperComponent.props() as any).testId).toBe('test');
  });
});

// react-testing-library
describe('<Title />', () => {
  it('matches snapshot', () => {
    const utils = render(<Title title={'test'} name={'alex'} />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', async () => {
    const { getByText } = render(<Title title={'test'} name={'alex'} />);
    await waitForElement(() => getByText('test'));
    getByText('alex');
  });
});

/*
getByLabelText
getByPlaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByRole
getByTestId
*/