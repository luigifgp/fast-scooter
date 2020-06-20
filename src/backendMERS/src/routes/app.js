const express = require('express');
const cors = require('cors');
const app =  express();
const passport = require('passport');
//settings

app.set('port',process.env.PORT || 4000);

//middlewares

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

//routes

app.use('/api/users', require('./users'));
app.use("/api/notes", require("./notes"));


module.exports = app;