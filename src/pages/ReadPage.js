import React from 'react';
import './ReadPage.css';
import WordDisplay from 'components/WordDisplay';
import {connect} from 'react-redux';
import actionCreators from 'redux/actionCreators';
import PropTypes from 'prop-types';

export class ReadPage extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrentWord = this.getCurrentWord.bind(this);
  }

  getCurrentWord() {
    const index = this.props.currentWordIndex;
    const tokenizedText = this.props.tokenizedText;
    if (!tokenizedText || tokenizedText.length <= 0) {
      return '';
    }
    return tokenizedText[index];
  }

  render() {
    return (
      <main className="Read">
        <WordDisplay word={this.getCurrentWord()}/>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  tokenizedText: state.tokenizedText,
  currentWordIndex: state.currentWordIndex,
});

export default connect(mapStateToProps)(ReadPage);
