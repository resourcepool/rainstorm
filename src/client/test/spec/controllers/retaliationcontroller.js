'use strict';

describe('Controller: RetaliationcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RetaliationcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetaliationcontrollerCtrl = $controller('RetaliationcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RetaliationcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
