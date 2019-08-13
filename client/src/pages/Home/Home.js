import React, { Component } from "react";
import Card from "../../components/ordercards/ordercards"
import "./home.css";


class Home extends Component {
  state = {
    allFavs: []
  }
  componentDidMount() {
    document.body.classList.add("background");
  }
  render() {
    return (
      <div>
      <h1 className="rotate">The Ushe</h1>
      <h1>The Ushe</h1>
      <button type="button" class="btn btn-outline-primary"><a href="/login">Login</a></button>
      <button type="button" class="btn btn-outline-primary"><a href="/register">Register</a></button>
      </div>
    );
  }
}

export default Home;
