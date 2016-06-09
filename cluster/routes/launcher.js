import express from 'express';
import validate from 'express-validation';
import paramValidation from '../helpers/param-validation';
import launcherController from '../controllers/launcher';
import auth from '../controllers/auth';

const router = express.Router();

router.route('/')
    .get(launcherController.getLaunchers)
    .post(launcherController.postLauncher);

router.route('/:id')
    .get(auth.isValidToken, launcherController.getLauncher)
    .put(auth.isValidToken, validate(paramValidation.launcher), launcherController.updateLauncher)
    .delete(auth.isValidToken, launcherController.removeLauncher);

export default router;