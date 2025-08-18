// simulando db
const alunos = [
  { id: 1, nome: 'Ana Souza',   email: 'ana.souza@email.com' },
  { id: 2, nome: 'Bruno Lima',  email: 'bruno.lima@email.com' },
  { id: 3, nome: 'Clara Mendes',email: 'clara.mendes@email.com' },
];

const professores = [
  { id: 1, nome: 'Prof. Marcos Oliveira', email: 'marcos@escola.com' },
  { id: 2, nome: 'Prof. Carla Reis',      email: 'carla@escola.com'  },
  { id: 3, nome: 'Prof. Renata Castro',   email: 'renata@escola.com' },
];

const turmas = [
  { id: 1, nome: 'Turma de Matemática', professorId: 1, alunosIds: [1, 2] },
  { id: 2, nome: 'Turma de História',   professorId: 2, alunosIds: []     },
  { id: 3, nome: 'Turma de Física',     professorId: 3, alunosIds: [3]    },
];

// util simples para próximo ID seguro mesmo após deletes
function nextId(list) {
  const max = list.reduce((m, item) => Math.max(m, item.id), 0);
  return max + 1;
}

module.exports = { alunos, professores, turmas, nextId };
