import express from 'express';
import validate from 'express-validation';
import userValidator from '../../core/validation/userValidator';
import config from '../conf/config';
import userDao from '../persistence/userDao';

const auth = require('../../core/controller/authController')(config);
const userController = require('../../core/controller/userController')(userDao);

const router = express.Router();

router.use(auth.isValidToken);

router.route('/')
    .get(userController.getUsers)
    .post(validate(userValidator.user), userController.postUser);

router.route('/:name')
    .get(userController.getUser)
    .put(validate(userValidator.user), userController.updateUser)
    .delete(userController.removeUser);

export default router;
