'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserscontrollerCtrl
 * @description
 * # UserscontrollerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UsersCtrl', function ($scope, UserFactory) {
    UserFactory.get().success(function (data){
       $scope.users = data;
    });
  });
