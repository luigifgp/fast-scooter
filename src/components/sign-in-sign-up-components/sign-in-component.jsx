import React from 'react';


class SignIn extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
         
       <div className="form-container sign-in-container">
         <form action="#">
           <h1 className="h1sign">Sign in</h1>
           <div className="social-container">
             <a class="social">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a className="social">
               <i className="fab fa-google-plus-g"></i>
             </a>
             <a className="social">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
           <span className="spansign">or use your account</span>
           <input
             type="email"
             placeholder="Email"
             onChange={handleChange}
           />
           <input
             type="password"
             placeholder="Password"
             onChange={handleChange}
            
           />
           <a href="#">Forgot your password?</a>
           <button className="buttonsign">Sign In </button>
         </form>
       </div>
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
        );
    }
}

export default SignIn;