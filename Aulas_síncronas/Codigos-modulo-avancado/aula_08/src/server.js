const {app} = require('./Exemplo-servidor-CRUD-Prisma');
const PORT = 3000;
// INICIO - Inicializacao do servidor
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});
// FIM - Inicializacao do servidor