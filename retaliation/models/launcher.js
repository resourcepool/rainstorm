export default class Launcher {

    constructor(name, retaliationId, positions, usb) {
        this.name = name;
        this.retaliationId = retaliationId;
        this.positions = positions;
        this.usb = usb;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get retaliationId() {
        return this.retaliationId;
    }

    set retaliationId(retaliationId) {
        this.retaliationId = retaliationId;
    }

    get positions() {
        return this.positions;
    }

    set positions(positions) {
        this.positions = positions;
    }

    get usb() {
        return this.usb;
    }

    set usb(usb){
        this.usb = usb;
    }

}