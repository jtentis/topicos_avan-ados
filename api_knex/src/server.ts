import express from "express";

import {
    CriarAluno,
    ListarAlunos,
    VisualizarAluno,
    EditarAluno,
    DeletarAluno,
    CriarTabelaAluno
} from "./alunos/alunoController";

import {
    CriarCurso,
    ListarCursos,
    VisualizarCurso,
    EditarCurso,
    DeletarCurso,
    CriarTabelaCurso
} from "./cursos/cursoController";

const app = express();
app.use(express.json());

app.get('/tabelaAluno', CriarTabelaAluno)
app.post('/CriarAluno', CriarAluno)
app.get('/ListarAluno', ListarAlunos)
app.get('/VisualizarAluno/:id', VisualizarAluno)
app.put('/EditarAluno/:id', EditarAluno)
app.delete('/DeletarAluno/:id', DeletarAluno)

app.get('/tabelaCurso', CriarTabelaCurso)
app.post('/CriarCurso', CriarCurso);
app.get('/ListarCurso', ListarCursos);
app.get('/VisualizarCurso/:id', VisualizarCurso);
app.put('/EditarCurso/:id', EditarCurso);
app.delete('/DeletarCurso/:id', DeletarCurso)

app.listen(3000, () => console.log(`Servidor na porta: ${3000}`))