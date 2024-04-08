import AlunoModel from "../database/models/alunoModel";
import {alunoInterface} from "../interfaces/alunoInterface";
import {v4 as uuidv4} from "uuid";
import {Identifier} from "sequelize";

export default class AlunoRepository {

    async findId(id:Identifier){
        await AlunoModel.findByPk(id);
    }
    async insert({nome, matricula, curso}: alunoInterface){
        await AlunoModel.create({
            id: uuidv4(),
            nome: nome,
            matricula: matricula,
            curso: curso,
        });
    }

    async selectAll() {
        return AlunoModel.findAll({
            attributes: {exclude: ['deleted_at', 'created_at', 'updated_at']}
        });
    }

    async selectNomes() {
        return AlunoModel.findAll({
            attributes:[
                'nome'
            ]
        });
    }

    async update(id:String, {nome, curso}: alunoInterface) {
        await AlunoModel.update({nome, curso},{
            where: {
                id: id,
            },
        });
    }

    async destroy(id:String) {
        await AlunoModel.destroy({
            where: {
                id: id,
            },
        });
    }
}