var request = require('request');
var Developer = require('../models/developer');

// Identification for the python driver api
var driverApi = 'http://localhost:9000/api/shoot';
var username = "yo";
var password = "yo";
var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

// Create endpoint /api/actions for POSTS
exports.shootPos = function (req, res) {
    json = {
        "x": req.body.x + "",
        "y": req.body.y + ""
    };
    // get the name of the developer as parameter.
    // fetch the developer to get his position.
    // fetch the rainstorm to send to the right one.

    request({
        url    : driverApi,
        method : "POST",
        json   : true,
        body   : json,
        headers: {
            "Authorization": auth
        }
    }, function (error, response, body) {
        res.json({message: 'This is the driver response.', data: response.body});
    });
};

exports.shootDev = function (req, res) {
    Developer.findById(req.params.id, function (err, dev) {
        if (err) {
            res.send(err);
        }

        var json = {
            "x": dev.pos_x + "",
            "y": dev.pos_y + ""
        };

        request({
            url    : driverApi,
            method : "POST",
            json   : true,
            body   : json,
            headers: {
                "Authorization": auth
            }
        }, function (error, response, body) {
            if (error) {
                console.log(error);
                res.send(error);
            }
            else res.json({message: 'This is the driver response.', data: body});
        });
    });
};
