import { knexDB } from '../db';
import { alunoInterface } from './alunoInterface';
import {v4 as uuidv4} from "uuid";

class Aluno {
    async CriarTabelaAluno()  {
        await knexDB.schema.createTable('aluno', (table) => {
            table.uuid('id').primary()
            table.string('nome')
            table.string('curso')
        })
    }
    async criar({nome, curso}: alunoInterface)  {
        await knexDB('aluno').insert({
            id: uuidv4(),
            nome: nome,
            curso: curso
        });
    }

    async listarSemCursos(){
        return await knexDB.select().from('aluno');
    }
    async listaUmAlunoPorId(id: string){
        return await knexDB.select().from('aluno').where({id: id});
    }

    async editarAluno(id: string, { nome, curso }: alunoInterface) {
        return knexDB('aluno').where({ id: id }).update({ nome, curso });
    }

    async deletarAluno(id: string) {
        console.log('chocolate')
        console.log(id)
        return knexDB('aluno').where({ id: id }).del();
    }
}

export default new Aluno();
