import Joi from 'joi';

export default {
  launcher: {
    body: {
      name: Joi.string().required(),
      rainstormId: Joi.string().regex(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).required(),
      positions: Joi.object().keys({
        x: Joi.number().required(),
        y: Joi.number().required(),
        z: Joi.number().required()
      })
    }
  }
};
