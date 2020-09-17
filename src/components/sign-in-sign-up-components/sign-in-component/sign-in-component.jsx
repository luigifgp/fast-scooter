import React, {Component} from 'react';
import { login } from "../userFunctions/UserFunctions";
import SignUp from "../signup-component/sign-up-component";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
      button: true
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  };

  handleSubmit =  (event) => {

    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    login(user,(res) => {
      if (res) {
        console.log(res.data);
      }
    });  
  };

  handleButton = (props) =>{
    this.props.button(props)
  }
  

  render() {
    const { email, password } = this.state;
    const mq = window.matchMedia("(min-width: 650px)");
    return (
      <div className="form-container sign-in-container">
      {mq.matches ? null:
          <button 
          type="button"
          className="register-button" 
          id="signUp" onClick={this.handleButton}>Register...</button>   }
        <form noValidate onSubmit={this.handleSubmit}>
          <h1 className="h1sign ">Sign in</h1>
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
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <a href="#">Forgot your password?</a>
          <button className="buttonsign" type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;