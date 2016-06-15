'use strict';
import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import launcherDAO from '../persistence/launcher';

const launcherController = require('../../core/controllers/launcher')(launcherDAO);

const router = express.Router();

router.route('/')
    .get(launcherController.getLaunchers);

router.route('/:id')
    .get(launcherController.getLauncher)
    .put(validate(paramValidation.launcher), launcherController.updateLauncher);

export default router;
