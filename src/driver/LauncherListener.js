/**
 * LauncherListener class. This listener is used to observe Launcher connections / disconnections from USB ports.
 * @type {{new(): {onDeviceDisconnected: (function(*)), onDeviceConnected: (function(*))}}}
 */
const LauncherListener = class {
  constructor() {

  }

  onDeviceConnected(device) {
    throw 'NotImplemented';
  }

  onDeviceDisconnected(device) {
    throw 'NotImplemented';
  }
};

module.exports = LauncherListener;
