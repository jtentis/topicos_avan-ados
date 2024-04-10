import CursoModel from "../database/models/cursoModel";
import {cursoInterface} from "../interfaces/cursoInterface";
import {v4 as uuidv4} from "uuid";
import {Identifier, STRING, TEXT} from "sequelize";
import AlunoModel from "../database/models/alunoModel";
import aluno_cursoModel from "../database/models/aluno_cursoModel";
import sequelize from "../database/connection";

export default class cursoRepository {

    async find(id: Identifier) {
        return await CursoModel.findByPk(id);
    }

    async insert({nome}: cursoInterface){
        aluno_cursoModel.init({
            id_curso: TEXT
        }, {sequelize});
        CursoModel.belongsToMany(AlunoModel, {through: 'aluno_curso'})
        await CursoModel.create({
            id: uuidv4(),
            nome: nome,
        });
    }

    async selectAll() {
        return CursoModel.findAll({
            attributes: {exclude: ['deleted_at', 'created_at', 'updated_at']}
        });
    }

    async selectOne(id: Identifier) {
        return CursoModel.findOne({
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

    async update(id:String, {nome}: cursoInterface) {
        await CursoModel.update({nome},{
            where: {
                id: id,
            },
        });
    }

    async destroy(id:String) {
        await CursoModel.destroy({
            where: {
                id: id,
            },
        });
    }
}