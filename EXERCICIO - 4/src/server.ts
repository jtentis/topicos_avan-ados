import express from "express";
import "./database/connection"
// import rotas from "./controllers";
import {criarAluno, listarAlunos} from "./controllers/alunoController";

const app = express();
app.use(express.json());

app.post("/criarAluno", criarAluno);
app.get("/listarAluno", listarAlunos);

app.listen(4000, () => console.log(`Servidor na porta: ${4000}`))