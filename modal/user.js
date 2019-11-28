const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name:String,
  price:Number,
  productImage:String

});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;