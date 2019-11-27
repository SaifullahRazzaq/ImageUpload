const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
   Imageurl:String,
   itemname:String,
   itemsize:Number,

});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;