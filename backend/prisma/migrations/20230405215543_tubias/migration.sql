-- CreateTable
CREATE TABLE "Tubias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "profissao" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,

    CONSTRAINT "Tubias_pkey" PRIMARY KEY ("id")
);
