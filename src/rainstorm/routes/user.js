'use strict';
import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../core/helpers/param-validation';
import config from '../config';
import userDAO from '../persistence/user';

const auth = require('../../core/controllers/auth')(config);
const userController = require('../../core/controllers/user')(userDAO);

const router = express.Router();

router.route('/')
    .get(auth.isValidRainstormApiKey, userController.getUsers)
    .post(auth.isValidRainstormApiKey, validate(paramValidation.user), userController.postUser);

router.route('/:name')
    .get(auth.isValidRainstormApiKey, userController.getUser)
    .put(auth.isValidRainstormApiKey, validate(paramValidation.user), userController.updateUser)
    .delete(auth.isValidRainstormApiKey, userController.removeUser);

export default router;
