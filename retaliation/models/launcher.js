export default class Launcher {

    constructor(name, retaliationId, positions, usb) {
        this.name = name;
        this.retaliationId = retaliationId;
        this.positions = positions;
        this.usb = usb;
    }

    getName() {
        return this.name;
    }

    getRetaliationId() {
        return this.retaliationId;
    }

    getPositions() {
        return this.positions;
    }

    getUsb() {
        return this.usb;
    }

}