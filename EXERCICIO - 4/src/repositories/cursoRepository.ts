import CursoModel from "../database/models/cursoModel";
import {cursoInterface} from "../interfaces/cursoInterface";
import {v4 as uuidv4} from "uuid";
import {Identifier} from "sequelize";
import alunoModel from "../database/models/alunoModel";

export default class cursoRepository {

    async find(id: Identifier) {
        return await CursoModel.findByPk(id);
    }

    async insert({nome}: cursoInterface){
        // let teste = CursoModel.belongsToMany(AlunoModel, {
        //     through: 'aluno_curso',
        //     foreignKey: 'id_aluno',
        // })
        await CursoModel.bulkCreate([{
            id: uuidv4(),
            nome: nome,
        }],{
            ignoreDuplicates: true,
            include:[{
                model: alunoModel,
                as: 'alunos',
                // foreignKey: 'id_alunos'
            }]
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