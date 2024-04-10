import express, { Router } from "express";
import {criarAluno, deletarAluno, editarAluno, listarAluno, listarAlunos} from "./alunoController";

const alunos: Router = express.Router();

alunos.post('/criarAluno', criarAluno);
alunos.get('/listarAlunos', listarAlunos);
alunos.get('/listarAluno/:id', listarAluno);
alunos.put('/editarAluno/:id', editarAluno);
alunos.patch('/editarAluno/:id', editarAluno);
alunos.delete('/deletarAluno/:id', deletarAluno);
export default alunos;