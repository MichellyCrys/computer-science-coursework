import { Request, Response } from 'express';
import { createUser, authenticateUser, checkEmailExists } from '../services/user';
import { getAllMajors } from '../services/major';
import { userRegistrationSchema, loginSchema } from '../validations/user.validation';
import { UserRegistrationDto, LoginDto } from '../types/user';

const register = async (req: Request, res: Response) => {
    if (req.method === 'GET') {
        try {
            const majors = await getAllMajors();
            res.render('auth/register', { majors });
        } catch (err) {
            console.error(err);
            res.status(500).render('error', { message: 'Erro interno do servidor' });
        }
    } else {
        try {
            const userData: UserRegistrationDto = req.body;

            const { error } = userRegistrationSchema.validate(userData);
            if (error) {
                const majors = await getAllMajors();
                return res.render('auth/register', {
                    majors,
                    error: error.details[0].message,
                    formData: userData
                });
            }

            const emailExists = await checkEmailExists(userData.email);
            if (emailExists) {
                const majors = await getAllMajors();
                return res.render('auth/register', {
                    majors,
                    error: 'Este email já está cadastrado',
                    formData: userData
                });
            }

            const newUser = await createUser(userData);

            res.render('auth/login', {
                success: 'Conta criada com sucesso! Faça login para continuar.'
            });

        } catch (err) {
            console.error(err);
            const majors = await getAllMajors();
            res.render('auth/register', {
                majors,
                error: 'Erro ao criar conta. Tente novamente.',
                formData: req.body
            });
        }
    }
};

const login = async (req: Request, res: Response) => {
    if (req.method === 'GET') {
        res.render('auth/login');
    } else {
        try {
            const credentials: LoginDto = req.body;

            const { error } = loginSchema.validate(credentials);
            if (error) {
                return res.render('auth/login', {
                    error: error.details[0].message,
                    formData: credentials
                });
            }

            const user = await authenticateUser(credentials);
            if (!user) {
                return res.render('auth/login', {
                    error: 'Email ou senha incorretos',
                    formData: credentials
                });
            }

            (req.session as any).uid = user.id;
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.render('auth/login', {
                error: 'Erro interno do servidor',
                formData: req.body
            });
        }
    }
};

const logout = async (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao fazer logout');
        }
        res.redirect('/auth/login');
    });
};

export default {
    register,
    login,
    logout
};
