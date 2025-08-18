const express = require('express');
const router = express.Router();
const { turmas, alunos, nextId } = require('./db');

// POST /turmas - Cria nova turma
router.post('/', (req, res) => {
  const { nome, professorId } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Nome da turma é obrigatório' });

  const novaTurma = { id: nextId(turmas), nome, professorId: professorId || null, alunosIds: [] };
  turmas.push(novaTurma);
  res.status(201).json(novaTurma);
});

// GET /turmas - Lista todas com total de alunos
router.get('/', (_req, res) => {
  const resumo = turmas.map(t => ({
    id: t.id,
    nome: t.nome,
    professorId: t.professorId,
    totalAlunos: t.alunosIds.length,
  }));
  res.json(resumo);
});

// GET /turmas/:id - Detalhes + alunos
router.get('/:id', (req, res) => {
  const turma = turmas.find(t => t.id === parseInt(req.params.id));
  if (!turma) return res.status(404).json({ erro: 'Turma não encontrada' });

  const alunosDaTurma = alunos.filter(a => turma.alunosIds.includes(a.id));
  res.json({ ...turma, alunos: alunosDaTurma });
});

// PUT /turmas/:id - Atualiza turma
router.put('/:id', (req, res) => {
  const turma = turmas.find(t => t.id === parseInt(req.params.id));
  if (!turma) return res.status(404).json({ erro: 'Turma não encontrada' });

  const { nome, professorId } = req.body;
  if (nome) turma.nome = nome;
  if (professorId !== undefined) turma.professorId = professorId;
  res.json(turma);
});

// DELETE /turmas/:id - Remove se não houver alunos
router.delete('/:id', (req, res) => {
  const idx = turmas.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ erro: 'Turma não encontrada' });
  if (turmas[idx].alunosIds.length > 0) {
    return res.status(400).json({ erro: 'Não é possível remover turma com alunos matriculados' });
  }
  turmas.splice(idx, 1);
  res.status(204).send();
});

// POST /turmas/:turmaId/matricular/:alunoId - Matricula aluno
router.post('/:turmaId/matricular/:alunoId', (req, res) => {
  const turmaId = parseInt(req.params.turmaId);
  const alunoId = parseInt(req.params.alunoId);

  const turma = turmas.find(t => t.id === turmaId);
  if (!turma) return res.status(404).json({ erro: 'Turma não encontrada' });

  const aluno = alunos.find(a => a.id === alunoId);
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });

  if (turma.alunosIds.includes(alunoId)) {
    return res.status(400).json({ erro: 'Aluno já está matriculado nessa turma' });
  }

  turma.alunosIds.push(alunoId);
  res.json({ mensagem: 'Aluno matriculado com sucesso', turma });
});

module.exports = router;
