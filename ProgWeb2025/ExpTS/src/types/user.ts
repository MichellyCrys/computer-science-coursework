import { User } from '../generated/prisma';

export type CreateUserDto = Pick<User, 'fullname' | 'email' | 'password' | 'major_id'>;
export type UpdateUserDto = Partial<Pick<User, 'fullname' | 'email' | 'major_id'>>;

export type UserRegistrationDto = Pick<User, 'fullname' | 'email' | 'major_id' | 'password'> & {
    confirmPassword: string;
};
export type LoginDto = Pick<User, 'email' | 'password'>;