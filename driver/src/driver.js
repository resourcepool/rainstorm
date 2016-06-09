'use strict';
const usb = require('usb');
const driverManager = require('./driver/driverManager');

const drivers = require('require-dir')('./driver/impl');
let devices = driverManager.load(usb.getDeviceList(), drivers);

function refresh (device) {
  devices = driverManager.load(usb.getDeviceList(), drivers);
  console.log(devices);
}

usb.on('attach', refresh);
usb.on('detach', refresh);

module.exports = () => {
  return devices;
};
