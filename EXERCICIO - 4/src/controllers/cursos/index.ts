import express, { Router } from "express";
import {
    criarCurso,
    deletarCurso,
    editarCurso,
    listarCurso,
    listarCursos,
} from "./cursoController";

const cursos: Router = express.Router();

cursos.post('/criarCurso', criarCurso);
cursos.get('/listarCursos', listarCursos);
cursos.get('/listarNomesCursos', listarCurso);
cursos.put('/editarCurso/:id', editarCurso);
cursos.patch('/editarCurso/:id', editarCurso);
cursos.delete('/deletarCurso/:id', deletarCurso);

export default cursos;