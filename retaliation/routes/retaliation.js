import express from 'express';
import launcherController from '../controllers/launcher';

const router = express.Router();

router.route('/')
    .get(launcherController.getLaunchers)
    .post(launcherController.postLauncher);

export default router;