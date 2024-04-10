import express, { Router } from "express";
import {criarCurso, deletarCurso, editarCurso, listarCursos, listarCursosSemCurso} from "./cursoController";

const cursos: Router = express.Router();

cursos.post('/criarCurso', criarCurso);
cursos.get('/listarCursos', listarCursos);
cursos.get('/listarNomesCursos', listarCursosSemCurso);
cursos.put('/editarCurso/:id', editarCurso);
cursos.patch('/editarCurso/:id', editarCurso);
cursos.delete('/deletarCurso/:id', deletarCurso);

export default cursos;