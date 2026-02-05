const fs = require('fs');
const http = require('http');
const path = require('path');
require('dotenv').config();

const dirPath = process.argv[2];

if (!dirPath) {
  console.error('Por favor, informe o nome do diretório como argumento.');
  process.exit(1);
}

const port = process.env.Port || 3333;

const server = http.createServer((req, res) => {
  const absolutePath = path.resolve(dirPath);
  fs.readdir(absolutePath, (err, files) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro ao ler o diretório: ' + err.message);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Lista de Arquivos e Subdiretórios</h1>');
    res.write('<ul>');
    files.forEach(file => {
      res.write(`<li>${file}</li>`);
    });
    res.write('</ul>');
    res.end();
  });
});

server.listen(port, () => {
  console.log('Servidor rodando em http://localhost:3333');
  console.log(`Listando arquivos do diretório: ${dirPath}`);
});
