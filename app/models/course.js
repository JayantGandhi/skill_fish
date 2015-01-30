/**
 * Course Model file
 */

// require mongoose to talk to mongodb
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define the course Model
var courseSchema = new Schema({
  title: {type: String, default: ''},
  instructor: {
    name: {type: String, default: ''},
    _id:  Schema.Types.ObjectId
  },
  description: {type: String, default: ''},
  location: {type: String, default: ''},
  date: {type: Date}
});

module.exports = mongoose.model('Course', courseSchema);