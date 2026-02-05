import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const logDir = process.env.LOG_DIR || './logs'; 
const logFormat = process.env.LOG_FORMAT || 'simples'; 


if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logger = (req: Request, res: Response, next: NextFunction) => {
    let logEntry = '';
    const timestamp = new Date().toISOString();

    if (logFormat === 'simples') {
        logEntry = `${timestamp}, ${req.url}, ${req.method}`;
    } else if (logFormat === 'completo') {
        logEntry = `${timestamp}, ${req.url}, ${req.method}, ${req.httpVersion}, ${req.get('User-Agent')}`;
    } else {
        
        logEntry = `${timestamp}, ${req.url}, ${req.method} (Formato desconhecido)`;
    }

    const logFileName = path.join(logDir, `access-${new Date().toISOString().slice(0, 10)}.log`); // Log por dia

    fs.appendFile(logFileName, logEntry + '\n', (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo de log:', err);
        }
    });

    next(); 
};

export default logger;