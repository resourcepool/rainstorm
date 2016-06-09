'use strict';

/**
 * Vendor id
 * @type {number}
 */
const VID = 0;

/**
 * Product id
 * @type {number}
 */
const PID = 0;

const RetaliationDriver = class {
  constructor(device) {
    if (new.target === RetaliationDriver) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }

    this._device = device;
  }


  shoot(x, y, z) {
    throw 'Empty method, params : ' + x + ' ' + y + ' ' + z;
  }

  move(x, y, z) {
    throw 'Empty method, params : ' + x + ' ' + y + ' ' + z;
  }

  /**
   * Reset the missile launcher to the initial position
   */
  reset() {
    throw 'Empty';
  }

  get device() {
    return this._device;
  }

  set device(device) {
    this._device = device;
  }
};

module.exports = {
  driver: RetaliationDriver, PID, VID
};
