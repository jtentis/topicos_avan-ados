import express from "express";
import { CriarAluno, ListarAluno } from "./aluno/controller";

const app = express();
app.use(express.json());

app.post('/aluno', CriarAluno)
app.get('/aluno', ListarAluno)

app.listen(3000);