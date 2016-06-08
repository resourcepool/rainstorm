import Lokijs from 'lokijs';

const db = new Lokijs('user.json');
let collection = db.addCollection('users');

function getUsers() {
    return collection.data;
}

function getUser(name) {
    return collection.find({'name': {'$eq': name}});
}

function postUser(user) {
    return collection.insert(user);
}

function updateUser(user) {
    return collection.update(user);
}

function removeUser(name) {
    return collection.removeWhere({'name': {'$eq': name}});
}

export default {getUsers, getUser, postUser, updateUser, removeUser};
