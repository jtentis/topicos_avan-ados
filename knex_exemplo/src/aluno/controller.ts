import { Request, Response } from "express"
import alunoService from "./alunoModel"

export async function CriarAluno(request: Request, response: Response) {
    const { nome, matricula } = request.body;
    await alunoService.criar({ nome, matricula });
    response.status(201).send("Aluno cadastrado com sucesso!");
}

export async function ListarAlunosSemCursos(request: Request, response: Response) {
    const alunos = await alunoService.listarSemCursos();
    response.json(alunos);
}

export async function VisualizarAluno(request: Request, response: Response) {
    const alunoId = Number(request.params.id);
    const aluno = await alunoService.listaUmAlunoPorId(alunoId);
    if (aluno) {
        response.json(aluno);
    } else {
        response.status(404).send("Aluno não encontrado");
    }
}

export async function EditarAluno(request: Request, response: Response) {
    const alunoId = Number(request.params.id);
    const { nome, matricula } = request.body;
    await alunoService.editarAluno(alunoId, { nome, matricula });
    response.send("Aluno editado com sucesso!");
}

export async function DeletarAluno(request: Request, response: Response) {
    const alunoId = Number(request.params.id);
    console.log(alunoId)
    await alunoService.deletarAluno(alunoId);
    response.send("Aluno deletado com sucesso!");

}
