import { Request, Response } from "express";
import { prisma } from '../lib/prisma';

const saveScore = async (req: Request, res: Response) => {
    const { score } = req.body;
    const userId = (req.session as any).uid;

    if (!userId) {
        return res.status(401).json({ message: "Usuário não autenticado" });
    }

    try {
        await prisma.gameSession.create({
            data: {
                userId,
                score: parseInt(score, 10),
            },
        });

        res.status(200).json({ message: "Score salvo com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao salvar score" });
    }
};

export default {
    saveScore
};
