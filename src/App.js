import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from '../src/components/header-component/header-compnt';
import Homepage from './components/homepage/homepage-component';
import SignInUp from "./components/sign-in-sign-up-components/sign-in.sign-up";
import Maps from './components/maps-component/Maps';

class App extends Component {
render() {
    return (
      <Router>
        <Header />

        <Route exact path="/" component={Homepage} />
        <Route path="/shop" />
        <div className="con">
          <Route
            exact
            path="/JoinUs"
            component={localStorage.usertoken ? Homepage : SignInUp}
          />
          <Route exact path="/map" component={Maps} />
        </div>
      </Router>
    );
  }
}


export default App;
 