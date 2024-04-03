import express from "express";
import { CriarAluno, ListarAlunosSemCursos, VisualizarAluno, EditarAluno, DeletarAluno } from "./aluno/controller";
import { CriarCurso, ListarCursos, VisualizarCurso, EditarCurso, DeletarCurso } from "./curso/controller";

const app = express();
app.use(express.json());

app.post('/aluno', CriarAluno)
app.get('/aluno', ListarAlunosSemCursos)
app.get('/aluno/:id', VisualizarAluno)
app.put('/aluno/:id', EditarAluno)
app.delete('/aluno/:id', DeletarAluno)

app.post('/curso', CriarCurso);
app.get('/curso', ListarCursos);
app.get('/curso/:id', VisualizarCurso);
app.put('/curso/:id', EditarCurso);
app.delete('/curso/:id', DeletarCurso)

app.listen(3000);