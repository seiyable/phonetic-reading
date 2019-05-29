import React from 'react';
import './ActionButton.css';
import PropTypes from 'prop-types';

export default class ActionButton extends React.Component {
  render() {
    return (
      <div
        className="ActionButton"
        onClick={this.props.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}

ActionButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
