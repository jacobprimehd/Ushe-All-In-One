import React, { Component } from "react";
import {  withRouter } from 'react-router-dom'
import "./login.css";

import Error from '../../components/Error/error'
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";

const initialState = {
  username: "",
  password: ""
}

class Login extends Component {
  state = {...initialState};

  componentDidMount() {
    document.body.classList.add("background-login");
  }

  clearState = () => {
    this.setState({...initialState})
  }

  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(async({data}) => {
      console.log(data);
      localStorage.setItem('token', data.signinUser.token)
      await this.props.refetch();
      this.clearState();
      this.props.history.push('/profile')
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="align-items-center">
          <h1>
            <span className="fa fa-sign-in" /> Login
          </h1>
        </div>
        <Mutation mutation={SIGNIN_USER} variables={{username, password}}>
        {(signinUser, {data,loading,error}) => {

          return (
            <form className="form" onSubmit={event => this.handleSubmit(event,signinUser)}>
            <input type="text" name="username" palceholder="Username" onChange={e => this.setState({ username: e.target.value })} value={username}/>
            <input type="password" name="password" palceholder="Password" onChange={e => this.setState({ password: e.target.value })} value={password}/>
            <button type="submit" disabled={loading || this.validateForm()}>submit</button>
            {error&&<Error error={error}/>}
            </form>
          )
        }}
      </Mutation>  
      </div>
    );
  }
}

export default withRouter(Login);
