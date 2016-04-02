'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RetaliationscontrollerCtrl
 * @description
 * # RetaliationscontrollerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RetaliationsCtrl', function ($scope, RetaliationFactory) {
    RetaliationFactory.get().success(function (data) {
      $scope.retaliations = data;
    });
  });
