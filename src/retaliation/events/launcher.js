import launcherDAO from '../persistence/launcher';
import driver from '../../driver/driver';

console.log('events');

driver.on('attach', (device) => {
  console.log(device);
  launcherDAO.postLauncher(device);
});

driver.on('detach', (device) => {
  console.log(device);
});
