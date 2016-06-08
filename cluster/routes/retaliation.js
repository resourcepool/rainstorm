import express from 'express';
import launcherController from '../controllers/launcher';

const router = express.Router();

router.route('/')
    /** GET /api/launchers - Get list of launchers */
    .get(launcherController.getLaunchers)
    /** POST /api/launchers - Create new launcher */
    .post(launcherController.postLauncher);

export default router;