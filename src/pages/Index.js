import React from 'react';
import './Index.css';
import ActionButton from '../components/ActionButton';

export default () => {
  const handleClick = (e) => {
    console.log('clicked');
  };

  return (
    <div className="Index">
      <h1 className="Index-title">
        Phonetic Reading
      </h1>
      <textarea
        className="Index-textarea"
        placeholder="Paste your text here"
        rows="8"
      />
      <ActionButton handleClick={handleClick}>
        START
      </ActionButton>
    </div>
  );
}
