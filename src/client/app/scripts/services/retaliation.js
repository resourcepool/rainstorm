'use strict';

/**
 * @ngdoc service
 * @name clientApp.retaliationFactory
 * @description
 * # retaliationFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('RetaliationFactory', function ($http, APIURL) {

    var retaliationFactory = {};

    retaliationFactory.get = function() {
      return $http.get(APIURL + '/retaliations');
    };

    retaliationFactory.getOne = function(id) {
      return $http.get(APIURL + '/retaliations/' + id);
    };

    retaliationFactory.shoot = function(id) {
      return $http.post(APIURL + '/actions/shoot/' + id);
    };

    return retaliationFactory;
  });
