import User from '../model/User';

module.exports = (dao) => {

  function getUsers(req, res) {
    res.json(dao.getUsers());
  }

  function getUser(req, res) {
    res.json(dao.getUser(req.params.name));
  }

  function postUser(req, res) {
    let user = new User(req.body.name, req.body.positions);
    dao.postUser(user);
    res.json({message: 'User added.', data: user});
  }

  function updateUser(req, res) {
    let user = new User(req.body.name, req.body.positions);
    dao.updateUser(user, req.params.name);
    res.json({message: 'User updated.', data: user});
  }

  function removeUser(req, res) {
    dao.removeUser(req.params.name);
    res.json({message: 'User removed.', data: req.params.name});
  }

  return {
    getUsers,
    getUser,
    postUser,
    updateUser,
    removeUser
  };

};
