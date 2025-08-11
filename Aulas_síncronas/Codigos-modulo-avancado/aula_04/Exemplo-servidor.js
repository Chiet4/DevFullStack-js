

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Requisicao concluida com sucesso!\n');
});

server.listen(7000, 'localhost', () => {
  console.log('Servidor rodando em http://localhost:7000/');
});
