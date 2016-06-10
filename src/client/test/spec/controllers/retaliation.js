'use strict';

describe('Controller: RetaliationCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RetaliationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetaliationCtrl = $controller('RetaliationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RetaliationCtrl.awesomeThings.length).toBe(3);
  });
});
