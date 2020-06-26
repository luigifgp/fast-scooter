import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from '../src/components/header-component/header-components';
import Homepage from './components/homepage/homepage-component';
import SignInUp from "./components/sign-in-sign-up-components/sign-in.sign-up";


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
         
          </div>
          
      </Router>
    );
  }
}


export default App;
 