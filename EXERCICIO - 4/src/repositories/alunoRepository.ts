import AlunoModel from "../database/models/alunoModel";
import {alunoInterface} from "../interfaces/alunoInterface";
import {v4 as uuidv4} from "uuid";
import {Identifier, TEXT} from "sequelize";
import CursoModel from "../database/models/cursoModel";
import aluno_cursoModel from "../database/models/aluno_cursoModel";
import cursoModel from "../database/models/cursoModel";

export default class AlunoRepository {

    async find(id: Identifier) {
        return await AlunoModel.findByPk(id);
    }

    async insert({nome, matricula, curso}: alunoInterface) {
        // AlunoModel.belongsToMany(CursoModel, {
        //     as: 'cursos',
        //     through: 'aluno_curso',
        //     foreignKey: 'id',
        // })
        await AlunoModel.bulkCreate([{
            id: uuidv4(),
            nome: nome,
            matricula: matricula,
            curso: curso,
        }],{
            ignoreDuplicates: true,
            include:[{
                model: cursoModel,
                as: 'cursos',
            }]
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