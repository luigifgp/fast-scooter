const usersCtrl = {};

const User = require('../models/Users');


usersCtrl.getUsers = async (req, res) => {
   const users =  await User.find();
   res.json(users);


    res.json({message:"User Saved"})};

usersCtrl.createUsers = async (req, res) => {
 
    const {name, email, password} = req.body;
    
   const newUser =  new User({
        name,
        email,
        password
    });

    await newUser.save();

res.json({message:"user saved"})

};

usersCtrl.updateUsers = async (req, res) =>{ 
    const {name, email, password} = req.body;

    await User.findByIdAndUpdate(req.params.id,{
        name,
        email,
        password
    })

    res.json("User Updated");
}

usersCtrl.deleteUsers = async (req, res) =>{
await User.findByIdAndDelete(req.params.id)
res.json( "user deleted" );
}
usersCtrl.getUser = async (req, res) => {

    const user = await User.findById(req.params.id);
    res.json(user);
};

module.exports =  usersCtrl;