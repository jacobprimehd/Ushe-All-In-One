import React, { Component } from "react";
import Card from "../../components/ordercards/ordercards"
import "./home.css";

import { Query } from 'react-apollo'
import { GET_ALL_FAVS } from "../../queries"

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
      <Card/>
      <button type="button" class="btn btn-outline-primary"><a href="/login">Login</a></button>
      <button type="button" class="btn btn-outline-primary"><a href="/register">Register</a></button>
      <Query query={GET_ALL_FAVS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <div>Error</div>;

        return data.getAllFavs.map(fav =>{
          return <><Card 
          place={fav.place}
          username={fav.username}
          order={fav.order}
          /><br/></>
        });
      }}
    </Query>
      </div>
    );
  }
}

export default Home;
