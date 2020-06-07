import React, {Component} from 'react';
import  facebookLogin from 'react-facebook-login';


 export default class Facebook extends React.Component {
    state = {
        isLoggedIn: false,
        userID:'',
        name: '',
        email: ''
    }

    resposeFacebook = response => {
        console.log(response);
    }

    ComponentClicked = () => console.log("Clicked");


render(){

    let fbContent;

if(this.state.isLoggedIn){
       fbContent = null; 
    }else {
        fbContent = (<facebookLogin
            appId="580539212596709"
            autoLoad={true}
            fields="name.email"
            onClick={this.ComponentClicked}
            callback={this.resposeFacebook}/>
            );
    }
     

    return <div>{fbContent}</div>;
    

   }
}