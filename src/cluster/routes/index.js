import express from 'express';
import userRoutes from './user';
// import launcherRoutes from './launcher';
// import registerRoutes from './register';
// import auth from '/core/controllers/auth';
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
// router.route('/authenticate').post(auth.authentication);

/**
 * Registration route when slave mode active on retaliation client api.
 */
// router.use('/register', registerRoutes);

/**
 * Users route
 */
// router.use('/users', userRoutes);

/**
 * Launchers route
 */
// router.use('/launchers', launcherRoutes);

export default router;