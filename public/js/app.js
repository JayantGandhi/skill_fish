/**
 * App.js
 * This is where the angular magic happens
 */

var skillFish = angular.module('skillFish', [
  'ngRoute',
  'appRoutes',
  'MainCtrl',
  'CourseCtrl',
  'CourseService'
]);

skillFish.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);