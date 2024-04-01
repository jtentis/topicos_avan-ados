import { database } from '../database';
import { cursoInterface } from '../curso/cursoInterface';


class Curso {

  async criar({ nome, codigo }: cursoInterface) {
    await database('curso').insert({
      nome: nome,
      codigo: codigo
    });
  }

  async listarCursos() {
    return await database.select().from('curso');
  }

  async visualizarCurso(cursoId: number) {
    return await database.select().from('curso').where({ id: cursoId }).first();
  }

  async editarCurso(cursoId: number, { nome, codigo }: cursoInterface) {
    return await database('curso').where({ id: cursoId }).update({ nome, codigo });
  }

  async deletarCurso(cursoId: number) {
    return await database('curso').where({ id: cursoId }).del();
  }
}

export default new Curso();
