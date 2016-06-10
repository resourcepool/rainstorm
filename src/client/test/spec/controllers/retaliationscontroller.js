'use strict';

describe('Controller: RetaliationscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RetaliationscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetaliationscontrollerCtrl = $controller('RetaliationscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RetaliationscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
