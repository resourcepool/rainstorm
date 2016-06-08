import express from 'express';
import userRoutes from './user';
import launcherRoutes from './launcher';

const router = express.Router();

/**
 * GET /health-check - Check service health
 */
router.get('/health-check', (req, res) =>
    res.json({message: 'OK'})
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount launcher routes at /launchers
// router.use('/launchers', launcherRoutes);

// mount retaliation routes at /retaliations
// router.use('/retaliations', retaliationRoutes);

export default router;