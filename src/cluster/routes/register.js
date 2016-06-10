import express from 'express';
import registerController from '../controllers/register';
import auth from '../controllers/auth';

const router = express.Router();

router.route('/').post(auth.isValidRetaliationApiKey, registerController.postRegister);

export default router;