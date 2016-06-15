import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import config from '../config';
import launcherDAO from '../persistence/launcher';

const auth = require('../../core/controllers/auth')(config);
const launcherController = require('../../core/controllers/launcher')(launcherDAO);

const router = express.Router();

router.use(auth.isValidToken);

router.route('/')
    .get(launcherController.getLaunchers);

router.route('/:id')
    .get(launcherController.getLauncher)
    .put(validate(paramValidation.launcher), launcherController.updateLauncher);

export default router;
