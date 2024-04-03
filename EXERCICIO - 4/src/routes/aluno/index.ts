import express, { Router } from "express";
import { listarAlunos } from "./controller";

const alunos: Router = express.Router();

alunos.get("/aluno", listarAlunos);

export default alunos;