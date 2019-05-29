import React from 'react';
import {shallow} from 'enzyme';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('calls click handler on mouse click', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(
      <ActionButton handleClick={handleClick}/>
    );
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
