import { config } from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/tubias", async (req: Request, res: Response) => {
  const resp = await prisma.tubias.findMany();
  res.status(200).json(resp);
});

app.post("/tubias", async (req: Request, res: Response) => {
  const body = req.body;

  const nome = body?.nome;
  const mensagem = body?.mensagem;
  const profissao = body?.profissao;
  const idade = body?.idade;

  if (!nome || !mensagem || !profissao || !idade) {
    res.status(400).send("Dados inválidos");
  }

  const parsedNumber = parseInt(idade);
  const image = await fetch("https://pepe.ismaelb.dev/api/random");
  const imageJson = await image.json();

  try {
    const user = await prisma.tubias.create({
      data: {
        profissao: profissao,
        nome: nome,
        mensagem: mensagem,
        idade: parsedNumber,
        image: imageJson.image,
      },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send("Email duplicado");
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
});

process.on("SIGINT", () => process.exit(1));
