import React from 'react';
import {mount} from 'enzyme';
import {Index} from './Index';
import TextField from 'components/TextField';
import ActionButton from 'components/ActionButton';

describe('Index', () => {
  it('renders TextField', () => {
    const wrapper = mount(<Index/>);
    const textField = wrapper.find(TextField);
    expect(textField).toBeTruthy();
  });

  it('renders ActionButton', () => {
    const wrapper = mount(<Index/>);
    const actionButton = wrapper.find(ActionButton);
    expect(actionButton).toBeTruthy();
  });

  it('updates state.text when TextField gets a new input', () => {
    const wrapper = mount(<Index/>);
    const textField = wrapper.find(TextField);
    const mockText = 'apple';
    const mockEvent = {target: {value: mockText}};
    textField.simulate('input', mockEvent);
    expect(wrapper.state().text).toBe(mockText);
  });

  it('dispatches SET_SOURCE_TEXT action when ActionButton is clicked', () => {
    const wrapper = mount(<Index/>);
    const mockText = 'apple';
    wrapper.setState({text: mockText})
    wrapper.setProps({setSourceText: jest.fn()});
    const actionButton = wrapper.find(ActionButton);
    actionButton.simulate('click');
    expect(wrapper.props().setSourceText).toHaveBeenCalledWith(mockText);
  });
});
