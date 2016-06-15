export default class Launcher {

    constructor(name, retaliationId, positions, usb) {
        this._name = name;
        this._retaliationId = retaliationId;
        this._positions = positions;
        this._usb = usb;
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

    get usb() {
        return this._usb;
    }

    set usb(usb){
        this._usb = usb;
    }

}
