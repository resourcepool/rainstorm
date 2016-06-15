export default class Launcher {

    constructor(name, rainstormId, positions, usb) {
        this._name = name;
        this._rainstormId = rainstormId;
        this._positions = positions;
        this._usb = usb;
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

    get usb() {
        return this._usb;
    }

    set usb(usb){
        this._usb = usb;
    }

}
