import React from 'react';
import './WordDisplay.css';
import PropTypes from 'prop-types';

export default class WordDisplay extends React.Component {
  render() {
    return (
      <div className="WordDisplay">
        {this.props.word}
      </div>
    );
  }
}

WordDisplay.propTypes = {
  word: PropTypes.string.isRequired,
};
