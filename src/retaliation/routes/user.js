'use strict';
import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import auth from '../../core/controllers/auth';
import userDAO from '../persistence/user';

const userController = require('../../core/controllers/user')(userDAO);

const router = express.Router();

router.route('/')
    .get(auth.isValidApiKey, userController.getUsers)
    .post(auth.isValidApiKey, validate(paramValidation.user), userController.postUser);

router.route('/:name')
    .get(auth.isValidApiKey, userController.getUser)
    .put(auth.isValidApiKey, validate(paramValidation.user), userController.updateUser)
    .delete(auth.isValidApiKey, userController.removeUser);

export default router;
