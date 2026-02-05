import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import logger from './middlewares/logger';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import Handlebars from 'handlebars';

import router from './router/router';
import { engine } from 'express-handlebars';
import * as hbsHelpers from './views/helpers/helpers';
import "./types/express-session";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

Handlebars.registerHelper('eq', function(this: any, arg1: any, arg2: any, options: any) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

app.engine('handlebars', engine({
    helpers: {
        listNodejsTechs: hbsHelpers.listNodejsTechs,
        eq: (a: any, b: any) => a === b // Helper para comparação no template
    },
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configuração de sessão (antes do logger e router)
app.use(session({
    genid: () => uuidv4(),
    secret: 'Hi9Cf#mK98',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Em produção, definir como true com HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 24 horas
    }
}));

// Middleware para adicionar informações de sessão aos templates
app.use((req, res, next) => {
    res.locals.isLoggedIn = !!(req.session as any)?.uid;
    res.locals.userId = (req.session as any)?.uid;
    next();
});

app.use(logger);
app.use(router);

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});