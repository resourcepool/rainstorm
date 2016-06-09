import express from 'express';
import userRoutes from './user';
import launcherRoutes from './launcher';
import retaliationRoutes from './retaliation';
import auth from '../controllers/auth';
const router = express.Router();

/**
 * Checking if cluster is running up.
 */
router.get('/health-check', (req, res) =>
    res.json({message: 'OK'})
);

/**
 * Authentication route.
 */
router.route('/authenticate').post(auth.authentication);

/**
 * Users route
 */
router.use('/users', userRoutes);

/**
 * Launchers route
 */
router.use('/launchers', launcherRoutes);

/**
 * Retaliations route
 */
router.use('/retaliations', retaliationRoutes);

export default router;