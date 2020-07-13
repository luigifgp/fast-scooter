
import axios from "axios";

const API = "http://localhost:5000/";

export const register = (newUser, fun) => {
  return axios
    .post(API + "users/register", {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    })
    .then(function (response) {
      fun(response)
      console.log("Registered");
    });
};

export const login = (user, fun) => {
  return axios
    .post(API + "users/login", {
      email: user.email,
      password: user.password,
    })
    .then(function(response) {
      localStorage.setItem("usertoken", response.data); 
     fun(response);
      console.log(response);
      return response.data;
     
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (user,fun) => {
  return axios
    .get(API + "users/profile", {
    //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(function (response) {
      console.log(response);
       fun(response);
      return response.data;
     
    })
    .catch((err) => {
      console.log(err);
    });
};
