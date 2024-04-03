import { Request, Response } from "express"
import alunoService from "./alunoModel"

export async function CriarTabelaAluno(request: Request, response: Response) {
    await alunoService.CriarTabelaAluno();
    response.status(201).send("Tabela criada com sucesso!");
}

export async function CriarAluno(request: Request, response: Response) {
    const { nome, curso } = request.body;
    await alunoService.criar({ nome, curso });
    response.status(201).send("Aluno cadastrado com sucesso!");
}

export async function ListarAlunos(request: Request, response: Response) {
    const alunos = await alunoService.listarSemCursos();
    response.status(201).json(alunos);
}

export async function VisualizarAluno(request: Request, response: Response) {
    const id = String(request.params.id);
    const aluno = await alunoService.listaUmAlunoPorId(id);
    id ? response.json({message: "Aluno encontrado!", aluno}) : response.status(404).send("Aluno não encontrado");
    // if (id) {
    //     response.json({message: "Aluno encontrado!", aluno});
    // } else {
    //     response.status(404).send("Aluno não encontrado");
    // }
}

export async function EditarAluno(request: Request, response: Response) {
    const id = String(request.params.id);
    const { nome, curso } = request.body;
    await alunoService.editarAluno(id, { nome, curso });
    response.send("Aluno editado com sucesso!");
}

export async function DeletarAluno(request: Request, response: Response) {
    const id = String(request.params.id);
    console.log(id)
    await alunoService.deletarAluno(id);
    response.send("Aluno deletado com sucesso!");
}
