import React from 'react';


class SignUp extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return (
          <div className="form-container sign-up-container">
            <form action="#">
              <h1 className="h1sign">Create Account</h1>
              <div className="social-container">
                <a className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="spansign">
                or use your email for registration
              </span>
              <input
                type="text"
                placeholder="Name"
              />
              <input
                type="email"
                placeholder="Email"
                
              />
              <input
                type="password"
                placeholder="Password"
                
              />
              <button className="buttonsign">Sign Up</button>
            </form>
          </div>
        );
    }
}

export default SignUp;
