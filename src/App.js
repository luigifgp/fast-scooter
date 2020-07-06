import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from '../src/components/header-component/header-components';
import Homepage from './components/homepage/homepage-component';
import SignInUp from "./components/sign-in-sign-up-components/sign-in.sign-up";
import DisplayMap  from './components/maps-component/map-display/display-map';

class App extends Component {
render() {
  console.log(localStorage.usertoken);
    return (
    <Router>
        <Header />
       
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" />
          <div className="con">
          <Route exact path="/JoinUs" component={localStorage.usertoken ? Homepage :  SignInUp}/>
          <Route exact path="/map" component={DisplayMap}/>
         
          </div>
          
      </Router>
    );
  }
}


export default App;
 