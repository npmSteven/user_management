import Joi from '@hapi/joi';

export const userValidation = Joi.object({
  id: Joi.number(),
  name: Joi.string().min(2).max(32).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'biz', 'tv', 'info', 'ca', 'org', 'me', 'io'] }
  }).required(),
});
