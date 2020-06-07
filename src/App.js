import React from 'react';
import './App.css';
import Header from '../src/components/header-component/header-components';
import Homepage from './components/homepage/homepage-component';
import { Switch, Route, Redirect } from "react-router-dom";
import Facebook from "./components/sign-in-sign-up-components/social-media-sign-in/facebook-sign-in";
import SignInUp from "./components/sign-in-sign-up-components/sign-in.sign-up";
import facebookLogin from 'react-facebook-login';

class App extends React.Component {
constructor(props) {
    super(props);
};
 

    
render() {
 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/shop" />
          <Route  path="/JoinUs" component={SignInUp}></Route>
        </Switch>
      </div>
    );
  }
}


export default App;
 