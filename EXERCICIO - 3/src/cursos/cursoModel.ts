import {knexDB} from '../db';
import { cursoInterface } from '../cursos/cursoInterface';
import {v4 as uuidv4} from "uuid";

class Curso {

    async CriarTabelaCurso()  {
        await knexDB.schema.createTable('curso', (table) => {
            table.uuid('id').primary()
            table.string('curso')
            table.string('codigo')
        })
    }
    async criar({ nome, codigo }: cursoInterface)    {
        await knexDB('curso').insert({
            id: uuidv4(),
            nome: nome,
            codigo: codigo
        });
    }

    async listarCursos() {
        return await knexDB.select().from('curso');
    }

    async visualizarCurso(id: string) {
        return await knexDB.select().from('curso').where({ id: id }).first();
    }

    async editarCurso(id: string, { nome, codigo }: cursoInterface) {
        return await knexDB('curso').where({ id: id }).update({ nome, codigo });
    }

    async deletarCurso(id: string) {
        return await knexDB('curso').where({ id: id }).del();
    }
}

export default new Curso();
