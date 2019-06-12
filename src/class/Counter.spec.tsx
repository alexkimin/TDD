import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  // state
  it('has initial number', () => {
    const wrapper: any = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });
  it('increases', () => {
    const wrapper: any = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });
  it('decreases', () => {
    const wrapper: any = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });

  // events
  it('calls handleIncrease', () => {
    const wrapper: any = shallow(<Counter />);
    const plusButton = wrapper.findWhere(
      (node: any) => node.type() === 'button' && node.text() === '+1'
    );
    plusButton.simulate('click');
    expect(wrapper.state().number).toBe(1);
  });
  it('calls handleDecrease', () => {
    const wrapper: any = shallow(<Counter />);
    const minusButton = wrapper.findWhere(
      (node: any) => node.type() === 'button' && node.text() === '-1'
    );
    minusButton.simulate('click');
    const number = wrapper.find('h2');
    expect(number.text()).toBe('-1');
  });
});

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });

  it('has initial number', () => {
    const { getByText } = render(<Counter />);
    getByText('0');
  });
  it('increases', () => {
    const { getByText } = render(<Counter />);
    const stateNumber = getByText('0');
    const increaseButton = getByText('+1');

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    expect(stateNumber).toHaveTextContent('2');
    expect(stateNumber.textContent).toBe('2');
  });
  it('decreases', () => {
    const { getByText } = render(<Counter />);
    const stateNumber = getByText('0');
    const decreaseButton = getByText('-1');

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);

    expect(stateNumber).toHaveTextContent('-2');
    expect(stateNumber.textContent).toBe('-2');
  });
});