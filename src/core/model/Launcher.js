export default class Launcher {

  constructor(name, rainstormId, positions, deviceDescriptor) {
    this._name = name;
    this._rainstormId = rainstormId;
    this._positions = positions;
    this._deviceDescriptor = deviceDescriptor;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get rainstormId() {
    return this._rainstormId;
  }

  set rainstormId(rainstormId) {
    this._rainstormId = rainstormId;
  }

  get positions() {
    return this._positions;
  }

  set positions(positions) {
    this._positions = positions;
  }

  get deviceDescriptor() {
    return this._deviceDescriptor;
  }

  set deviceDescriptor(deviceDescriptor) {
    this._deviceDescriptor = deviceDescriptor;
  }

}
