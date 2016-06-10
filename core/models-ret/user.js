export default class User {

    constructor(name, positions, retaliationId) {
        this.name = name;
        this.positions = positions;
        this.retaliationId = retaliationId;
    }

    getName() {
        return this.name;
    }

    getPositions() {
        return this.positions;
    }

    getRetaliationId() {
        return this.retaliationId;
    }
    
}