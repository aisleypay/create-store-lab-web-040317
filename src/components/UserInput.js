import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnUsernameChange(event) {
      this.setState({
        username: event.target.value,
      });
    }

    handleOnHometownChange(event) {
      this.setState({
        hometown: event.target.value,
      });
    }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })

    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e) }>
          <label>Username </label>
          <input type="text"
            value={this.state.username}
            name="username"
            onChange={(e) => this.handleOnUsernameChange(e) }/>
          <label>Hometown </label>
          <input type="text"
            value={this.state.hometown}
            name="hometown"
            onChange={(e) => this.handleOnHometownChange(e) }/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
