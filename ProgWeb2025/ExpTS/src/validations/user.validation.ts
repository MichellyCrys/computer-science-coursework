import Joi from 'joi';

export const userRegistrationSchema = Joi.object({
    fullname: Joi.string().min(3).max(100).required().messages({
        'string.min': 'Nome completo deve ter no mínimo 3 caracteres',
        'string.max': 'Nome completo deve ter no máximo 100 caracteres',
        'any.required': 'Nome completo é obrigatório'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email deve ter um formato válido',
        'any.required': 'Email é obrigatório'
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Senha deve ter no mínimo 6 caracteres',
        'any.required': 'Senha é obrigatória'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'As senhas devem coincidir',
        'any.required': 'Confirmação de senha é obrigatória'
    }),
    major_id: Joi.string().required().messages({
        'any.required': 'Curso é obrigatório'
    })
});

export const userSchema = Joi.object({
    fullname: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    major_id: Joi.string().required()
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'E-mail não pode ser vazio.',
        'string.email': 'Formato de e-mail inválido.',
        'any.required': 'E-mail é obrigatório.'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Senha não pode ser vazia.',
        'any.required': 'Senha é obrigatória.'
    })
});