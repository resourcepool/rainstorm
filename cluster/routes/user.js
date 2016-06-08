import express from 'express';
import validate from 'express-validation';
import paramValidation from '../helpers/param-validation';
import userController from '../controllers/user';

const router = express.Router();

router.route('/')
    .get(userController.getUsers)
    .post(validate(paramValidation.user), userController.postUser);

router.route('/:name')
    .get(userController.getUser)
    .put(validate(paramValidation.user), userController.updateUser)
    // .delete(userController.removeUser);

/** Load user when API with userId route parameter is hit */
// router.param('userId', userController.load);

export default router;