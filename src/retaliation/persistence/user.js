'use strict'; 
import fileAsync from 'lowdb/lib/file-async';
import low from 'lowdb';
let userDir = './db/users.json';
let collection = 'users';

let db = low(userDir, {storage: fileAsync});

function getUsers() {
    return db.get(collection).value();
}

function getUser(name) {
    return db.get(collection).filter({name: name});
}

function postUser(user) {
    db.push(user);
    db.get(collection).filter({name: user.getName()});
    return user;
}

function updateUser(user) {
    db.get(collection).find({name: user.getName()}).assign(user).value();
    return db.get(collection).filter({name: user.getName()});
}

function removeUser(name) {
    let deleted = db.get(collection).filter({name: name}).value();
    db.get(collection).remove({name: name}).value();
    return deleted;
}

export default {getUsers, getUser, postUser, updateUser, removeUser};
