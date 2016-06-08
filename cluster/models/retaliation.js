export default class Retaliation {

    constructor(retaliationId, users, launchers) {
        this.retaliationId = retaliationId;
        this.users = users || [];
        this.launchers = launchers || [];
    }

    getUsers() {
        return this.users;
    }

    getRetaliationId() {
        return this.retaliationId;
    }

    getLaunchers() {
        return this.launchers;
    }

}