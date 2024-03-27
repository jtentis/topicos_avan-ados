import {Request, Response} from "express"
import alunoService from "./alunoModel"

export async function CriarAluno(request: Request, response: Response) {
    await alunoService.criar({
         nome: 'Diego', 
         matricula: '123' 
    });
}

export async function ListarAluno(request: Request, response: Response) {
    let alunos = await alunoService.listar();
    console.log(alunos);
}
