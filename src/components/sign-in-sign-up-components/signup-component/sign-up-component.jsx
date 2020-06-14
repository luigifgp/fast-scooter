import React from 'react';
import './Sign-up.styles.scss';
import axios from 'axios';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = { users: [],
          name: "",
          email: "",
          password: "",
          confirmpassword: ""
        };
    };

    async componentDidMount(){
      await this.getUsers();
      console.log(this.state.users);
    }


getUsers = async() => {
    const res = await axios.get('http://localhost:4000/api/users');
  this.setState({users: res.data})
}


handleSubmit = async event =>{
    

    const { name, email, password, confirmpassword } = this.state;

    const res = axios.post('http://localhost:4000/api/users', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password  
    });

    
this.getUsers();

//fix this the user never won't sign up if don't have the same password
//shearch how to the input will know who id is sign in 
// let then in to the page "l0g 1in"


    if (password !== confirmpassword) {
      alert("passwords don't match");
      return;
    }
 
};

       handleChange = event => {
            const {name, value} = event.target;
            this.setState({[name]: value});
       };

    render() {
        
     const { name, email, password, confirmpassword } = this.state;


        return (
          <div className="form-container sign-up-container sign-up">
            <form action="#" onSubmit={this.handleSubmit}>
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
