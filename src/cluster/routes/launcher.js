import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import launcherController from '../../core/controllers/launcher';
import auth from '../../core/controllers/auth';

const router = express.Router();

router.route('/')
    .get(auth.isValidToken, launcherController.getLaunchers)
    .post(auth.isValidToken, validate(paramValidation.launcher), launcherController.postLauncher);

router.route('/:id')
    .get(auth.isValidToken, launcherController.getLauncher)
    .put(auth.isValidToken, validate(paramValidation.launcher), launcherController.updateLauncher)
    .delete(auth.isValidToken, launcherController.removeLauncher);

export default router;
