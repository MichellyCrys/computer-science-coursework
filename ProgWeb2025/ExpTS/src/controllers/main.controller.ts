import { Request, Response, NextFunction} from 'express';
import { loremIpsum } from 'lorem-ipsum';
import { Technology } from '../views/helpers/helpersTypes';
import {v4 as uuidv4} from 'uuid'
import "express-session";

const index = (req: Request, res: Response) => {
    res.send('Welcome to Web academy!');
};

const sobre = (req: Request, res: Response) => {
    res.send('Página sobre');
};

const lorem = (req: Request, res: Response) => {
    const defaultParagraphs = 3;
    const text = loremIpsum({
        count: defaultParagraphs,
        units: 'paragraphs',
        format: 'html'
    });
    res.send(`<p>Por favor, especifique o número de parágrafos, ex: /lorem/5</p><hr>${text}`);
};

const loremParagrafos = (req: Request, res: Response): void => {
    const numParagrafos = parseInt(req.params.numParagrafos as string);

    if (isNaN(numParagrafos) || numParagrafos <= 0) {
        res.status(400).send('O número de parágrafos deve ser um número inteiro positivo.');
        return;
    }

    const loremText = loremIpsum({
        count: numParagrafos,
        units: 'paragraphs',
        format: 'html'
    });

    res.send(loremText);
};

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        title: 'Express + HBS! (HB1)'
    });
};

const hb2 = (req: Request, res: Response) => {
    res.render('main/hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        title: 'Express com If (HB2)'
    });
};

const hb3 = (req: Request, res: Response) => {
    const profs = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('main/hb3', {
        profs: profs,
        title: 'Express com Each (HB3)'
    });
};

const hb4 = (req: Request, res: Response) => {
    const technologies: Technology[] = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb4', {
        technologies: technologies,
        title: 'Tecnologias Node.js (HB4)'
    });
};

const bemvindo = (req: Request, res: Response) => {
    const nome = req.params.nome;
    res.send(`Bem-vindo, ${nome}!`);
};

const createCookie = function (req: Request, res: Response) {
    if (!('nomeCookie' in req.cookies)) {
        res.cookie('nomeCookie', 'valorCookie');
        res.send('Você NUNCA passou por aqui!');
    } else {
        res.send('Você JÁ passou por aqui');
    }
};

const clearCookie = function (req: Request, res: Response) {
    res.clearCookie('nomeCookie');
    res.send('cookie apagado');
};

const gerarUUID = (req: Request, res: Response, next: NextFunction): void => {
    const uniqueId = uuidv4();
    res.send(`UUID: ${uniqueId}`);
};


export default {
    index: (req: Request, res: Response) => {
        if (!(req.session as any).uid) {
            return res.redirect('/auth/login');
        }
        res.render("game/index", {
            title: "Jogo Space Shooter",
            userId: (req.session as any).uid
        });
    },

    sobre: (req: Request, res: Response) => {
        res.render("main/sobre", { title: "Sobre" });
    },
    lorem,
    loremParagrafos,
    hb1,
    hb2,
    hb3,
    hb4,
    bemvindo,
    createCookie,
    clearCookie,
    uuid: gerarUUID
};