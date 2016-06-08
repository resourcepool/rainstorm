export default class Launcher {

    constructor(name, retaliationId, positions) {
        this.name = name;
        this.retaliationId = retaliationId;
        this.positions = positions;
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

}