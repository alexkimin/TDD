import React from 'react';
import { mount } from 'enzyme';
import HookCounter, { url } from './HookCounter';
import { render, fireEvent, waitForElement, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

jest.useFakeTimers();

describe('<HookCounter />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });
  it('increases', () => {
    const wrapper = mount(<HookCounter />);
    let plusButton = wrapper.findWhere(
      node => node.type() === 'button' && node.text() === '+1'
    );
    plusButton.simulate('click');
    plusButton.simulate('click');

    const number = wrapper.find('h2');

    expect(number.text()).toBe('2');
  });
  it('decreases', () => {
    const wrapper = mount(<HookCounter />);
    let decreaseButton = wrapper.findWhere(
      node => node.type() === 'button' && node.text() === '-1'
    );
    decreaseButton.simulate('click');
    decreaseButton.simulate('click');

    const number = wrapper.find('h2');

    expect(number.text()).toBe('-2');
  });
});

describe('<HookCounter />', () => {
  afterEach(() => {
    mock.reset();
  });

  it('matches snapshot', () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });
  it('increases', () => {
    const { getByText } = render(<HookCounter />);
    const displayNumber = getByText('0');
    const increaseButton = getByText('+1');
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(displayNumber).toHaveTextContent('2');
  });
  it('decreases', () => {
    const { getByText } = render(<HookCounter />);
    const displayNumber = getByText('0');
    const decreasesButton = getByText('-1');
    fireEvent.click(decreasesButton);
    fireEvent.click(decreasesButton);
    expect(displayNumber).toHaveTextContent('-2');
  });

  test('async', async () => {
    const { getByText, getByTestId } = render(<HookCounter />);

    const fetchButton = getByTestId('fetchButton');

    mock.onGet(url).reply(200, { data: { results: [{ name: 'test' }] } });

    fireEvent.click(fetchButton);

    // act(() => {
    //   jest.runAllTimers();
    // });

    await waitForElement(() => getByText('Fetch!'));
    expect(mock.history.get.length).toBe(2);
  });
});
