import { Request, Response, NextFunction } from "express";
import AlunoRepository from "../../repositories/alunoRepository";

export const listarAlunos = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const repository = new AlunoRepository();
    let alunos = await repository.getAll();

    res.status(200).json({ alunos });

};