// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    });

    user.save(function(err) {
        if (err) {
          res.send(err);
        } else {
          res.json({ message: 'User added!' });
        }
    });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err) {
          res.send(err);
        } else {
          res.json(users);
        }
    });
};
