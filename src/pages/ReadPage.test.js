import React from 'react';
import {shallow, mount} from 'enzyme';
import {ReadPage} from 'pages/ReadPage';
import WordDisplay from 'components/WordDisplay';

describe('ReadPage', () => {
  it('renders WordDisplay', () => {
    const wrapper = shallow(<ReadPage/>);
    expect(wrapper.exists(WordDisplay)).toBeTruthy();
  });
});

describe('getCurrentWord', () => {
  it('returns a word from props.tokenizedText array with an index', () => {
    const wrapper = shallow(<ReadPage/>);
    const mockTokenizedText = ['apple', 'orange', 'grape'];
    const mockIndex = 2;
    wrapper.setProps({
      tokenizedText: mockTokenizedText,
      currentWordIndex: mockIndex,
    });
    const currentWord = wrapper.instance().getCurrentWord();
    expect(currentWord).toBe(mockTokenizedText[mockIndex]);
  });

  it('returns an empty string if tokenizedText does not exist', () => {
    const wrapper = shallow(<ReadPage/>);
    const mockTokenizedText = undefined;
    const mockIndex = 2;
    wrapper.setProps({
      tokenizedText: mockTokenizedText,
      currentWordIndex: mockIndex,
    });
    const currentWord = wrapper.instance().getCurrentWord();
    expect(currentWord).toBe('');
  });
});
