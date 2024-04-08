import {Request, Response, NextFunction} from "express";
import AlunoRepository from "../repositories/alunoRepository";
import alunoModel from "../database/models/alunoModel";

export const criarAluno = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    const {nome, matricula, curso} = req.body;
    await repository.insert({nome, matricula, curso});

    res.status(200).send("Dados inseridos com sucesso!");
}
export const listarAlunos = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    let alunos = await repository.selectAll();

    res.status(200).json({message:"Lista dos alunos:", alunos});
};

export const listarAlunosSemCurso = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    let alunos = await repository.selectNomes();

    res.status(200).json({message:"Lista dos nomes dos alunos:", alunos});
};

export const editarAluno = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    const {nome, curso} = req.body;
    const id = String(req.params.id);
    const find = await alunoModel.findByPk(id);

    try{
        if(find){
            await repository.update(id,{
                nome: nome,
                curso: curso
            });
            res.status(200).json({message:"Aluno atualizado com sucesso!"});
        }else{
            res.status(404).json({message:"Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error:error.message});
    }
};

export const deletarAluno = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    const id = String(req.params.id);
    const find = await alunoModel.findByPk(id);

    try{
        if(find){
            await repository.destroy(id);
            res.status(200).json({message:"Aluno deletado com sucesso!"});
        }else{
            res.status(404).json({message:"Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error:error.message});
    }
};