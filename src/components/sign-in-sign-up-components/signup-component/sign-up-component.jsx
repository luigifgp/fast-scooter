import React, {Component} from 'react';
import './Sign-up.styles.scss';
import { register } from '../userFunctions/UserFunctions';


class SignUp extends Component{
    constructor(){
        super()
        this.state = {
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
          errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


handleChange = event => {
            const {name, value} = event.target;
            this.setState({[name]: value});
       };


handleSubmit = event =>{

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    if (this.state.password !== this.state.confirmpassword){
      alert("passswords not match");
      return;
    }
    try{
 register(newUser, res => {
      console.log(res);
    });
}
catch(error){
  console.log(error);
};
};

    render() {
        
     const { name, email, password, confirmpassword } = this.state;


        return (
          <div className="form-container sign-up-container sign-up">
            <form noValidate onSubmit={this.handleSubmit}>
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
                placeholder="name"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={email}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                required
              />
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirm your password"
                onChange={this.handleChange}
                value={confirmpassword}
                required
              />
              <button className="buttonsign" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        );
    }
}

export default SignUp;
