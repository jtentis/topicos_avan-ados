import AlunoModel from "../database/models/alunoModel";
import {alunoInterface} from "../interfaces/alunoInterface";
import {v4 as uuidv4} from "uuid";
import {Identifier, TEXT} from "sequelize";
import CursoModel from "../database/models/cursoModel";
import aluno_cursoModel from "../database/models/aluno_cursoModel";
import sequelize from "../database/connection";

export default class AlunoRepository {

    async find(id: Identifier) {
        return await AlunoModel.findByPk(id);
    }
    async insert({nome, matricula, curso}: alunoInterface) {
        aluno_cursoModel.init({
            id_aluno: TEXT
        }, {sequelize});
        AlunoModel.belongsToMany(CursoModel, {through: 'aluno_curso'})
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

    async selectOne(id: Identifier) {
        return AlunoModel.findOne({
            attributes: {
                exclude: [
                    'deleted_at',
                    'created_at',
                    'updated_at'
                ]
            },
            where: {
                id: id
            }
        });
    }

    async update(id: String, {nome, curso}: alunoInterface) {
        return AlunoModel.update({nome, curso}, {
            where: {
                id: id,
            },
        });
    }

    async destroy(id: String) {
        await AlunoModel.destroy({
            where: {
                id: id,
            },
        });
    }
}