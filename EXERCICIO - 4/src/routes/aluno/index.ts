import express, { Router } from "express";
import {criarAluno, listarAlunos} from "./controller";

const alunos: Router = express.Router();

alunos.get("/aluno", listarAlunos);
alunos.post("/aluno", criarAluno);

export default alunos;