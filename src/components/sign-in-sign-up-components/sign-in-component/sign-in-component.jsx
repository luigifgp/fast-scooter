import React from 'react';
import axios from "axios";

const API = "http://localhost:4000/api/users";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = { users: [],
      _id: "",
      email: "",
      password: ""
    };
  }

  async componentDidMount() {
    const res = await axios.get(API);
   this.setState({users: res.data});
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    axios.get(API)
    .then((res) =>{
      console.log(res);
      
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={this.handleSubmit}>
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