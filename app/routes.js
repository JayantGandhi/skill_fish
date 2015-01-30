/**
 * app/routes.js
 * This is where our routes will go on the backend
 * Angular will handle the front end so we will just defer to it
 */

// grab the course model
var Course = require('./models/course');

module.exports = function(app) {
    /**
     * server routes - handles api-routes
     */

    // course index
    app.get('/api/courses', function(req, res) {
        // use mongoose to get all courses in the database
        Course.find(function(err, courses) {
            // if there is an error, send the error
            if (err){
                res.send(err);
            }

            // no error so send the courses in JSON
            res.json(courses);
        });
    });

    // course new
    app.post('api/course/new', function(req, res) {
        var course = new Course();

        course.title = req.body.title;

        course.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Course created!' });
        });
    });

    // course

    /**
     * frontend routes - angular will handle this so only load ./public/views/index.html
     */
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};
