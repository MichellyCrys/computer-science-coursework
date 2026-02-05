import { PrismaClient, User } from "../generated/prisma";
import { CreateUserDto, UpdateUserDto, UserRegistrationDto, LoginDto } from "../types/user";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return prisma.user.findMany({
        include: {
            major: true
        }
    });
};

export const createUser = async (userData: UserRegistrationDto) => {
    // Gerar salt e hash da senha
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    
    // Criar usuário sem a confirmação de senha
    const { confirmPassword, ...userDataWithoutConfirm } = userData;
    
    return await prisma.user.create({
        data: {
            ...userDataWithoutConfirm,
            password: hashedPassword
        },
        include: {
            major: true
        }
    });
};

export const getUser = async (id: string) => {
    return await prisma.user.findUnique({
        where: { id },
        include: {
            major: true
        }
    });
};

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email },
        include: {
            major: true
        }
    });
};

export const updateUser = async (
    id: string,
    updateData: UpdateUserDto
) => {
    return await prisma.user.update({
        where: { id },
        data: updateData,
        include: {
            major: true
        }
    });
};

export const deleteUser = async (id: string) => {
    return await prisma.user.delete({
        where: { id }
    });
};

export const authenticateUser = async (credentials: LoginDto): Promise<User | null> => {
    // Buscar usuário pelo email
    const user = await prisma.user.findUnique({
        where: { email: credentials.email },
        include: {
            major: true
        }
    });
    
    if (!user) {
        return null;
    }
    
    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
    
    if (!isPasswordValid) {
        return null;
    }
    
    return user;
};

export const checkEmailExists = async (email: string): Promise<boolean> => {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    return !!user;
};