// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            title: ' - Home'
        })

        // nerds page that will use the CourseController
        .when('/courses', {
            templateUrl: 'views/course.html',
            controller: 'CourseController',
            title: ' - Course List'
        });

    $locationProvider.html5Mode(true);

}]);