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

const RainstormDriver = class {

  constructor(device) {
    if (new.target === RainstormDriver) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }

    this._device = device;

  }

  /**
   * Shoot missiles at actual position
   */
  shoot() {
    throw 'NotImplemented';
  }

  /**
   * Move launcher to position
   * @param x FIXME should it be an angle?
   * @param y FIXME should it be an angle?
   * @param z FIXME should it be a power?
   */
  move(x, y, z) {
    throw 'Empty method, params : ' + x + ' ' + y + ' ' + z;
  }

  /**
   * Reset the missile launcher to the initial position
   */
  reset() {
    throw 'NotImplemented';
  }

  get device() {
    return this._device;
  }
  
  static isSupported(device) {
  }

};

module.exports = RainstormDriver;
