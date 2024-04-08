import CursoModel from "../database/models/cursoModel";
import {cursoInterface} from "../interfaces/cursoInterface";
import {v4 as uuidv4} from "uuid";

export default class cursoRepository {

    async insert({nome}: cursoInterface){
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

    async selectNomes() {
        return CursoModel.findAll({
            attributes:[
                'nome'
            ]
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