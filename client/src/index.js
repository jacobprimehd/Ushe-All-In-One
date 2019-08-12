import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import withSession from './components/withSession/withSession'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:4444/graphql",
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token')
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({ networkError}) => {
        if(networkError){
            console.log('Network Error', networkError)
        }
    }
})

const Root = ({refetch, session}) => (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" render={()=> <Login refetch={refetch}/>} />
    <Route exact path="/register" render={()=> <Register refetch={refetch}/>} />
    <Route exact path="/Profile" render={()=> <Profile session={session}/>}/>
    <Redirect to="/" />
    </Switch>
    </Router>
)

const RootWithSession = withSession(Root);

ReactDOM.render(
    <ApolloProvider client={client}>
      <RootWithSession />
    </ApolloProvider>,
    document.getElementById("root")
  );
  