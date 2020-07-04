import Joi from '@hapi/joi';

export default Joi.object({
  username: Joi.string().alphanum().max(16).min(2).required(),
  password: Joi.string().max(32).min(6).required(),
});
