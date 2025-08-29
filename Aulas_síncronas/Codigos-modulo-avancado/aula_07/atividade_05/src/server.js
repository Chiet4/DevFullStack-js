import express from "express";
import { PrismaClient } from "@prisma/client";


const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// status da API
app.get("/", (_req, res) => res.json({ status: "ok" }));

// listar usuários com posts
app.get("/usuarios", async (_req, res) => {
  try {
    const users = await prisma.usuario.findMany();
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
});

// criar usuário
app.post("/usuarios", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "name e email são obrigatórios" });

  try {
    const user = await prisma.usuario.create({ data: { name, email } });
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res
      .status(400)
      .json({ error: "Não foi possível criar o usuário (email único?)" });
  }
});

// posts publicados 
app.get("/posts", async (_req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erro ao listar posts" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Disponível -> http://localhost:${PORT}`));
