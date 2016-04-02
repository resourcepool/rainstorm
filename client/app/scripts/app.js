(function() {

'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'views/main.html',
        controller : 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl : 'views/about.html',
        controller : 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl : 'views/login.html',
        controller : 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/users', {
        templateUrl : 'views/users.html',
        controller : 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/retaliations/:id', {
        templateUrl : 'views/retaliation.html',
        controller : 'RetaliationCtrl',
        controllerAs: 'retaliation'
      })
      .when('/retaliations', {
        templateUrl : 'views/retaliations.html',
        controller : 'RetaliationsCtrl',
        controllerAs: 'retaliations'
      })
      .when('/logout', {
        templateUrl : '',
        controller : 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in
      if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
        $location.path('/login');
      }
    });
  });
})();
