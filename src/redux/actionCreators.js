import {SET_SOURCE_TEXT} from './actionTypes';

const actionCreators = {
  setSourceText: (text) => ({
    type: SET_SOURCE_TEXT,
    sourceText: text,
  }),
};

export default actionCreators;
