var validator = require('validator');
// Load required packages
var Retaliation = require('../models/retaliation');
var Developer = require('../models/developer');

// Create endpoint /api/retaliation for POSTS
exports.postRetaliations = function (req, res) {
  // Create a new instance of mongoose models
  var retaliation = new Retaliation();

  //Validation
  try {
    if (req.body.name === null || validator.isNull(req.body.name)) {
      throw new Error('Retaliation\'s name can\'t be empty.');
    }
    if (req.body.room === null || validator.isNull(req.body.room)) {
      throw new Error('Retaliation\'s room can\'t be empty.');
    }
    if (req.body.developers) {
      req.body.developers.forEach(function(developer) {
        if (developer.name == null || validator.isNull(developer.name)) {
          throw new Error('Developer\'s name can\'t be empty.');
        }
        if (developer.pos_x == null || developer.pos_y == null || developer.pos_z == null) {
          throw new Error('Developer\'s positions x, y, z can\'t be empty.');
        }
        if (developer.pos_x !== parseInt(developer.pos_x, 10) ||
            developer.pos_y !== parseInt(developer.pos_y, 10) ||
            developer.pos_z !== parseInt(developer.pos_z, 10)) {
          throw new Error('Developer\'s positions x, y, z are in a wrong format.');
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error : 'BadRequest', message : error.message });
    return;
  }

  // Save developers
  if (req.body.developers) {
    req.body.developers.forEach(function(developer) {
      var tmp = new Developer();
      tmp.name = developer.name;
      tmp.pos_x = developer.pos_x;
      tmp.pos_y = developer.pos_y;
      tmp.pos_z = developer.pos_z;
      tmp.save();
      retaliation.developers.push(tmp);
    });

  }

  // Set the retaliation properties that came from the POST data
  retaliation.name = req.body.name;
  retaliation.room = req.body.room;

  // Save the retaliation and check for errors
  retaliation.save(function (err) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Retaliation added !', data: retaliation});
    }
  });
};

// Create endpoint /api/retaliations for GET
exports.getRetaliations = function (req, res) {
  // Use the Retaliation model to find all retaliation
  Retaliation.find()
  .populate('developers')
  .exec(function (err, retaliations) {
    if (err) {
      res.send(err);
    } else {
      res.json(retaliations);
    }
  });

};

// Create endpoint /api/retaliations/:retaliation_id for GET
exports.getRetaliation = function (req, res) {
  // Use the Retaliation model to find a specific retaliation
  Retaliation.findById({ _id: req.params.retaliation_id })
  .populate('Developer')
  .exec(function (err, retaliation) {
      if (err) {
        res.send(err);
      } else {
        res.json(retaliation);
      }
  });

};

// Create endpoint /api/retaliations/:retaliation_id for PUT
exports.putRetaliation = function (req, res) {
  // Use the Retaliation model to find a specific retaliation
  Retaliation.findById(req.params.retaliation_id, function (err, retaliation) {
    if (err) {
      res.send(err);
    }

    retaliation.name = req.body.name;
    retaliation.room = req.body.room;

    // Save the retaliation and check for errors
    retaliation.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.json(retaliation);
      }
    });
  });
};

// Create endpoint /api/retaliations/:retaliation_id for DELETE
exports.deleteRetaliation = function (req, res) {
  // Use the Retaliation model to find a specific retaliation and remove it
  Retaliation.findByIdAndRemove(req.params.retaliation_id, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Retaliation removed!'});
    }
  });
};
