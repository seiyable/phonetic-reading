import React from 'react';
import './TextField.css';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {
  render() {
    return (
      <textarea
        className="TextField"
        placeholder="Paste your text here"
        rows="8"
        onInput={this.props.handleInput}
      />
    );
  }
}

TextField.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
