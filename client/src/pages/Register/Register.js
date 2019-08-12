import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import "./Register.css";

import Error from '../../components/Error/error'
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries";

const initialState = {
  email: "",
  password: "",
  username: "",
  city: "",
  state: "",
  allergies: "",
  bio: ""
}


class Register extends Component {
  state = {...initialState};

  componentDidMount() {
    document.body.classList.add("background-register");
  }

  clearState = () => {
    this.setState({...initialState})
  }

  handleChange = event => {
    const { name, value } = event.target
    console.log(name, ":", value)
    this.setState({[name]: value})
  }

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async({data}) => {
      console.log(data);
      localStorage.setItem('token', data.signupUser.token)
      await this.props.refetch();
      this.clearState();
      this.props.history.push('/profile')
    });
  };

  validateForm = () => {
    const { email, password, username, city, state, allergies, bio } = this.state;
    const isInvalid = !email || !password || !username || !city || !state || !allergies || !bio
    return isInvalid
  }

  render() {
    const { email, password, username, city, state, allergies, bio } = this.state;
    return(
      <div className="container">
      <div className="align-items-center">
        <h1>
          <span className="fa fa-sign-in" /> Register
        </h1>
      </div>
      <Mutation mutation={SIGNUP_USER} variables={{email,password,username,city,state,allergies,bio}}>
        {(signupUser, {data,loading,error}) => {

          return (
            <form className="form" onSubmit={event => this.handleSubmit(event,signupUser)}>
            <input type="email" name="email" palceholder="Email" onChange={this.handleChange} value={email}/>
            <input type="password" name="password" palceholder="Password" onChange={this.handleChange} value={password}/>
            <input type="text" name="username" palceholder="Username" onChange={this.handleChange} value={username}/>
            <input type="text" name="city" palceholder="City" onChange={this.handleChange} value={city}/>
            <input type="text" name="state" palceholder="State" onChange={this.handleChange} value={state}/>
            <input type="text" name="allergies" palceholder="Allergies" onChange={this.handleChange} value={allergies}/>
            <input type="text" name="bio" palceholder="Bio" onChange={this.handleChange} value={bio}/>
            <button type="submit" disabled={loading || this.validateForm()}>submit</button>
            {error&&<Error error={error}/>}
            </form>
          )
        }}
      </Mutation>

      </div>
    )
  }
}

export default  withRouter(Register) ;
