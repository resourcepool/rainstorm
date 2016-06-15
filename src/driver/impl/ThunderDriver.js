// Classes
const RainstormDriver = require('../RainstormDriver');
// Imports
const usb = require('usb');
const co = require('co');
const sleep = require('co-sleep');

const DOWN = 0x01;
const UP = 0x02;
const LEFT = 0x04;
const RIGHT = 0x08;
const FIRE = 0x10;
const STOP = 0x20;

var ThunderDriver = class extends RainstormDriver {

  constructor(device) {
    if (!device) {
      throw 'Params empty';
    }

    super(device);
  }

  setup() {
    this._device.open();

    var i = this._device.interfaces[0];

    if (i.isKernelDriverActive()) {
      i.detachKernelDriver();
    }

    i.claim();
  }

  shoot() {
    console.log('Shoot');
    this.setup();
    var actions = [{
      direction: FIRE,
      duration: 100
    }];
    return executeActions(this._device, actions);
  }

  move(x, y) {
    console.log('Move [' + x + ', ' + y + ']');
    this.setup();
    var actions = [];
    if (!isPositionAccessible(x, y)) {
      console.err('Unreachable !');
    } else {
      actions = [{
        direction: getVertDirectionCode(x, y),
        duration: getVertMoveDuration(x, y)
      }, {
        direction: UP,
        duration: getHorizMoveDuration(x, y)
      }, {
        direction: getReverseVertDirectionCode(x, y),
        duration: getVertMoveDuration(x, y)
      }, {
        direction: DOWN,
        duration: getHorizMoveDuration(x, y)
      }];

    }

    return executeActions(this._device, actions);
  }

  reset() {
    throw 'Empty';
  }

  static isSupported(device) {
    return device.deviceDescriptor.idVendor === 0x2123 && device.deviceDescriptor.idProduct === 0x1010;
  }
};

//--------------------------------------------------
// Private code
//--------------------------------------------------

function executeActions(device, actions) {
  return co(function *() {
    for (let action of actions) {
      yield sendMove(device, action.direction, action.duration);
    }
  });
}

function sendMove(device, cmd, duration) {
  return co(function *() {
    yield sendCommand(device, cmd);
    yield sleep(duration);
    yield sendCommand(device, STOP);
  });
}

function sendCommand(device, cmd) {
  return new Promise((resolve, reject) => {
    device.controlTransfer(0x21, 0x09, 0, 0,
      Buffer.from([0x02, parseInt(cmd + '', 16), 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]),
      (err) => {
        if (err) reject(err);
        resolve();
      });
  });
}

function isPositionAccessible(posX, posY) {
  if ((posX < 0 && posY < 0) || (posX > 0 && posY < 0)) {
    return Math.abs(posY / posX) < 1;
  }
  return true;
}

function getReverseVertDirectionCode(posX) {
  return posX < 0 ? RIGHT : LEFT;
}

function getVertDirectionCode(posX) {
  return posX > 0 ? RIGHT : LEFT;
}

function getHorizMoveDuration(posX, posY) {
  var distance = Math.sqrt(posX * posX + posY * posY);

  console.log('distance ', distance);

  switch (distance) {
    case distance > Math.sqrt(7 * 7 + 7 * 7):
      return 700;
    case distance > Math.sqrt(6 * 6 + 6 * 6):
      return 600;
    case distance > Math.sqrt(5 * 5 + 5 * 5):
      return 500;
    case distance > Math.sqrt(4 * 4 + 4 * 4):
      return 400;
    case distance > Math.sqrt(3 * 3 + 3 * 3):
      return 300;
    case distance > Math.sqrt(2 * 2 + 2 * 2):
      return 200;
    default:
      return 100;
  }
}

function getVertMoveDuration(posX, posY) {
  var angle = 0;
  if ((posX < 0 && posY < 0) || (posX > 0 && posY < 0)) {
    if (posX === 0) {
      posX = 0.001;
    }
    angle = Math.PI / 2 + Math.atan(Math.abs(posY / posX));
  } else {
    if (posY === 0) {
      posY = 0.001;
    }
    angle = Math.atan(Math.abs(posX / posY));
  }
  console.log('ANGLE: ', (angle));

  return (5640 * angle) / ((3 * Math.PI) / 2);
}

// Exports
module.exports = ThunderDriver;
