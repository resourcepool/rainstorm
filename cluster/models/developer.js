// Load required packages
var mongoose = require('mongoose');

// Define our developer schema
var DeveloperSchema   = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  pos_x: {
    type: Number,
    required: true
  },
  pos_y: {
    type: Number,
    required: true
  },
  pos_z: {
    type: Number,
    required: true
  },
  pushs: {
    type: Number,
    required: true,
    default: 0
  },
  failures: {
    type: Number,
    required: true,
    default: 0
  }
}, { versionKey: '_retaliation_version' });

// Export the Mongoose model
module.exports = mongoose.model('Developer', DeveloperSchema);
