// INICIO - Configuracao Inicial
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
// FIM - Configuracao Inicial

// INICIO - Gerenciamento de rotas
app.get("/", (req, res) => {
  res.send("Servidor está executando!");
});

app.get("/produtos", async (request, response) => {
  const produtosBanco = await prisma.produto.findMany({
    orderBy: {
      preco: "asc",
    },
  });

  console.log(produtosBanco);

  response.status(200).json(produtosBanco);
});

app.get("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const produto = await prisma.produto.findFirst({ where: { id } });
  if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
  res.status(200).json(produto);
});

app.get("/produtos/nome/:nome", async (request, response) => {
  const { nome } = request.params;

  console.log(nome);

  const produtoBanco = await prisma.produto.findMany({
    where: {
      nome: {
        contains: nome,
      },
    },
  });

  console.log(produtoBanco);

  response.status(200).json(produtoBanco);
});

app.post("/produtos", async (request, response) => {
  const { nome, estoque, preco, categoria_id } = request.body;

  const novoProduto = await prisma.produto.create({
    data: {
      nome,
      estoque,
      preco,
      categoria_id,
    },
  });

  response.status(201).json(novoProduto);
});

app.put("/produtos/:id", async (request, response) => {
  const { id } = request.params;

  const { nome, estoque, preco, categoria_id } = request.body;

  const produtoAtualizado = await prisma.produto.update({
    where: {
      id: id,
    },
    data: {
      nome,
      estoque,
      preco,
      categoria_id,
    },
  });

  response.status(200).json(produtoAtualizado);
});

app.patch("/produtos/:id", async (request, response) => {
  const { id } = request.params;

  const { nome, estoque, preco, categoria_id } = request.body;

  const produtoAtualizado = await prisma.produto.update({
    where: {
      id, // UUID é string, então mantenha assim
    },
    data: {
      nome,
      estoque,
      preco,
      categoria_id, // manter padrão
    },
  });

  response.status(200).json(produtoAtualizado);
});

app.delete("/produtos/:id", async (request, response) => {
  const { id } = request.params;

  const produtoDeletado = await prisma.produto.delete({
    where: {
      id: id,
    },
  });

  response.status(200).json(produtoDeletado);
});

// Exemplo SQL Puro no Prisma
app.get("/sql", async (request, response) => {
  const produtosDoBanco =
    await prisma.$queryRaw`SELECT * FROM produto WHERE id=1`;

  response.status(200).json(produtosDoBanco);
});

// FIM - Gerenciamento de rotas

module.exports = { app };
