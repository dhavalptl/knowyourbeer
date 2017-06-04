import React, { Component } from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import Beers from './beers';
import Navigation from './navigation';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import firebase from './firebase';
import Spinner from 'react-spinner';

const auth = firebase.auth();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        user: user,
      });
    });
  }
  onLogout = () => {
    firebase.auth().signOut();
  }
  render() {
    const { user } = this.state;
    const loginRedirect = {pathname: '/login'};
    const homeRedirect = {pathname: '/'};
    return (
       <BrowserRouter>
        <div>
          <Navigation user={user} logout={this.onLogout}/>
          {user !== undefined ?  <div className="container">
            <Switch>
              <Route exact={true} path="/" render={
                () => (user ? <Beers user={user}/> : <Redirect to={loginRedirect}/>)
              }/>
              <Route exact={true} path="/login" render={
                () => (user ? <Redirect to={homeRedirect}/> : <Login />)
              }/>
              <Route exact={true} path="/register" component={Register}/>
            </Switch>
          </div> : <Spinner />}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
