'use strict';

describe('Service: APIURL', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var APIURL;
  beforeEach(inject(function (_APIURL_) {
    APIURL = _APIURL_;
  }));

  it('should do something', function () {
    expect(!!APIURL).toBe(true);
  });

});
