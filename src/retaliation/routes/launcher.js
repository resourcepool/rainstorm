import express from 'express';
import validate from 'express-validation';
import paramValidation from '../helpers/param-validation';
import launcherController from '../controllers/launcher';

const router = express.Router();

router.route('/')
    .get(launcherController.getLaunchers)
    .post(launcherController.postLauncher);

router.route('/:id')
    .get(launcherController.getLauncher)
    .put(validate(paramValidation.launcher), launcherController.updateLauncher)
    .delete(launcherController.removeLauncher);

export default router;