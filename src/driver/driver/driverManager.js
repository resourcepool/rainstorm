module.exports = {
  load: function(devices, drivers) {
    devices = mapDeviceToDriver(devices, drivers);
    return devices.map((e)=> {
      return new e.driver(e.device);
    });
  }
};

function driverCompatible(deviceDescriptor, driver) {
  if (!deviceDescriptor || !driver) throw 'Missing parameter';

  return deviceDescriptor.idVendor === parseInt(driver.VID, 10) &&
  deviceDescriptor.idProduct === parseInt(driver.PID, 10) ? driver : null;
}

function mapDeviceToDriver(devices, drivers) {
  return devices.map((device)=> {
    let driver;
    for (let driverName in drivers) {

      driver = driverCompatible(device.deviceDescriptor, drivers[driverName]);
      if (driver){
        driver = driver[driverName];
        break;
      }
    }
    return driver ? {
      driver: driver,
      device: device
    } : null;
  }).filter((e) => e != null);
}
