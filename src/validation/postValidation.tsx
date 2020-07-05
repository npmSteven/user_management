import Joi from '@hapi/joi';

export const postValidation = Joi.object({
  id: Joi.number(),
  userId: Joi.number(),
  title: Joi.string().required(),
  body: Joi.string().required(),
});
