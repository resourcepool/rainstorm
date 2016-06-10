import userDAO from '../persistence/user';
import User from '../models/user';
import ip from 'ip';

function getUsers(req, res) {
    res.json(userDAO.getUsers());
}

function getUser(req, res) {
    res.json(userDAO.getUser(req.params.name))
}

function postUser(req, res) {
    let user = new User(req.body.name, req.body.positions, ip.address());
    let create = userDAO.postUser(user);
    res.json({message: 'User added.', data: create});
}

function updateUser(req, res) {
    let current = new User(req.params.name, req.body.positions, ip.address());
    let update = userDAO.updateUser(current);
    res.json({message: 'User updated.', data: update});
}

function removeUser(req, res) {
    let remove = userDAO.removeUser(req.params.name);
    res.json({message: 'User removed.', data: remove});
}

export default {getUsers, getUser, postUser, updateUser, removeUser};