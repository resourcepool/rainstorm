// Load required packages
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

passport.use(new BasicStrategy(
    function (username, password, callback) {
        User.findOne({username: username}, function (err, user) {
            if (err) {
                return callback(err);
            }

            // No user found with that username
            if (!user) {
                return callback(null, false);
            }

            // Make sure the password is correct
            user.verifyPassword(password, function (err, isMatch) {
                if (err) {
                    return callback(err);
                }

                // Password did not match
                if (!isMatch) {
                    return callback(null, false);
                }

                // Success
                return callback(null, user);
            });
        });
    }
));

var isRole = function(role) {
  return [
    passport.authenticate('basic'),
    function(req, res, next) {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.status(401).send({ error : 'Unauthorized', message : 'You do not have enough permissions.' });
      }
    }
  ];
};

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

exports.isAuthenticated = passport.authenticate('basic', {session: false});
exports.isRole = isRole;
