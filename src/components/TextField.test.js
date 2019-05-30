import React from 'react';
import {shallow} from 'enzyme';
import TextField from './TextField';

describe('TextField', () => {
  it('calls input handler on input', () => {
    const handleInput = jest.fn();
    const wrapper = shallow(
      <TextField handleInput={handleInput} />
    );
    const mockText = 'apple';
    const mockEvent = {target: {value: mockText}};
    wrapper.simulate('input', mockEvent);
    expect(handleInput).toHaveBeenCalledWith(mockEvent);
  });
});
