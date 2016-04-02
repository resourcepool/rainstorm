'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogincontrollerCtrl
 * @description
 * # LogincontrollerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $location, Auth) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logIn = function () {
      $scope.dataLoading = true;
      Auth.tryLogin($scope.username, $scope.password, function (err, data) {
        if (err) {
          $scope.error = err.message || 'Auth failed';
          $scope.dataLoading = false;
        } else {
          Auth.setCredentials($scope.username, $scope.password);
          $location.path('/');
        }
      });
    };
  });
