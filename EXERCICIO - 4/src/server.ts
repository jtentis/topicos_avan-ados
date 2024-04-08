import express from "express";
import "./database/connection"
import {criarAluno, deletarAluno, editarAluno, listarAlunos, listarAlunosSemCurso} from "./controllers/alunoController";
import {criarCurso, deletarCurso, editarCurso, listarCursos, listarCursosSemCurso} from "./controllers/cursoController";

const app = express();
app.use(express.json());

app.post('/criarAluno', criarAluno);
app.get('/listarAlunos', listarAlunos);
app.get('/listarNomesAlunos', listarAlunosSemCurso);
app.put('/editarAluno/:id', editarAluno);
app.delete('/deletarAluno/:id', deletarAluno);

app.post('/criarCurso', criarCurso);
app.get('/listarCursos', listarCursos);
app.get('/listarNomesCursos', listarCursosSemCurso);
app.put('/editarCurso/:id', editarCurso);
app.delete('/deletarCurso/:id', deletarCurso);

app.listen(4000, () => console.log(`Servidor na porta: ${4000}`))