/**
 * LauncherListener class. This listener is used to observe Launcher connections / disconnections from USB ports.
 * @type {{new(): {onDeviceDisconnected: (function(*)), onDeviceConnected: (function(*))}}}
 */
const LauncherListener = class {

  constructor(launcherDao) {
    this.launcherDao = launcherDao;
  }

  onDeviceConnected(device) {
    this.launcherDao.postLauncher(device);
  }

  onDeviceDisconnected(device) {
    // FIXME didnt work
    this.launcherDao.removeLauncher(device);
  }
};

module.exports = LauncherListener;
