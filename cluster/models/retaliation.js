// Load required packages
var mongoose = require('mongoose');
var Developer = require('./developer');

// Define our retaliation schema
var RetaliationSchema   = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  room: {
    type: String,
    required: true
  },
  developers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Developer'
  }]
}, { versionKey: '_retaliation_version' });

// Export the Mongoose model
module.exports = mongoose.model('Retaliation', RetaliationSchema);
