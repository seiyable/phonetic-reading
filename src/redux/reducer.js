import {SET_SOURCE_TEXT} from './actionTypes';
import natural from 'natural';
const tokenizer = new natural.TreebankWordTokenizer();

const initialState = {
  sourceText: '',
  tokenizedText: [],
  totalWordCount: 0,
  currentWordIndex: 0,
};

const reducer = (state, action) => {
  console.log('action', action);
  if (typeof state === 'undefined') return initialState;
  switch(action.type) {
    case SET_SOURCE_TEXT: {
      const tokenizedText = tokenizer.tokenize(action.sourceText);
      console.log('tokenized', tokenizedText);
      return Object.assign({}, state, {
        sourceText: action.sourceText,
        tokenizedText: tokenizedText,
        totalWordCount: tokenizedText.length,
      });
    }
    default: {
      return state;
    }
  }
}

export default reducer;
