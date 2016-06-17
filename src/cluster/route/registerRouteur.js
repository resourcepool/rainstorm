import express from 'express';
// import registerController from '../controllers/register';
import config from '../conf/config';

const router = express.Router();
const auth = require('../../core/controller/authController')(config);

router.route('/')
// TODO : Implement register post function
// .post(auth.isValidRainstormApiKey, registerController.postRegister);

export default router;
