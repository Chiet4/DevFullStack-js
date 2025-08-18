  const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: () => true  // não lançar erro se status for 400 ou 500
});

describe('Testes da API de Escola', () => {

  let aluno, aluno2, professor, turma;

  test('Criar alunos', async () => {
    const res1 = await api.post('/alunos', { nome: 'João Silva', email: 'joao@email.com' });
    const res2 = await api.post('/alunos', { nome: 'Maria Rosa', email: 'maria@email.com' });

    expect(res1.status).toBe(201);
    expect(res2.status).toBe(201);
    expect(res1.data).toHaveProperty('id');
    expect(res1.data.nome).toBe('João Silva');

    aluno = res1.data;
    aluno2 = res2.data;
  });

  test('Criar professor', async () => {
    const res = await api.post('/professores', { nome: 'Prof. Helena', email: 'helena@escola.com' });

    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty('id');
    expect(res.data.nome).toBe('Prof. Helena');

    professor = res.data;
  });

  test('Criar turma', async () => {
    const res = await api.post('/turmas', {
      nome: 'Turma de Ciências',
      professorId: professor.id
    });

    expect(res.status).toBe(201);
    expect(res.data.nome).toMatch(/Ciências/);
    expect(res.data.alunosIds.length).toBe(0);

    turma = res.data;
  });

  test('Matricular alunos na turma', async () => {
    const res1 = await api.post(`/turmas/${turma.id}/matricular/${aluno.id}`);
    const res2 = await api.post(`/turmas/${turma.id}/matricular/${aluno2.id}`);

    expect(res1.status).toBe(200);
    expect(res2.status).toBe(200);
    expect(res2.data.turma.alunosIds.length).toBe(2);
  });

  test('Atualizar aluno', async () => {
    const res = await api.put(`/alunos/${aluno.id}`, { nome: 'João Pedro' });

    expect(res.status).toBe(200);
    expect(res.data.nome).toBe('João Pedro');
  });

  test('Tentar deletar turma com alunos (deve falhar)', async () => {
    const res = await api.delete(`/turmas/${turma.id}`);

    expect(res.status).toBe(400);
    expect(res.data.erro).toMatch(/Não é possível/);
  });

  test('Ver detalhes da turma', async () => {
    const res = await api.get(`/turmas/${turma.id}`);

    expect(res.status).toBe(200);
    expect(res.data.alunos.length).toBe(2);
    expect(res.data.alunos[0]).toHaveProperty('nome');
  });
});
