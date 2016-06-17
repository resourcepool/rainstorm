export default class User {

  constructor(name, positions) {
    this.name = name;
    this.positions = positions;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get positions() {
    return this.positions;
  }

  set positions(positions) {
    this.positions = positions;
  }

}
