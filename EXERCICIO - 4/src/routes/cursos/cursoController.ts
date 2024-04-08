import {Request, Response, NextFunction} from "express";
import CursoRepository from "../../repositories/cursoRepository";
import cursoModel from "../../database/models/cursoModel";

export const criarCurso = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new CursoRepository();
    const {nome} = req.body;
    await repository.insert({nome});

    res.status(200).send("Dados inseridos com sucesso!");
}
export const listarCursos = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new CursoRepository();
    let cursos = await repository.selectAll();

    res.status(200).json({message:"Lista dos cursos:", cursos});
};

export const listarCursosSemCurso = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new CursoRepository();
    let cursos = await repository.selectNomes();

    res.status(200).json({message:"Lista dos nomes dos cursos:", cursos});
};

export const editarCurso = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new CursoRepository();
    const {nome} = req.body;
    const id = String(req.params.id);
    const find = await cursoModel.findByPk(id);

    try{
        if(find){
            await repository.update(id,{
                nome: nome,
            });
            res.status(200).json({message:"Curso atualizado com sucesso!"});
        }else{
            res.status(404).json({message:"Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error:error.message});
    }
};

export const deletarCurso = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new CursoRepository();
    const id = String(req.params.id);
    const find = await cursoModel.findByPk(id);

    try{
        if(find){
            await repository.destroy(id);
            res.status(200).json({message:"Curso deletado com sucesso!"});
        }else{
            res.status(404).json({message:"Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error:error.message});
    }
};