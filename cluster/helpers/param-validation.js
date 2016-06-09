import Joi from 'joi';

export default {
    user: {
        body: {
            name: Joi.string().required()
        }
    },
    launcher: {
        body: {
            id: Joi.string().required()
        }
    }
};