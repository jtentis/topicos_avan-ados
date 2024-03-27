import { database } from '../database';

class Aluno {

    async criar({nome, matricula}: AlunoInterface){
        await database('aluno').insert({
            nome: nome,
            matricula: matricula
        });
    }

    async listar(){
        return await database.select().from('aluno');
    }
}

export default new Aluno();