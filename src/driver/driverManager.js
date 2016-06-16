// Classes
const LauncherListener = require('./LauncherListener');
// Imports
const usb = require('usb');
// Drivers
const drivers = require('require-dir')('./impl');

// Active launchers are stored here
let launchers = getActiveLaunchers(usb.getDeviceList());
let listeners = [];

//--------------------------------------------------
// Interface
//--------------------------------------------------

/**
 * Retrieve active launchers
 * @returns {{}}
 */
function getLaunchers() {
  return launchers;
}

/**
 * Add device listener to
 * @param l
 */
function addLauncherListener(l) {
  if (! (l instanceof LauncherListener)) {
    throw 'Wrong listener. Please provide a valid LauncherListener object';
  }
  listeners.push(l);
}

//--------------------------------------------------
// Private code
//--------------------------------------------------

/**
 * Get a map of supported active devices
 * @param device
 * @returns {{}}
 */
function getActiveLaunchers(device) {
  device = filterCompatibleDevices(device);
  let launchers = {};
  device.forEach((d) => {
    launchers[getKey(d)] = getSuitableDriver(d);
  });
  return launchers;
}

/**
 * Get the supported active connected devices.
 * @param device the USB device descriptors
 * @returns {Array}
 */
function filterCompatibleDevices(devices) {
  return devices
    .filter((device)=> {
      // For each device descriptor, try to find a relevant Driver, else filter it out
      return getSuitableDriver(device) != null;
    });
}

/**
 * Return suitable driver for device, or null if none.
 * @param device
 */
function getSuitableDriver(device) {
  // For each device descriptor, try to find a relevant Driver
  for (let i in drivers) {
    let Driver = drivers[i];
    if (Driver.isSupported(device)) {
      // If suitable driver found, keep the device descriptor
      return new Driver(device);
    }
  }
  return null;
}

/**
 * Compute semi-unique key identifier for a device.
 * @param deviceDescriptor
 */
function getKey(device) {
  if (device.deviceDescriptor.iSerialNumber) {
    // Nice. Manufacturer has implemented a unique identifier for its devices.
    return "id" + device.deviceDescriptor.idVendor + device.deviceDescriptor.idProduct + device.deviceDescriptor.iSerialNumber;
  } else {
    // Shit. Manufacturer was not nice and has not implemented a unique identifier for its devices. We will bind the device to the bus and port.
    return "id" + device.deviceDescriptor.idVendor + device.deviceDescriptor.idProduct + device.busNumber + device.deviceAddress;
  }
}

/**
 * Reloads plugged in devices with appropriate driver
 */
function refresh() {
  launchers = getActiveLaunchers(usb.getDeviceList());
}


//--------------------------------------------------
// USB Callbacks
//--------------------------------------------------

usb.on('attach', (device) => {
  // If attached device is a supported launcher
  let newLauncher = getActiveLaunchers([device]);
  if (Object.keys(newLauncher).length > 0) {
    // Refresh
    refresh();
    // Notify listeners
    for (var i in listeners) {
      listeners[i].onDeviceConnected(device);
    }
  }
});

usb.on('detach', (device) => {
  // If detached device is a supported launcher
  if (Object.keys(launchers).includes(getKey(device))) {
    // Refresh
    refresh();
    // Notify listeners
    for (var i in listeners) {
      listeners[i].onDeviceDisconnected(device);
    }
  }
});


// Exports
module.exports = {
  getLaunchers: getLaunchers,
  addLauncherListener: addLauncherListener

};
