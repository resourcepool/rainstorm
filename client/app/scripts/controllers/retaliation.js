'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RetaliationCtrl
 * @description
 * # RetaliationCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('RetaliationCtrl', function ($scope, $routeParams, RetaliationFactory) {
        RetaliationFactory.getOne($routeParams.id).success(function (data) {
            console.log(data);
            $scope.retaliation = data;
        });

        $scope.shoot = function (dev) {
            $scope.shot = false;
            RetaliationFactory.shoot(dev._id).success(function (data) {
                dev.shot = true;
            }).error(function (err) {
                console.log(err);
            });
        };
    });
