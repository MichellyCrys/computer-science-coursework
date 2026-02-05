import { Major } from '../generated/prisma';

export type CreateMajorDto = Pick<Major, 'name' | 'code' | 'description'>;
export type UpdateMajorDto = Pick<Major, 'name' | 'code' | 'description'>;