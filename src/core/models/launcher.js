export default class Launcher {

    constructor(name, retaliationId, positions, deviceDescriptor) {
        this._name = name;
        this._retaliationId = retaliationId;
        this._positions = positions;
        this._deviceDescriptor = deviceDescriptor;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get retaliationId() {
        return this._retaliationId;
    }

    set retaliationId(retaliationId) {
        this._retaliationId = retaliationId;
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

    set deviceDescriptor(deviceDescriptor){
        this._deviceDescriptor = deviceDescriptor;
    }

}
