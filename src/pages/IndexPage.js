import React from 'react';
import './IndexPage.css';
import TextField from 'components/TextField';
import ActionButton from 'components/ActionButton';
import {connect} from 'react-redux';
import actionCreators from 'redux/actionCreators';
import {Link} from 'react-router-dom';

export class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({text: e.target.value});
  }

  handleClick(e) {
    if (this.state.text.length > 0) {
      this.props.setSourceText(this.state.text);
    } else {
      alert('Please input text!');
    }
  }

  render() {
    const linkTo = this.state.text.length > 0 ? '/read' : '';
    return (
      <div className="Index">
        <h1 className="Index-title">
          Phonetic Reading
        </h1>
        <TextField handleInput={this.handleInput} />
        <Link to={linkTo}>
          <ActionButton handleClick={this.handleClick}>
            START
          </ActionButton>
        </Link>
      </div>
    );
  }
}

export default connect(null, actionCreators)(IndexPage);
