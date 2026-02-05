import Joi from 'joi';

export const majorSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    code: Joi.string().length(4).required(),
    description: Joi.string().allow('', null)
});
