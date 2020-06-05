import React from 'react';
import './App.css';
import Header from '../src/components/header-component/header-components';
import Homepage from './components/homepage/homepage-component';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginModal from "react-login-modal-sm";
import {facebookConfig, googleConfig} from "./modal-login/social-config";
import SignInUp from './components/sign-in-sign-up-components/sign-in.sign-up';

class App extends React.Component {
constructor(props) {
    super(props);
};
 

    
render() {
 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route path="/shop" />
          <Route exact path="/checkout" />
          <Route exact path="/JoinUs">
          </Route>
        </Switch>
        <Homepage />
       
      </div>
    );
  }
}


export default App;
 