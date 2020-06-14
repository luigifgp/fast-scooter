import React from "react";
import './sign-in.sign-up.styles.scss';
import SignUp from './signup-component/sign-up-component';
import SignIn from './sign-in-component/sign-in-component';


class SignInUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isToggleOn: true,
      isLoggedIn: false,
      
    };

this.handleClick = this.handleClick.bind(this);

  }


handleClick() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
    
  } ));
}

 
  render() {
  
    
 return (
   <div className="sign">
     <div
       className={
         -this.state.isToggleOn ? "container" : "container right-panel-active "
       }
       id="container"
     >

     <SignUp/>
     <SignIn/>
     
       <div className="overlay-container">
         <div className="overlay">
           <div className="overlay-panel overlay-left">
             <h1 className="h1sign">Welcome Back!</h1>
             <p className="psign">
               To keep connected with us please login with your personal info
             </p>
             <button
               className="ghost buttonsign"
               id="signIn"
               onClick={this.handleClick}
             >
               Sign In
             </button>
           </div>
           <div className="overlay-panel overlay-right">
             <h1 className="">Hello, Friend!</h1>
             <p className="psign">
               Enter your personal details and start journey with us
             </p>
             <button
               className="ghost buttonsign"
               id="signUp"
               onClick={this.handleClick}
             >
               Sign Up
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
}

export default SignInUp;