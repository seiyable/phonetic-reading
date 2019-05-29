import {SET_SOURCE_TEXT} from './actionTypes';

const initialState = {
  sourceText: '',
};

const reducer = (state, action) => {
  console.log('action', action);
  if (typeof state === 'undefined') return initialState;
  switch(action.type) {
    case SET_SOURCE_TEXT: {
      return Object.assign({}, state, {
        sourceText: action.sourceText,
      });
    }
    default: {
      return state;
    }
  }
}

export default reducer;
