import {Request, Response, NextFunction} from "express";
import AlunoRepository from "../repositories/alunoRepository";
import {getAttributes} from "sequelize-typescript";
import {alunoInterfaceAll} from "../interfaces/alunoInterface";
import AlunoModel from "../database/models/alunoModel";

export const listarAlunos = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    let alunos = await repository.select();

    res.status(200).json({message:"Lista dos alunos:", alunos});
};

export const criarAluno = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new AlunoRepository();
    const {nome, matricula} = req.body;
    await repository.insert({nome, matricula});

    res.status(200).send("Dados inseridos com sucesso!");
}