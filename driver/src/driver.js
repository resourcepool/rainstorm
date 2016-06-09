'use strict';
const usb = require('usb');
const driverManager = require('./driver/driverManager');

const drivers = require('require-dir')('./driver/impl');
let devices = driverManager.load(usb.getDeviceList(), drivers);
const EventEmitter = require("events").EventEmitter;
const driver = new EventEmitter();

/**
 * Reloads plugged in devices with appropriate driver
 */
function refresh() {
  devices = driverManager.load(usb.getDeviceList(), drivers);
}

usb.on('attach', () => {
  refresh();
  driver.emit('attach', devices);
});
usb.on('detach', () => {
  refresh();
  driver.emit('detach', devices);
});


driver.getDevices = () => {
  return devices;
};
module.exports = driver;
