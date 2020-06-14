const usersCtrl = {};

const User = require('../models/Users');


usersCtrl.getUsers = async (req, res) => {
   const users =  await User.find();
   res.json(users);


    res.json({message:"User Saved"})};

usersCtrl.createUsers = async (req, res) => {
 
    const {name, email, password} = req.body;
    
   const newuser =  new User({
        name,
        email,
        password
    });

    await newuser.save();

res.json({message:"user saved"})

};

usersCtrl.updateUsers = (req, res) => res.json({ g: "sdfsdf" });

usersCtrl.deleteUsers = async (req, res) =>{
await User.findByIdAndDelete(req.params.id)
res.json( "user deleted" );
}
usersCtrl.getUser = (req, res) => res.json({ a: " sdfsdf" });

module.exports =  usersCtrl;