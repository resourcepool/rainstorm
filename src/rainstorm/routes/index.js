'use strict';
import express from 'express';
import launcherRoutes from './launcher';
import userRoutes from './user';
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

/**
 * Rainstorms route
 */
// router.use('/rainstorms', rainstormRoutes);

export default router;
