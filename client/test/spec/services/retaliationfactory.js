'use strict';

describe('Service: retaliationFactory', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var retaliationFactory;
  beforeEach(inject(function (_retaliationFactory_) {
    retaliationFactory = _retaliationFactory_;
  }));

  it('should do something', function () {
    expect(!!retaliationFactory).toBe(true);
  });

});
