'use strict';

import User from '../models/user';

module.exports = (dao) => {

    return {
      getUsers: (req, res) => {
        res.json(dao.getUsers());
      },

      getUser: (req, res) => {
        res.json(dao.getUser(req.params.name));
      },

      postUser: (req, res) => {
        let user = new User(req.body.name, req.body.positions);
        dao.postUser(user);
        res.json({message: 'User added.', data: user});
      },

      updateUser: (req, res) => {
        let user = new User(req.body.name, req.body.positions);
        dao.updateUser(user, req.params.name);
        res.json({message: 'User updated.', data: user});
      },

      removeUser: (req, res) => {
        dao.removeUser(req.params.name);
        res.json({message: 'User removed.', data: req.params.name});
      }
    };

};
