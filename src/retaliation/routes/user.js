import express from 'express';
import validate from 'express-validation';
import paramValidation from '../helpers/param-validation';
import userController from '../controllers/user';
import auth from '../controllers/auth';

const router = express.Router();

router.route('/')
    .get(auth.isValidApiKey, userController.getUsers)
    .post(auth.isValidApiKey, validate(paramValidation.user), userController.postUser);

router.route('/:name')
    .get(auth.isValidApiKey, userController.getUser)
    .put(auth.isValidApiKey, validate(paramValidation.user), userController.updateUser)
    .delete(auth.isValidApiKey, userController.removeUser);

export default router;