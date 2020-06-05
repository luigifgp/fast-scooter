import React, { Component } from "react";
import ReactModalLogin from "react-modal-login";
import { facebookConfig, googleConfig } from "../../modal-login/social-config";
import LoginModal from "react-login-modal-sm";
import './sign-in.sign-up.styles.scss';

class SignInUp extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleLoginWithFacebook = () => {
   
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
    console.log("Login with Facebook...");
  };

  handleSignupByEmail = (email, username, password) => {
    // Do something when 'Signup by email' is clicked
    console.log("Sign up by email...");
  };

  render() {
    const customUsernameRegex = /^[a-zA-Z0-9_]{5,}/;

    return (
      <div className="App">

        <LoginModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          onLoginFacebook={this.handleLoginWithFacebook}
          onSignupEmail={this.handleSignupByEmail}
          usernameRegex={customUsernameRegex}
        />

        <p className= "join-us"
          onClick={this.toggleModal}
        >
          Join Us
        </p>
      </div>
    );
  }
}


export default SignInUp;