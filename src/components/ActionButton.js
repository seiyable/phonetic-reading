import React from 'react';
import './ActionButton.css';

export default (props) => {
  return (
    <div
      className="ActionButton"
      onClick={props.handleClick}
    >
      {props.children}
    </div>
  );
}
