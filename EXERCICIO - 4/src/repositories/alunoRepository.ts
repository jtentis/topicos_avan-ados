import AlunoModel from "../database/models/alunoModel";
import {alunoInterface, alunoInterfaceAll} from "../interfaces/alunoInterface";
import {v4 as uuidv4} from "uuid";

export default class AlunoRepository {
    async select() {
        await AlunoModel.findAll({
            attributes:[
                'id',
                'nome',
                'matricula',
                'created_at',
                'updated_at',
            ]
        });
    }

    async insert({nome, matricula}: alunoInterface){
        await AlunoModel.create({
            id: uuidv4(),
            nome: nome,
            matricula: matricula
        });
    }
}