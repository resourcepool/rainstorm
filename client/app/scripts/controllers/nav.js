'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NavCtrl', function ($location, $scope, Auth) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.logout = function() {
      console.log("coucou");
      Auth.clearCredentials();
      console.log("coucou");
      $location.path('/login');
    };
  });
