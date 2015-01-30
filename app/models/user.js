/**
 * User Model file
 */

// require mongoose to talk to mongodb
var mongoose = require('mongoose');

// bcrypt for password hashing
var bcrypt   = require('bcrypt-nodejs');

// define the course Model
var userSchema = mongoose.Schema ({
  username: {type: String, default: ''},
  first_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  show_name: {type: Boolean, default: false},
  courses_followed: [
    {
      title: {type: String, default: ''},
      date: {type: Date},
      location: {type: String, default: ''},
      _id:  Schema.Types.ObjectId
    }
  ],
  local          : {
    email        : String,
    password     : String,
  },
  facebook       : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  },
  twitter        : {
    id           : String,
    token        : String,
    displayName  : String,
    username     : String
  },
  google         : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);