import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  await prisma.post.deleteMany();
  await prisma.usuario.deleteMany();

  const alice = await prisma.usuario.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      posts: {
        create: [
          { title: 'Primeiro Post', content: 'Olá mundo!', published: true },
          { title: 'Rascunho', content: 'WIP', published: false }
        ]
      }
    }
  });

  const bob = await prisma.usuario.create({
    data: { name: 'Bob', email: 'bob@example.com' }
  });

  console.log({ alice, bob });
}

run()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
