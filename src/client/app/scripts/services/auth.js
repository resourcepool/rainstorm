'use strict';

/**
 * @ngdoc service
 * @name clientApp.Auth
 * @description
 * # Auth
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('Auth', function ($cookieStore, $rootScope, $http, APIURL) {
    // initialize to whatever is in the cookie, if anything
    $http.defaults.headers.Authorization = 'Basic ' + $cookieStore.get('globals');
    var currentUser                             = {};

    // Public API here
    return {
      tryLogin        : function (username, password, cb) {
        var encoded = btoa(username + ':' + password);

        //FIXME : Use a dedicated url
        $http.get(APIURL + '/retaliations', {
            headers: {
              Authorization: 'Basic ' + encoded
            }
          })
          .then(function (data) {
              cb(null, data);
            },
            function (error) {
              cb(error);
            });
      },
      setCredentials: function (username, password) {
        var encoded = btoa(username + ':' + password);

        $rootScope.globals = {
          currentUser: {
            username: username,
            authdata: encoded
          }
        };

        $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
        $cookieStore.put('globals', $rootScope.globals);
      },
      clearCredentials: function () {
        document.execCommand('ClearAuthenticationCache');
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
      }
    };
  });
