'use strict';

/**
 * @ngdoc service
 * @name clientApp.userFactory
 * @description
 * # userFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('UserFactory', function ($http, APIURL) {

    var userFactory = {};

    userFactory.get = function() {
      return $http.get(APIURL + '/users');
    };

    return userFactory;
  });
