import { Request, Response, NextFunction } from "express";
import AlunoRepository from "../../repositories/alunoRepository";
import Aluno from "../../database/models/Aluno";

export const listarAlunos = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const repository = new AlunoRepository();
    let alunos = await repository.getAll();

    res.status(200).json({ alunos });

};

export const criarAluno = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
  const { nome, curso } = req.body;
  await Aluno.criarAluno('joao');

  res.status(200).json("certinho pai");

};