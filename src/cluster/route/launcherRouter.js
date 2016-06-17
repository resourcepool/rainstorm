import express from 'express';
import validate from 'express-validation';
import launcherValidator from '../../core/validation/launcherValidator';
import config from '../conf/config';
import launcherDao from '../persistence/launcherDao';

const auth = require('../../core/controller/authController')(config);
const launcherController = require('../../core/controller/launcherController')(launcherDao);

const router = express.Router();

router.use(auth.isValidToken);

router.route('/')
  .get(launcherController.getLaunchers);

router.route('/:id')
  .get(launcherController.getLauncher)
  .put(validate(launcherValidator.launcher), launcherController.updateLauncher);

export default router;
