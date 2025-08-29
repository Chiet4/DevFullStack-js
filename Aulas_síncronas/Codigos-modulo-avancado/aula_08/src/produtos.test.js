const request = require("supertest");
const { app } = require("../src/Exemplo-servidor-CRUD-Prisma");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

let CAT_ID;
let PROD_A_ID; 
let PROD_B_ID; 

beforeAll(async () => {
  await prisma.$connect();

  // Garante uma categoria válida para os produtos
  const cat =
    (await prisma.categoria.findFirst()) ||
    (await prisma.categoria.create({ data: { nome: "TEMP_CAT" } }));
  CAT_ID = cat.id;

  // Cria DOIS produtos base para os testes
  const a = await prisma.produto.create({
    data: { nome: "Produto A (base)", estoque: 10, preco: 20.5, categoria_id: CAT_ID },
  });
  const b = await prisma.produto.create({
    data: { nome: "Produto B (base)", estoque: 5, preco: 15.0, categoria_id: CAT_ID },
  });

  PROD_A_ID = a.id;
  PROD_B_ID = b.id;
});

describe("Rotas de Produtos CRUD simples, com 2 itens base", () => {
  // GET (lista)
  test("GET /produtos → 200 (lista array)", async () => {
    const res = await request(app).get("/produtos");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // GET (por id existente)
  test("GET /produtos/:id (existente) → 200", async () => {
    const res = await request(app).get(`/produtos/${PROD_A_ID}`);
    expect(res.status).toBe(200);
    expect(res.body?.id).toBe(PROD_A_ID);
  });

  // GET (por id inexistente)
  test("GET /produtos/:id (inexistente) → 404", async () => {
    const res = await request(app).get(`/produtos/12w2w23e33e4d4r4`);
    expect(res.status).toBe(404);
  });

  // POST cria e deleta na sequência só pra validar a rota
  test("POST /produtos → 201 e apaga em seguida", async () => {
    const res = await request(app).post("/produtos").send({
      nome: "Criado no teste (POST)",
      estoque: 3,
      preco: 11.5,
      categoria_id: CAT_ID,
    });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();

    // limpeza do que foi criado aqui
    await request(app).delete(`/produtos/${res.body.id}`);
  });

  // PUT atualiza produto A por completo
  test("PUT /produtos/:id (existente) → 200 (atualiza completo)", async () => {
    const res = await request(app)
      .put(`/produtos/${PROD_A_ID}`)
      .send({
        nome: "Produto A (PUT)",
        estoque: 99,
        preco: 99.99,
        categoria_id: CAT_ID,
      });

    expect(res.status).toBe(200);
    expect(res.body.nome).toBe("Produto A (PUT)");
    expect(res.body.estoque).toBe(99);
    expect(Number(res.body.preco)).toBe(99.99);
    expect(res.body.categoria_id).toBe(CAT_ID);
  });

  // PUT id inexistente
  test("PUT /produtos/:id (inexistente) → 4xx/5xx", async () => {
    const res = await request(app)
      .put(`/produtos/111111121s2s2s2s2s2s`)
      .send({
        nome: "Nao existe",
        estoque: 1,
        preco: 1,
        categoria_id: CAT_ID,
      });
    expect(res.status).toBeGreaterThanOrEqual(400);
  });

  // PATCH atualiza parcialmente produto B
  test("PATCH /produtos/:id (existente) → 200 (atualiza parcial)", async () => {
    const res = await request(app)
      .patch(`/produtos/${PROD_B_ID}`)
      .send({ estoque: 77 }); // apenas um campo
    expect(res.status).toBe(200);
    expect(res.body.estoque).toBe(77);

    // Confere que nome original permaneceu
    const check = await request(app).get(`/produtos/${PROD_B_ID}`);
    expect(check.status).toBe(200);
    expect(check.body.nome).toMatch(/Produto B/);
  });

  // PATCH id inexistente
  test("PATCH /produtos/:id (inexistente) → 4xx/5xx", async () => {
    const res = await request(app).patch(`/produtos/2w2e3e3e3sdsawqddxw`).send({ estoque: 1 });
    expect(res.status).toBeGreaterThanOrEqual(400);
  });

  // DELETE remove os DOIS ao final
  test("DELETE /produtos/:id (A) → 200", async () => {
    const res = await request(app).delete(`/produtos/${PROD_A_ID}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(PROD_A_ID);
    PROD_A_ID = undefined;
  });

  test("DELETE /produtos/:id (B) → 200", async () => {
    const res = await request(app).delete(`/produtos/${PROD_B_ID}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(PROD_B_ID);
    PROD_B_ID = undefined;
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});