import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const tubias = await prisma.tubias.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: "Tubias",
      profissao: "Tubiano",
      mensagem: "Ola me lhamo tubias mano",
      idade: 19,
      image:
        "https://pepe.ismaelb.dev/images/5fee81ff-f902-4562-8ec5-732038f6b5b7.jpg",
    },
  });

  const josias = await prisma.tubias.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nome: "Josias",
      profissao: "Josiano",
      mensagem: "Ola me lhamo josias mano",
      idade: 19,
      image:
        "https://pepe.ismaelb.dev/images/62ef7e08-1e3e-4dfa-a248-8e02bb6ef87c.jpg",
    },
  });
  console.log({ tubias, josias });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
