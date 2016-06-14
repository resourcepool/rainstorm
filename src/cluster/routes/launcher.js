'use strict';
import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import config from '../config';
import launcherDAO from '../persistence/launcher';

const auth = require('../../core/controllers/auth')(config);
const launcherController = require('../../core/controllers/launcher')(launcherDAO);

const router = express.Router();

router.route('/')
    .get(auth.isValidToken, launcherController.getLaunchers);

router.route('/:id')
    .get(auth.isValidToken, launcherController.getLauncher)
    .put(auth.isValidToken, validate(paramValidation.launcher), launcherController.updateLauncher);

export default router;
