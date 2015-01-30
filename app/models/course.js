/**
 * Course Model file
 */

// require mongoose to talk to mongodb
var mongoose = require('mongoose');

// define the course Model
module.exports = mongoose.model('Course', {
  title: {type: String, default: ''},
  instructor: {
    name: {type: String, default: ''},
    _id: {type: ObjectId}
  },
  description: {type: String, default: ''},
  location: {type: String, default: ''},
  date: {type: Date}
});