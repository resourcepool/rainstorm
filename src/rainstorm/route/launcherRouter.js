import express from 'express';
import validate from 'express-validation';
import launcherValidator from '../../core/validation/launcherValidator';
import launcherDao from '../persistence/launcherDao';

const launcherController = require('../../core/controller/launcherController')(launcherDao);

const router = express.Router();

router.route('/')
  .get(launcherController.getLaunchers);

router.route('/:id')
  .get(launcherController.getLauncher)
  .put(validate(launcherValidator.launcher), launcherController.updateLauncher);

export default router;
