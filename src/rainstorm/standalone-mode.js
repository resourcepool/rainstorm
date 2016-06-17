import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './conf/config';
import routes from './route';
import errorHandler from '../core/error-handler/errorHandler';
import driverManager from '../driver/driverManager';
import launcherDao from './persistence/launcherDao';
import LauncherListener from '../driver/LauncherListener';

function run() {

  initListeners();

  console.info('current devices', driverManager.getLaunchers());

  const app = express();
  app.set('config', config);
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/api', routes);
  app.use(errorHandler);

  app.listen(app.get('config').port, function() {
    console.info("Rainstorm server is running on port: " + app.get('config').port);
  });

}

/**
 * Init listeners in driverManager
 */
function initListeners() {
  driverManager.addLauncherListener(new LauncherListener(launcherDao));
}

export default {run};

