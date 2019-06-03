import React from 'react';
import {shallow} from 'enzyme';
import WordDisplay from './WordDisplay';

describe('WordDisplay', () => {
  it('displays props.word', () => {
    const mockWord = 'apple';
    const wrapper = shallow(
      <WordDisplay word={mockWord}/>
    );
    expect(wrapper.text()).toBe(mockWord);
  });
});
