import React from 'react';
import './Index.css';
import ActionButton from '../components/ActionButton';
import {connect} from 'react-redux';
import actionCreators from '../redux/actionCreators';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const handleInput = (e) => {
      this.setState({text: e.target.value});
    };

    const handleClick = (e) => {
      this.props.setSourceText(this.state.text);
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
          onInput={handleInput}
        />
        <ActionButton handleClick={handleClick}>
          START
        </ActionButton>
      </div>
    );
  }
}

export default connect(null, actionCreators)(Index);
