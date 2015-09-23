import React, { Component, findDOMNode } from 'react';

export default class TestComponent extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
	<h2>Login page</h2>

	<form onSubmit={this.handleSubmit.bind(this)}>
	  <input type="text" ref="username"/>
	  <input type="password" ref="password"/>

	  <input type="submit" value="Login" onClick={this.onSubmit}/>
	</form>
      </div>
    );
  }

  handleSubmit(event) {
    var username = findDOMNode(this.refs.username).value;
    var password = findDOMNode(this.refs.password).value;
    this.props.login(username, password)
  }}
