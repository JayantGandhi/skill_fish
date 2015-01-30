/**
 * User Model file
 */

// require mongoose to talk to mongodb
var mongoose = require('mongoose');

// define the course Model
module.exports = mongoose.model('Course', {
  username: {type: String, default: ''},
  first_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  email: {type: String, default: ''},
  show_name: {type: Boolean, default: false},
  courses_followed: [
    {
      title: {type: String, default: ''},
      date: {type: Date},
      location: {type: String, default: ''},
      _id: {type: ObjectId}
    }
  ],
});