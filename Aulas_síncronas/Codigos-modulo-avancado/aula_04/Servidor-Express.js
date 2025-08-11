// Importing routes
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3600;

// Middleware
app.use(cors());
app.use(express.json());

//Config inicial 

// Routes
app.get('/', (req, res) => {
    const retorno = {
        mensagem: 'Requisicao realizada com sucesso!'
    };
    res.json(retorno);
});

app.get('/produtos', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Produto 1', preco: 10.00 },   
        { id: 2, nome: 'Produto 2', preco: 20.00 },
        { id: 3, nome: 'Produto 3', preco: 30.00 }
    ];
    res.json(produtos);
});


app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    console.log(`Produto recebido: ${nome}, Preço: ${preco}`);
    const novoProduto = {
        id,
        nome, 
        preco
    };
    
    res.status(201).json(novoProduto);
}); 


// Starting the server
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:3600`);
});



