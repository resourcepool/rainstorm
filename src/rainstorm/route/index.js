import express from 'express';
import launcherRoutes from './launcherRouter';
import userRoutes from './userRouter';
const router = express.Router();

/**
 * Checking if cluster is running up.
 */
router.get('/health-check', (req, res) =>
    res.json({message: 'OK'})
);

/**
 * Users route
 */
router.use('/users', userRoutes);

/**
 * Launchers route
 */
router.use('/launchers', launcherRoutes);

export default router;
