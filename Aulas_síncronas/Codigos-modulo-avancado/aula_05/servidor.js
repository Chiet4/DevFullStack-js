// INICIO - Configuração Inicial
const express = require('express');
const cors = require('cors');

const alunosRoutes = require('./alunos');
const professoresRoutes = require('./professores');
const turmasRoutes = require('./turmas');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
// FIM - Configuração Inicial

// Healthcheck
app.get('/', (req, res) => {
  res.send('Servidor está executando!');
});

// Rotas
app.use('/alunos', alunosRoutes);
app.use('/professores', professoresRoutes);
app.use('/turmas', turmasRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`);
});
