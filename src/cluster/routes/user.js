import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import config from '../config';
import userDAO from '../persistence/user';

const auth = require('../../core/controllers/auth')(config);
const userController = require('../../core/controllers/user')(userDAO);

const router = express.Router();

router.use(auth.isValidToken);

router.route('/')
    .get(userController.getUsers)
    .post(validate(paramValidation.user), userController.postUser);

router.route('/:name')
    .get(userController.getUser)
    .put(validate(paramValidation.user), userController.updateUser)
    .delete(userController.removeUser);

export default router;
