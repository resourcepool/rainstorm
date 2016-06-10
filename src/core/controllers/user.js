import User from '../models/user';

export default class UserController {

    constructor(dao) {
        this.dao = dao;
    }

    getUsers(req, res) {
        res.json(this.dao.getUsers());
    }

    getUser(req, res) {
        res.json(this.dao.getUser(req.params.name))
    }

    postUser(req, res) {
        let user = new User(req.body.name, req.body.positions);
        this.dao.postUser(user);
        res.json({message: 'User added.', data: user});
    }

    updateUser(req, res) {
        let user = new User(req.body.name, req.body.positions);
        this.dao.updateUser(user, req.params.name);
        res.json({message: 'User updated.', data: user});
    }

    removeUser(req, res) {
        this.dao.removeUser(req.params.name);
        res.json({message: 'User removed.', data: req.params.name});
    }

};