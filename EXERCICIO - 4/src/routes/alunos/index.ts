import express, { Router } from "express";
import {criarAluno, deletarAluno, editarAluno, listarAlunos, listarAlunosSemCurso} from "./alunoController";

const alunos: Router = express.Router();

alunos.post('/criarAluno', criarAluno);
alunos.get('/listarAlunos', listarAlunos);
alunos.get('/listarNomesAlunos', listarAlunosSemCurso);
alunos.put('/editarAluno/:id', editarAluno);
alunos.delete('/deletarAluno/:id', deletarAluno);
export default alunos;