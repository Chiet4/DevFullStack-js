

const express = require('express');
const router = express.Router();
const { alunos, nextId } = require('./db');

// POST /alunos
router.post('/', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }
  const novoAluno = { id: nextId(alunos), nome, email };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// GET /alunos 
router.get('/', (_req, res) => res.json(alunos));

// GET /alunos/:id 
router.get('/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
  res.json(aluno);
});

// PUT /alunos/:id 
router.put('/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });

  const { nome, email } = req.body;
  if (nome)  aluno.nome  = nome;
  if (email) aluno.email = email;
  res.json(aluno);
});

// DELETE /alunos/:id
router.delete('/:id', (req, res) => {
  const idx = alunos.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ erro: 'Aluno não encontrado' });

  alunos.splice(idx, 1);
  res.status(204).send();
});

module.exports = router;
