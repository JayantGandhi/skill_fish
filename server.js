// server.js - The Main File
// TODO: break up into smaller files

/**
 * Modules
 */
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

var passport       = require('passport');
var flash          = require('connect-flash');

var cookieParser   = require('cookie-parser');
var session        = require('express-session');

/**
 * Configuration
 */

// config files
var db = require('./config/db')

// set the port - Heroku uses process.env.PORT to set it
var port = process.env.PORT || 8080

// connect to our mongoDB database
mongoose.connect(db.url);

// require('./config/passport')(passport); // pass passport for configuration

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// required for passport
app.use(session({ secret: 'watamidoingihavenoidea' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

/**
 * Routes
 */
require('./app/routes')(app);

/**
 * Start the App
 * will be at http://localhost:8080 on dev
 */
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose the app
exports = module.exports = app;