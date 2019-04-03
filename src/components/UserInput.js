import React, { Component } from 'react';


class UserInput extends Component {
  state = {
    username: '',
    hometown: ''

  }

  handleOnChange =(e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({ [name]: value })
  }

  onSubmitHandler = (e) => {
    this.props.store.dispatch({ type: 'ADD_USER', user: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitHandler} >
        <input type='text' name='username' onChange={this.handleOnChange} />
        <input type='text' name='hometown' onChange={this.handleOnChange} />
        <input type='submit'/>
        </form>
      </div>
    );
  }
};


export default UserInput;
