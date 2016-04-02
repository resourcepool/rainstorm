// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./controllers/auth');
var retaliationController = require('./controllers/retaliation');
var userController = require('./controllers/user');
var actionController = require('./controllers/action');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/retaliation-mongo');

// Create our Express application
var app = express();

// Defining port
var port = parseInt(process.env.PORT, 10) || 3000;

// Use the body-parser package in our application
app.use(bodyParser.json());

// Use the passport package in our application
app.use(passport.initialize());

//Enable CORS
app.use(require('./middlewares/cors'));

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /retaliations
router.route('/retaliations')
    .get(authController.isAuthenticated, retaliationController.getRetaliations)
    .post(authController.isAuthenticated, authController.isRole('admin'), retaliationController.postRetaliations);

//Create endpoint handlers for /retaliations/:retaliation_id
router.route('/retaliations/:retaliation_id')
    .get(authController.isAuthenticated, retaliationController.getRetaliation)
    .put(authController.isAuthenticated, authController.isRole('admin'), retaliationController.putRetaliation)
    .delete(authController.isAuthenticated, authController.isRole('admin'), retaliationController.deleteRetaliation);

// Create endpoint handlers for /users
router.route('/users')
    .get(authController.isAuthenticated, authController.isRole('admin'), userController.getUsers)
    .post(authController.isAuthenticated, authController.isRole('admin'), userController.postUsers);

// Create endpoint handlers for /actions
router.route('/actions/shoot')
    .post(authController.isAuthenticated, authController.isRole('admin'), actionController.shootPos)
router.route('/actions/shoot/:id')
    .post(authController.isAuthenticated, authController.isRole('admin'), actionController.shootDev)

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port, function () {
    console.info("Retaliation server is running on port: " + port);
});
