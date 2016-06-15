import express from 'express';
import registerController from '../controllers/register';
import config from '../config';

const router = express.Router();
const auth = require('../../core/controllers/auth')(config);

router.route('/').post(auth.isValidRainstormApiKey, registerController.postRegister);

export default router;
