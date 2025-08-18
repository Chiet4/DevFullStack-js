const express = require('express');
const router = express.Router();
const { professores, nextId } = require('./db');

// POST /professores
router.post('/', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }
  const novoProfessor = { id: nextId(professores), nome, email };
  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});

// GET /professores
router.get('/', (_req, res) => res.json(professores));

// GET /professores/:id
router.get('/:id', (req, res) => {
  const professor = professores.find(p => p.id === parseInt(req.params.id));
  if (!professor) return res.status(404).json({ erro: 'Professor não encontrado' });
  res.json(professor);
});

// PUT /professores/:id
router.put('/:id', (req, res) => {
  const professor = professores.find(p => p.id === parseInt(req.params.id));
  if (!professor) return res.status(404).json({ erro: 'Professor não encontrado' });

  const { nome, email } = req.body;
  if (nome)  professor.nome  = nome;
  if (email) professor.email = email;
  res.json(professor);
});

// DELETE /professores/:id
router.delete('/:id', (req, res) => {
  const idx = professores.findIndex(p => p.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ erro: 'Professor não encontrado' });

  professores.splice(idx, 1);
  res.status(204).send();
});

module.exports = router;
