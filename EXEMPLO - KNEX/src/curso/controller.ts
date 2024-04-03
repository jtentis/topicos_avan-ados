import { Request, Response } from 'express';
import cursoService from './cursoModel';

export async function CriarCurso(request: Request, response: Response) {
  const { nome, codigo } = request.body;
  await cursoService.criar({ nome, codigo });
  response.status(201).send('curso cadastrado com sucesso!');
}

export async function ListarCursos(request: Request, response: Response) {
  const cursos = await cursoService.listarCursos();
  response.json(cursos);
}

export async function VisualizarCurso(request: Request, response: Response) {
  const cursoId = Number(request.params.id);
  const curso = await cursoService.visualizarCurso(cursoId);
  if (curso) {
    response.json(curso);
  } else {
    response.status(404).send('curso não encontrado');
  }
}

export async function EditarCurso(request: Request, response: Response) {
  const cursoId = Number(request.params.id);
  const { nome, codigo } = request.body;
  await cursoService.editarCurso(cursoId, { nome, codigo });
  response.send('curso editado com sucesso!');
}

export async function DeletarCurso(request: Request, response: Response) {
  const cursoId = Number(request.params.id);
  await cursoService.deletarCurso(cursoId);
  response.send('curso deletado com sucesso');
}
