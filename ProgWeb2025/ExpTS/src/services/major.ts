
import { PrismaClient, Major, Prisma } from "../generated/prisma"; // Esta importação está correta
import { CreateMajorDto, UpdateMajorDto } from "../types/major";

const prisma = new PrismaClient(); // A instância 'prisma' é criada aqui e usada localmente

export const getAllMajors = async () => {
    return prisma.major.findMany();
};

export const createMajor = async (
    newMajor: CreateMajorDto
) => {
    return await prisma.major.create({ data: newMajor });
};

export const getMajor = async (id: string) => {
    return await prisma.major.findUnique({
        where: { id }
    });
};

export const updateMajor = async (
    id: string,
    updateData: UpdateMajorDto
) => {
    return await prisma.major.update({
        where: { id },
        data: updateData
    });
};

export const deleteMajor = async (id: string) => {
    return await prisma.major.delete({
        where: { id }
    });
};