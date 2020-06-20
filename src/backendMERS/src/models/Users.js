const { Schema, model } = require("mongoose");

const userSchema = new Schema({
     name : {
        type: String
    },
    email : {
       type: String,
       required: true
    },
    password : {
       type: String,
       required: true
    },

});

userSchema.methods.generateHash = function(password){} 
return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

module.exports = model('User', userSchema);
